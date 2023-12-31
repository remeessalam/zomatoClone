import React from "react";
import { IMAGE_URL } from "../../utils/Url";

const OfferCard = ({ recommentation }) => {
  return (
    <div className="mt-3 w-[1272px] p-4">
      <h3 className="text-2xl font-extrabold text-zinc-950 font-text mb-4">
        Best offer for you
      </h3>
      <div className="flex mt-3 w-full h-full overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-2">
          {recommentation?.imageGridCards?.info?.map((cards) => {
            // console.log(cards,'thiiseachcard')
            return (
              <div key={cards?.id} className="w-[425px] h-[255px]">
                <img
                  className="w-full h-full"
                  src={IMAGE_URL + cards?.imageId}
                  alt="cards"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
