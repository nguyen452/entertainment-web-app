import React, { useState } from "react";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import PlayButton from "../PlayButton/PlayButton";
import ContentInfo from "../ContentInfo/ContentInfo";


const RecommendationThumbnail = ( {largeImageURL, mediumImageURL, smallImageURL, title, year, category, rating, isBookmarked }) => {
    const [ onHover, setOnHover ] = useState(false);

    const handleMouseEnter = () => {
        setOnHover(true);
    };

    const handleMouseLeave = () => {
        setOnHover(false);
    };


    return (
        <div id="recommendation-thumbnail-container" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} className="max-w-280px h-230px mr-10 mb-9">
            <div id='recommended-thumbail'>
                <img src={largeImageURL.substring(2)} alt="thumbnail" className={`object-cover rounded-md ${onHover ? "opacity-50" : ""}`} />
            </div>
            <BookmarkButton isBookmarked={isBookmarked} className="relative bottom-40 left-60"/>
            <PlayButton className="relative bottom-145px left-20 " isThumbnailHovered={onHover} />
            <ContentInfo title={title} year={year} category={category} rating={rating} className="relative bottom-20 mt-4" titleFontSize="text-xl" />
        </div>
    )
}
export default RecommendationThumbnail;
