import "./DeleteConfirmationModal.css";
import closeIcon from "../../assets/close-icoon.svg";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={closeIcon} alt="Close modal" />
        </button>

        <p className="modal__title-type">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </p>

        <button className="modal__confirm" type="button" onClick={onConfirm}>
          Yes, delete item
        </button>

        <button className="modal__cancel" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
