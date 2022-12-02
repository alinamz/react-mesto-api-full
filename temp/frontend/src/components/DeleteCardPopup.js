import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

function DeleteCardPopup({ isOpen, onSubmit, onClose, cardId }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardId);
  };

  return (
    <PopupWithForm
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="confirmation-delete"
      title="Вы уверены?"
    >
      <fieldset className="popup__fieldset"></fieldset>
    </PopupWithForm>
  );
}

export default DeleteCardPopup;
