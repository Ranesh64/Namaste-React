import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterRestaurant = (value, restaurantlist) => {
    const result = restaurantlist.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(value.toLowerCase());
    });
    setRestaurants(result);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="Search restaurants"
          value={search}
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => filterRestaurant(search, restaurants)}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
