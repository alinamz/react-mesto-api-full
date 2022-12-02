import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onCardDelete,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div
          className="profile__icon"
          style={{ backgroundImage: `url(${currentUser?.avatar})` }}
        />
        <button
          className="profile__update-avatar"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__redaction">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__pharagraph">{currentUser.about}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__images">
           { cards.map(card => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
