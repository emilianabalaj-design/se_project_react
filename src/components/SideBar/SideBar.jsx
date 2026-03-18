import { useState, useEffect } from "react";
import "./SideBar.css";

function SideBar({ currentUser, handleSignOut, handleEditProfileClick }) {
  const [isAvatarBroken, setIsAvatarBroken] = useState(false);

  useEffect(() => {
    setIsAvatarBroken(false);
  }, [currentUser?.avatar]);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {currentUser?.avatar && !isAvatarBroken ? (
          <img
            src={currentUser.avatar}
            alt={currentUser?.name}
            className="sidebar__avatar"
            onError={() => setIsAvatarBroken(true)}
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar-placeholder">
            {currentUser?.name?.[0]}
          </div>
        )}

        <p className="sidebar__username">{currentUser?.name}</p>
      </div>

      <button
        type="button"
        className="sidebar__button"
        onClick={handleEditProfileClick}
      >
        Change profile data
      </button>

      <button type="button" className="sidebar__button" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
