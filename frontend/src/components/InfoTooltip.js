import React from "react";

function InfoTooltip({ isOpen, onClose, resultMessage }) {
  return (
    <div className={`popup popup_type_info ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <img
          className="popup__info-img"
          src={resultMessage.image}
          alt={resultMessage.text}
        />
        <h2 className="popup__title popup__title_info-text">
          {resultMessage.text}
        </h2>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
