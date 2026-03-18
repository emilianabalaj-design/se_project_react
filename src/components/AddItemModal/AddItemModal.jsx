import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, handleAddItemSubmit, onClose }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    weather: "",
    link: "",
  });

  const isFormValid = values.name && values.link && values.weather;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItemSubmit({
      name: values.name,
      imageUrl: values.link,
      weather: values.weather,
    });
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      title={"New garment"}
      buttonText={"Add garment"}
      name={"add-garment-form"}
      handleSubmit={handleSubmit}
      onClose={onClose}
      isDisabled={!isFormValid}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="add-garment-name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="add-garment-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <label htmlFor="add-garment-image" className="modal__label">
          Image
          <input
            type="link"
            name="link"
            className="modal__input"
            id="add-garment-image"
            placeholder="Image URL"
            value={values.link}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>

      <fieldset className="modal__fieldset">
        <legend>Select the weather type:</legend>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="hot">
            Hot
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="warm">
            Warm
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
