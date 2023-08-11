import React from "react";
import { useSearchParams } from "react-router-dom";
import data from "../data.json"
import RecommendationThumbnail from "../components/Recommended/RecommendationThumbnail";


const Search = () => {
    const [searchParams] = useSearchParams();

   const searchInput = searchParams.get('searchInput')

    const searchResults = data.filter((item) => {
        return item.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    })

    const searchResultNumbers = searchResults.length


    return (
      <section id="searchPage" className=" flex flex-col mt-6">
        <h1 className=" text-32px font-light tracking-wide mb-6" >
            {`Found ${searchResultNumbers} results for '${searchInput}' `}
        </h1>
       <div id ='search-container' className=" flex flex-wrap max-w-1240px" >
            {searchResults.map((item) => {
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
  }

  export default Search;
