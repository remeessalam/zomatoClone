import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../utils/Url";
import foodType from "../../utils/FoodTypeContext";

const FoodType = ({ foodtype }) => {
  const { setCurrentFoodType } = useContext(foodType);
  return (
    <div className="w-[1272px] p-4">
      <h3 className="text-2xl font-extrabold text-zinc-950 font-text mb-4">
        {foodtype?.header?.title}
      </h3>
      <div className="flex mt-3 w-full h-full overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-6">
          {foodtype?.imageGridCards?.info?.map((cards) => {
            return (
              <Link
                key={cards?.id}
                to={`/collection`}
                onClick={() => setCurrentFoodType(cards)}
              >
                <div className="w-[144px] h-[180px]">
                  <img
                    className="w-full h-full"
                    src={IMAGE_URL + cards?.imageId}
                    alt=""
                  />
                  {/* {cards?.action?.link} */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodType;
