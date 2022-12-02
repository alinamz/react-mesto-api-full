import { useEffect, useState } from "react";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    e.preventDefault();
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      buttonText="Сохранить"
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field-container">
          <input
            name="name"
            id="name-input"
            className="popup__input popup__input_type_name"
            type="text"
            maxLength="40"
            minLength="2"
            placeholder="Имя профиля"
            required
            value={name || ""}
            onChange={handleNameChange}
          />
          <span className="name-input-error form__input-error"></span>
        </label>
        <label className="popup__field-container">
          <input
            name="job"
            id="job-input"
            className="popup__input popup__input_type_job"
            type="text"
            maxLength="200"
            minLength="2"
            placeholder="Описание профиля"
            required
            value={description || ""}
            onChange={handleDescriptionChange}
          />
          <span className="job-input-error form__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
