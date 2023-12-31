import React, { useContext } from "react";
import foodType from "../../utils/FoodTypeContext";

const Collection = () => {
  const { currentFoodType } = useContext(foodType);
  console.log(currentFoodType, "thisisfoodtype");
  console.log('thisisthelifecycle-collection')

  return (
    <>
      <div>Collection</div>
    </>
  );
};

export default Collection;
