import { IMG_CDN_LINK } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId}></img>
      <div id="name">{name}</div>
      <div id="cuisine">{cuisines.join(", ")}</div>
      <div id="rating">
        <span>{avgRating}</span> stars
      </div>
    </div>
  );
};

export default RestaurantCard;
