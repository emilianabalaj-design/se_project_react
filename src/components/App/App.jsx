import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile";

import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import { addItems, getItems, deleteItems } from "../../utils/api.js";
import * as auth from "../../utils/auth.js";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [clothingItem, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleCloseModal() {
    console.log("closing modal");
    setActiveModal("");
  }

  function handleAddGarmentSubmit() {
    handleCloseModal();
  }

  function handleTempUnitChange(unit) {
    setCurrentTempUnit(unit);
  }

  function handleOpenLoginModal() {
    setActiveModal("login");
  }

  function handleOpenRegisterModal() {
    setActiveModal("register");
  }

  function handleAddItemSubmit(inputValues) {
    const jwt = localStorage.getItem("jwt");

    addItems(inputValues, jwt).then((data) => {
      setClothingItems((prevItems) => [data, ...prevItems]);
      handleCloseModal();
    });
    console.log(inputValues);
  }

  function handleRegistration({ name, avatar, email, password }) {
    auth
      .signup({ name, avatar, email, password })
      .then(() => {
        return auth.signin({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return auth.checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        handleCloseModal();
      })
      .catch(console.error);
  }

  function handleLogin({ email, password }) {
    auth
      .signin({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          return auth.checkToken(res.token);
        }
      })
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          handleCloseModal();
        }
      })
      .catch(console.error);
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  }

  //TODO- Pass as a prop
  function handleDeleteItemSubmit(item) {
    const jwt = localStorage.getItem("jwt");

    deleteItems(item._id)
      .then(() => {
        setClothingItem((prevItems) =>
          prevItems.filter((i) => i._id !== item._id),
        );
        handleCloseModal();
      })
      .catch(console.error);
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) return;

    getItems(token)
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      return;
    }

    auth
      .checkToken(jwt)
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTempUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  const openConfirmationModal = (card) => {
    setCardToDelete(card);
    setActiveModal("confirm-delete");
  };

  const handleCardDelete = () => {
    if (!cardToDelete?._id) return;

    const jwt = localStorage.getItem("jwt");

    deleteItems(cardToDelete._id, jwt)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== cardToDelete._id),
        );
        handleCloseModal();
        setCardToDelete(null);
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <Header
            weatherData={weatherData}
            handleOpenAddGarmentModal={handleOpenAddGarmentModal}
            handleSignOut={handleSignOut}
            isLoggedIn={isLoggedIn}
            handleOpenRegisterModal={handleOpenRegisterModal}
            handleOpenLoginModal={handleOpenLoginModal}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItem={clothingItem}
                  handleOpenItemModal={handleOpenItemModal}
                  weatherData={weatherData}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItem={clothingItem}
                    handleOpenItemModal={handleOpenItemModal}
                    handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                  />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
          <ItemModal
            card={selectedCard}
            isOpen={activeModal === "item-modal"}
            onClose={handleCloseModal}
            onDeleteClick={openConfirmationModal}
          />
          <AddItemModal
            isOpen={activeModal === "add-garment-modal"}
            handleAddItemSubmit={handleAddItemSubmit}
            onClose={handleCloseModal}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "confirm-delete"}
            onClose={handleCloseModal}
            onConfirm={handleCardDelete}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={handleCloseModal}
            onRegister={handleRegistration}
            handleOpenLoginModal={handleOpenLoginModal}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onClose={handleCloseModal}
            onLogin={handleLogin}
            handleOpenRegisterModal={handleOpenRegisterModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
