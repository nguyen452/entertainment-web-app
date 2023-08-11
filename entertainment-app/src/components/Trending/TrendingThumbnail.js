import React, { useState } from "react";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import PlayButton from "../PlayButton/PlayButton";
import ContentInfo from "../ContentInfo/ContentInfo";




const TrendingThumbnail = ({ largeImageURL, smallImageURL, title, year, category, rating, isBookmarked }) => {

    const [isThumbnailHovered, setIsThumbnailHovered] = useState(false);
    const [isBookmarkedHovered, setIsBookmarkedHovered] = useState(false)
    const [bookmarked, setBookmarked] = useState(isBookmarked)

    const handleMouseEnterThumnbail = () => {
        setIsThumbnailHovered(true);
    };

    const handleMouseLeaveThumbnail = () => {
        setIsThumbnailHovered(false);
    };

    const handleMouseEnterBookmark = () => {
        setIsBookmarkedHovered(true);
    };

    const handleMouseLeaveThumbnailBookmark = () => {
        setIsBookmarkedHovered(false);
    };

    const toggleBookmark = () => {
        setBookmarked(prevState => !prevState);
    }
    
    return (
        <div id="thumbnail-container" onMouseOver={handleMouseEnterThumnbail} onMouseOut={handleMouseLeaveThumbnail} onClick={toggleBookmark} className="flex-col max-w-md h-230px shrink-0 mr-10">
            <div id ="thumbnail">
                {/* dataurl has ./ that needs to be removed */}
                <img src={largeImageURL.substring(2)} alt="thumbnail" className={`object-cover rounded-md ${isThumbnailHovered? 'opacity-50': ''}`} />
            </div>
            <BookmarkButton className="relative bottom-52 left-400px" />

            <PlayButton className="relative bottom-168px left-40 visible" isThumbnailHovered={isThumbnailHovered} />

            <ContentInfo title={title} year={year} category={category} rating={rating} className="relative bottom-36 ml-7" titleFontSize="text-2xl"/>
        </div>
    )
};

export default TrendingThumbnail;

// relative bottom-52 left-400px repos for bookmark
// relative bottom-168px left-40 repos for play button
// relative bottom-36 flex-col ml-5 repos for content info