import closeIcon from "../../assets/close-icoon.svg";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  children,
  handleSubmit,
  title,
  buttonText,
  name,
  onClose,
  footer,
  isDisabled,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Close modal" />
        </button>

        <form onSubmit={handleSubmit} name={name} className="modal__form">
          {children}

          <div className="modal__actions">
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            {footer}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
