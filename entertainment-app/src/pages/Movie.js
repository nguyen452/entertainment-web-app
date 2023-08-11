import React from "react";
import data from "../data.json";
import RecommendationThumbnail from "../components/Recommended/RecommendationThumbnail";

const Movie = () => {
    const movieData = data.filter((item) => {
        return item.category === "Movie"
    });

    return (
        <section id="searchPage" className=" flex flex-col mt-6">
          <h1 className=" text-32px font-light tracking-wide mb-6" >
              Movies
          </h1>
         <div id ='Movies-container' className=" flex flex-wrap max-w-1240px" >
              {movieData.map((item) => {
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

export default Movie;
