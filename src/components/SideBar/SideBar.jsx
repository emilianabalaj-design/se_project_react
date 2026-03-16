import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne's avatar"
          className="sidebar__avatar"
        />
      </div>
    </div>
  );
}

export default SideBar;
