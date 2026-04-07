import "./ItemCard.css";
import { useContext } from "react";
import likeIcon from "../../assets/like.svg";
import likeActiveIcon from "../../assets/like-active.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ data, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  if (!data || !currentUser) return null;

  const isLiked = data.likes?.some((user) => {
    if (typeof user === "string") {
      return user === currentUser?._id;
    }

    return user?._id === currentUser?._id;
  });

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike({ id: data._id, isLiked });
  };

  function handleOpenCard() {
    onCardClick(data);
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{data.name}</h2>

        {currentUser && (
          <button
            type="button"
            className="card__like-button"
            onClick={handleLike}
          >
            <img
              src={isLiked ? likeActiveIcon : likeIcon}
              alt="Like button"
              className="card__like-image"
            />
          </button>
        )}
      </div>

      <img
        src={data.imageUrl || data.link}
        alt={data.name}
        className="card__image"
        onClick={handleOpenCard}
      />
    </li>
  );
}

export default ItemCard;
