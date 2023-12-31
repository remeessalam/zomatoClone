import React from "react";
import { IMAGE_URL } from "../../utils/Url";

const TopRestaurant = ({ toplist }) => {
  console.log(toplist, "thisistoplist");
  return (
    <div className="mt-3 w-[1272px] p-4 mb-5">
      <h3 className="text-2xl font-extrabold text-zinc-950 font-text mb-4">
        {toplist?.header?.title}
      </h3>
      <div className="flex mt-3 w-full h-full overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-8 ">
          {toplist?.gridElements?.infoWithStyle?.restaurants?.map((cards) => {
            console.log(cards, "thiiseachcard");
            return (
              <div className="flex flex-wrap h-[284px]  w-[273px] hover:scale-95 duration-300">
                <div
                  key={cards?.info?.id}
                  className="w-[273px] h-[182px] relative rounded-2xl overflow-hidden gap-3  object-cover"
                >
                  <img
                    className="w-full h-full object-fill rounded-2xl scale-125"
                    src={IMAGE_URL + cards?.info?.cloudinaryImageId}
                    alt="cards"
                  />
                  <div className="flex items-end pl-3 pr-3 pb-2 h-20 font-extrabold text-[22px] bg-gradient-to-b from-transparent via-transparent to-gray-900 absolute bottom-0 right-0 left-0">
                    <p className="text-white">
                      {cards?.info?.aggregatedDiscountInfoV3?.header &&
                        cards?.info?.aggregatedDiscountInfoV3?.header +
                          " " +
                          cards?.info?.aggregatedDiscountInfoV3?.subHeader &&
                        cards?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </p>
                  </div>
                </div>
                <div className="w-full ml-3 ">
                  <p className="font-bold text-lg text-textColor">
                    {cards?.info?.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-lg text-textColor">
                      {cards?.info?.avgRating}
                    </p>
                    <p className="font-semibold text-xl text-textColor mb-2">
                      .
                    </p>
                    <p className="font-semibold text-base text-textColor">
                      {cards?.info?.sla?.slaString}
                    </p>
                  </div>
                  <p className="flex w-full truncate font-normal text-base text-subtitles">
                    {cards?.info?.cuisines.map((cuisine) => {
                      return <p>{cuisine},</p>;
                    })}
                  </p>
                  <p className="font-normal text-base text-subtitles">
                    {cards?.info?.areaName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurant;
