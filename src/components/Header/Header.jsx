import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header({
  handleOpenAddGarmentModal,
  weatherData,
  isLoggedIn,
  handleSignOut,
  handleOpenRegisterModal,
  handleOpenLoginModal,
}) {
  const currentUser = useContext(CurrentUserContext);

  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
        <Link to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </Link>

        <p className="header__date-and-location">
          {dateStr}, {weatherData.city}
        </p>
      </div>

      <div className="header__side">
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__add-clothes-btn"
              onClick={handleOpenAddGarmentModal}
            >
              + Add clothes
            </button>

            <Link to="/profile" className="header__link">
              <p className="header__username">{currentUser?.name}</p>
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser?.name?.[0]}
                </div>
              )}
            </Link>

            <button
              type="button"
              className="header__auth-btn"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__auth-btn"
              onClick={handleOpenRegisterModal}
            >
              Sign Up
            </button>

            <button
              type="button"
              className="header__auth-btn"
              onClick={handleOpenLoginModal}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
