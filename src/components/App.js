import './App.css';
import React from 'react';
import Header from './Header.js';
import Register from "./Register.js";
import Login from './Login.js';
import Main from './Main.js';
import Footer from './Footer.js';
import InfoTooltip from './InfoTooltip.js'
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js'
import avatar from '../images/icons/avatar.svg';
import AddPlacePopup from './AddPlacePopup';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';



function App() {
  const [email, setEmail] = React.useState('email@email.com');
  const [isEditPopupOpened, setIsEditPopupOpened] = React.useState(false);
  const [isAddCardPopupOpened, setIsAddCardPopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isTooltipOpened, setIsTooltipOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpened: false
  });
  const [currentUser, setCurrentUser] = React.useState({
    name: 'User',
    about: 'About',
    avatar: avatar
  });
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  function showRequestError(error) {
    return console.log(`Ошибка: ${error}`);
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(data => {
        const [userData, cardData] = data
        setCurrentUser(userData)
        setCards(cardData)
      })
      .catch(error => showRequestError(error))
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleEditClick() {
    setIsEditPopupOpened(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpened(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link,
      isOpened: true
    })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpened(false);
    setIsEditPopupOpened(false);
    setIsAddCardPopupOpened(false);
    setIsTooltipOpened(false);
    setSelectedCard({
      isOpened: false
    })
  }

  function handleUserUpdate({ name, about }) {
    api.editUserProfile(name, about)
      .then(userdata => {
        setCurrentUser(userdata);
        closeAllPopups();
      })
      .catch(error => showRequestError(error))
  }

  function handleAvatarUpdate(link) {
    api.setAvatar(link)
      .then(userdata => {
        setCurrentUser(userdata);
        closeAllPopups()
      })
      .catch(error => showRequestError(error))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id)
    api.likePost(isLiked, card._id)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c)
        setCards(newCards)
      })
      .catch(error => showRequestError(error))
  }

  function handleDeleteCard(card) {
    api.deletePost(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id)
        setCards(newCards)
      })
      .catch(error => showRequestError(error))
  }

  function handlePlaceSubmit({ name, link }) {
    api.addNewPost(name, link)
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(error => showRequestError(error))
  }

  function handleRegister( email, password ) {
    api.register(email, password)
      .then(user => {
        console.log(user)
        setEmail(user.email)
        closeAllPopups()
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="root">
          <Switch>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/main" /> : <Redirect to="/signup" />}
            </Route>
            <ProtectedRoute
              path="/main"
              cards={cards}
              email={email}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}
              onEditProfile={handleEditClick}
              onAddCard={handleAddCardClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              loggedIn={loggedIn}
              component={Main}
            />
            <Route path="/signin">
              <Header linkText="Регистрация" />
              <Login />
            </Route>
            <Route path="/signup">
              <Header linkText="Вход" />
              <Register onRegister={handleRegister}/>
            </Route>
          </Switch>
          <InfoTooltip
            isOpened={isTooltipOpened}
            onClose={closeAllPopups}
          />
          <EditProfilePopup
            isOpened={isEditPopupOpened}
            onClose={closeAllPopups}
            onUpdateUser={handleUserUpdate}
          />
          <AddPlacePopup
            isOpened={isAddCardPopupOpened}
            onClose={closeAllPopups}
            onPlaceSubmit={handlePlaceSubmit}
          />
          <EditAvatarPopup
            isOpened={isEditAvatarPopupOpened}
            onClose={closeAllPopups}
            onUpdateAvatar={handleAvatarUpdate}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;