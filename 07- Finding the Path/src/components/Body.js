import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9683911&lng=73.01915799999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const filterRestaurant = (value, restaurantlist) => {
    const result = restaurantlist.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredRestaurants(result);
  };
  console.log(<h1>Rss</h1>);

  if (restaurants.length === 0) return <Shimmer />;

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
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data?.id}
            key={restaurant.data?.id}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
