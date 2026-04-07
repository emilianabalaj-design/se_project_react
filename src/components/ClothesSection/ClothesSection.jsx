import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  clothingItem,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItem.filter((item) => {
    return (
      item.owner?._id === currentUser?._id || item.owner === currentUser?._id
    );
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__text">Your items</p>
        <button
          onClick={handleOpenAddGarmentModal}
          className="clothes-section__btn"
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__card-list">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            data={item}
            onCardClick={handleOpenItemModal}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
