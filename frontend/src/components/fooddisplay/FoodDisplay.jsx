
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";
import gif from "../../assets/delivery boy.gif"

const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      {loading && (
        <div className="gif-bike-parent">
          <img width={'40%'} className="gif-bike" src={gif} alt={'loading...'} />
          <h4>Loading...</h4>
        </div>
      )}
      {!loading && (
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  desc={item.description}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
