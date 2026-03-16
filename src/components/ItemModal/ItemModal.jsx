import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.svg";

function ItemModal({ card, isOpen, onClose, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  function handleDeleteClick() {
    onDeleteClick(card);
  }

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={closeIcon} alt="Close modal" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__foter-info">
            <h2 className="modal__title">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {isOwn && (
            <button onClick={handleDeleteClick} className="modal__delete-btn">
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
