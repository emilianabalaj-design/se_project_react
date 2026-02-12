import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { defaultClothingItems } from "../../utils/defaultClothingItem";
import "./App.css";

function App() {
  const [clothingItem, setClothingItem] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleAddGarmentSubmit() {
    handleCloseModal();
  }

  return (
    <div className="app">
      <Header handleOpenAddGarmentModal={handleOpenAddGarmentModal} />
      <Main
        clothingItem={clothingItem}
        handleOpenItemModal={handleOpenItemModal}
      />
      <Footer />
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onClose={handleCloseModal}
      />
      <ModalWithForm
        isOpen={activeModal === "add-garment-modal"}
        title={"New garment"}
        buttonText={"Add garment"}
        name={"add-garment-form"}
        handleSubmit={handleAddGarmentSubmit}
        onClose={handleCloseModal}
      >
        <fieldset className="modal__fieldset">
          <label htmlFor="add-garment-name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="add-garment-name"
              placeholder="Name"
            />
          </label>
        </fieldset>

        <fieldset className="modal__fieldset">
          <label htmlFor="add-garment-image" className="modal__label">
            Image
            <input
              type="text"
              className="modal__input"
              id="add-garment-image"
              placeholder="Image URL"
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
            />
            <label className="modal__label" htmlFor="cold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}
export default App;
