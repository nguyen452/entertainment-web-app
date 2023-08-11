import React from "react";
import data from "../data.json";
import RecommendationThumbnail from "../components/Recommended/RecommendationThumbnail";

const Bookmarked = () => {
    const bookmarkedData = data.filter((item) => {
        return item.isBookmarked === true
    });

    return (
        <section id="searchPage" className=" flex flex-col mt-6">
            <h1 className=" text-32px font-light tracking-wide mb-6" >
                Bookmarked Movies
            </h1>
         <div id ='bookmarked-movies-container' className=" flex flex-wrap max-w-1240px" >
              {bookmarkedData.filter((item) => item.category === "Movie").map((item) => {
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
                  />)
              })}
         </div>

            <h1 className=" text-32px font-light tracking-wide mb-6" >
                Bookmarked TV Series
            </h1>
         <div id ='bookmarked-TVSeries-container' className=" flex flex-wrap max-w-1240px" >
              {bookmarkedData.filter((item) => item.category === "TV Series").map((item) => {
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
                  />)
              })}
         </div>
        </section>
      )
};

export default Bookmarked;
