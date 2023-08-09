import React from "react";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import PlayButton from "../PlayButton/PlayButton";


const RecommendationThumbnail = ( {largeImageURL, mediumImageURL, smallImageURL, title, year, category, rating, isBookmarked }) => {
    return (
        <div id="recommendation-thumbnail-container" className="max-w-280px h-230px mr-10">
            <div id='recommended-thumbail'>
                <img src={largeImageURL.substring(2)} alt="thumbnail" className="object-cover rounded-md" />
            </div>
            <BookmarkButton isBookmarked={isBookmarked} className="relative bottom-40 left-60"/>
            <PlayButton className="relative bottom-145px left-20  " />
            <div id="content-info-container" className="flex flex-col mt-2 " >
                <div id="content-info" className="flex min-w-32 h-3 text-semiTransparentWhite items-center font-light">
                        <p id="content-year">{year}</p>
                        <img src='assets\oval.svg' alt="oval" className="mx-2" />
                        <img src ='assets\icon-category-movie.svg' alt="movie-icon" className="mx-2 h-4 w-4" />
                        <p id="content-category">{category}</p>
                        <img src='assets\oval.svg' alt="oval" className="mx-2" />
                        <p id="content-rating">{rating}</p>
                </div>

                <h1 id="content-title" className="text-xl font-medium mt-1">{title}</h1>
            </div>
        </div>
    )
}
export default RecommendationThumbnail;
