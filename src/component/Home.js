import { useEffect, useState } from "react";
import OfferCard from "./HomePage/OfferCard";
import FoodType from "./HomePage/FoodType";
import Divider from "./Common/Divider";
import TopRestaurant from "./HomePage/TopRestaurant";
export const HomePage = () => {
  const [restaurants, SetRestaurants] = useState([]);
  const [recommentation, setRecommentation] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [topRestaurantList, setTopRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const json = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.591441&lng=76.522171&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await json.json();
    console.log(data);
    setRecommentation(data?.data?.cards[0]?.card?.card);
    setFoodType(data?.data?.cards[1]?.card?.card);
    setTopRestaurantList(data?.data?.cards[2]?.card?.card);
    console.log(data?.data, "thisallcarding");
  };
  console.log(foodType, "thisallcarding");

  return (
    <div>
      <div className="flex justify-center  w-full">
        <OfferCard recommentation={recommentation} />
      </div>
      <div className="flex justify-center  w-full">
        <FoodType foodtype={foodType} />
      </div>
      <Divider />
      <div className="flex justify-center  w-full">
        <TopRestaurant toplist={topRestaurantList} />
      </div>
      <Divider />
    </div>
  );
};

export default HomePage;
