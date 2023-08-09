import React from "react";
import recommendationData from "./recommendationData";
import RecommendationThumbnail from "./RecommendationThumbnail"

const Recommended = () => {
    return (
        <section id="recommendation">
            <h1 className=" text-32px font-light tracking-wide mb-6">Recommended for you</h1>
            <div id="recommendation-thumbnail-container" className=" flex flex-wrap max-w-1240px" >
                {recommendationData.map((item) => {
                    return (
                        <RecommendationThumbnail
                        key={item.title}
                        largeImageURL={item.thumbnail.regular.large}
                        mediumImageURL={item.thumbnail.regular.medium}
                        smallImageURL={item.thumbnail.regular.small}
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                        category={item.category}
                        isBookmarked={item.isBookmarked}
                         />
                    )
                })}


            </div>
        </section>
    )
}

export default Recommended;
