import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({ onDeleteClick, onCardLike, onCardClick, card }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(user => user._id === currentUser._id)

  function handleClick() {
    onCardClick(card)
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteCard() {
    onDeleteClick(card)
  }

  return (
    <li className="post">
      <img src={card.link} alt={card.name} className="post__image" onClick={handleClick} />
      { isOwner && <button className="post__delete opacity" onClick={handleDeleteCard}></button>}
      <div className="post__info">
        <h3 className="post__title">{card.name}</h3>
        <div className="post__like-container">
          <button
            type="button"
            className={`post__like-button ${isLiked && 'post__like-button_active'} opacity`}
            onClick={handleLikeClick}
          >
          </button>
          <span className="post__like-counter">
            {card.likes.length > 0 && card.likes.length}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Card;