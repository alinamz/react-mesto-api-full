import PopupWithForm from "./PopupWithForm";
import { useRef, useState, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      buttonText="Сохранить"
      name="update-profile"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field-container">
          <input
            name="info"
            id="info-img"
            className="popup__input popup__input_type_info-img"
            type="url"
            placeholder="Ссылка на картинку"
            ref={avatarRef}
            required
          />
          <span className="info-img-error form__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
