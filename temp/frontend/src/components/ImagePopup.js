function ImagePopup({ card, onClose }) {
  const isOpen = card != null;
  return (
    <div
      className={`popup popup_color popup_type_full-image ${
        isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container popup__container_type_full-image">
        <img className="popup__full-image" src={card?.link} alt={card?.name} />
        <h2 className="popup__title popup__title_type_full-image">
          {card?.name}
        </h2>
        <button
          className="popup__close popup__close_type_full-image"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
