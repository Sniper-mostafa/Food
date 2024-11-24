import React, { useContext } from "react";
import Card from "./Card";
import { StoreContext } from "../context/ShopContext";

const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap justify-center gap-10">
        {food_list.map(
          (food) =>
            (category === food.category || category === "All") && (
              <Card
                key={food.id}
                id={food._id}
                name={food.name}
                price={food.price}
                description={food.description}
                image={food.image}
              />
            )
        )}
      </div>
    </div>
  );
};

export default FoodList;
