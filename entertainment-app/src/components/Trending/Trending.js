import React from "react";
import TrendingThumbnail from "./TrendingThumbnail";
import trendingData from "./trendingData";


const Trending = () => {
    return (
        <section id="trend-container" className="flex-col w-1240px ">
            <h1 className=" text-32px font-light tracking-wide my-6">Trending</h1>
            <div id="trend-thumbnail-container" className="flex overflow-x-auto hide-scrollbar">
                {trendingData.map((item) => {
                    return (
                        <TrendingThumbnail
                        key={item.title}
                        largeImageURL={item.thumbnail.trending.large}
                        smallImageURL={item.thumbnail.trending.small}
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                        category={item.category}
                        isBookmarked={item.isBookmarked}
                         />
                    )
                })};
            </div>
        </section>
    )
}

export default Trending;
