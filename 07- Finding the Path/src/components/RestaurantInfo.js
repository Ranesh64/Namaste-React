import { IMG_CDN_LINK } from "../config";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantInfo = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=23.1012966&lng=72.54070519999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  };

  return !restaurant ? null : (
    <div className="resDetail">
      <div>
        <h1 style={{ marginBottom: "28px" }}>Restaurant Detail</h1>
        <img
          src={IMG_CDN_LINK + restaurant.data?.cloudinaryImageId}
          alt="restaurantImg"
        />
        <h2 style={{ maxWidth: "400px" }}>{restaurant.data?.name}</h2>
        <h3>{restaurant.data?.avgRating + " ⭐"}</h3>
        <p>{restaurant.data?.cuisines.join(", ")}</p>
      </div>
      <div>
        <h2 style={{ marginTop: "60px", marginBottom: "12px" }}>Menu items</h2>
        {Object.values(restaurant.data?.menu?.items).map((item) => {
          return (
            <ul>
              <li>{item.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
