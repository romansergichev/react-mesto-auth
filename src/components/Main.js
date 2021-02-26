
import React from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt="Аватар профиля" className="profile__avatar" />
          <div className="profile__avatar-overlay">
            <button
              type="button"
              onClick={props.onEditAvatar}
              className="profile__edit-avatar opacity"
            >
            </button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__currentUser-info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                onClick={props.onEditProfile}
                className="profile__edit opacity"
              >
              </button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={props.onAddCard}
          className="profile__add-button opacity"
        >
        </button>
      </section>
      <section className="posts">
        <ul className="posts__list">
          {props.cards.map((card) =>
            <Card
              onDeleteClick={props.onCardDelete}
              onCardLike={props.onCardLike}
              onCardClick={props.onCardClick}
              key={card._id}
              card={card}
            />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;