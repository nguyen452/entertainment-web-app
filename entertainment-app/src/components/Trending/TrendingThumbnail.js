import React from "react";

const TrendingThumbnail = ({ largeImageURL, smallImageURL, title, year, category, rating, isBookmarked }) => {

    return (
        <div id="thumbnail-container" className="flex-col max-w-md h-230px shrink-0 mr-10">
            <div id ="thumbnail">
                {/* dataurl has ./ that needs to be removed */}
                <img src={largeImageURL.substring(2)} alt="thumbnail" className="object-cover rounded-md" />
            </div>
            <div id="bookmark" className="relative bottom-52 left-400px bg-transparentDarkerBlue flex items-center justify-center
             w-8 h-8 rounded-full">
                <img src="assets/icon-bookmark-empty.svg" alt="bookmark-icon" className="" />
            </div>
            <div id="play-button" className="w-117px h-48px flex justify-center items-center bg-transparentWhite
            rounded-3xl text-2xl relative bottom-168px left-40">
                <img src="assets/icon-play.svg" alt="play-icon" className="mr-4"  />
                <p>Play</p>
            </div>
            <div id="content-info-container" className="flex relative bottom-36 flex-col ml-5" >
                <div id="content-info" className="flex min-w-36 h-5 text-semiTransparentWhite items-center font-light">
                        <p id="content-year">{year}</p>
                        <img src='assets\oval.svg' alt="oval" className="mx-2" />
                        <img src ='assets\icon-category-movie.svg' alt="movie-icon" className="mx-2 h-4 w-4" />
                        <p id="content-category">{category}</p>
                        <img src='assets\oval.svg' alt="oval" className="mx-2" />
                        <p id="content-rating">{rating}</p>
                </div>
                <h1 id="content-title" className="text-2xl font-medium">{title}</h1>
            </div>
        </div>
    )
};

export default TrendingThumbnail;
