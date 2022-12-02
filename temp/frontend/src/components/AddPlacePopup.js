import { useEffect, useState } from "react";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(name, link);
  };

  return (
    <PopupWithForm
      buttonText="Сохранить"
      name="add-place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field-container">
          <input
            name="name"
            id="name-image"
            className="popup__input popup__input_type_name-image"
            type="text"
            maxLength="30"
            minLength="2"
            placeholder="Название"
            required
            value={name}
            onChange={handleNameChange}
          />
          <span className="name-image-error form__input-error"></span>
        </label>
        <label className="popup__field-container">
          <input
            name="link"
            id="link-image"
            className="popup__input popup__input_type_link-image"
            type="url"
            placeholder="Ссылка на картинку"
            required
            value={link}
            onChange={handleLinkChange}
          />
          <span className="link-image-error form__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
