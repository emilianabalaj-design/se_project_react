import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleOpenCard() {
    console.log("clicked card:", data);
    onCardClick(data);
  }

  return (
    <li className="card">
      <h2 className="card__title">{data.name}</h2>
      <img
        src={data.imageUrl || data.link}
        alt={data.name}
        className="card__image"
        onClick={() => onCardClick(data)}
      />
    </li>
  );
}

export default ItemCard;
