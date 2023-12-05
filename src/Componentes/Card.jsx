const Card = ({ id, name, imageUrl, handleClick }) => {
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className="card"
    >
      <img src={imageUrl} />
      <div className="name">{name}</div>
    </div>
  );
};

export default Card;
