import { useState } from "react";

function MenuItem({ foodImage, itemName, description, price, isFavorite }) {

  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  const handleOnClick = () => {
    setIsFavoriteState((prevIsFavorite) => (!prevIsFavorite))

  }

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />
        <figcaption>
          <h2>{itemName}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
      <aside>{price} EUR</aside>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button type="button" onClick={() => handleOnClick()}>{(isFavoriteState) ? "❤️" : "🖤"}</button>
    </section>
  );
}

export default MenuItem;
// {(isFavorite) ? "❤️" : "🖤"}