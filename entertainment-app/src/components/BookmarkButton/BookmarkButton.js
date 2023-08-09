import React, { useState } from "react";

const BookmarkButton = ({ isBookmarked, className}) => {
    const [isBookmarkedHovered, setIsBookmarkedHovered] = useState(false);
    const [bookmarked, setBookmarked] = useState(isBookmarked);

    //event handler functions

    const handleMouseEnterBookmark = () => {
        setIsBookmarkedHovered(true);
    };

    const handleMouseLeaveThumbnailBookmark = () => {
        setIsBookmarkedHovered(false);
    };

    const toggleBookmark = () => {
        setBookmarked(prevState => !prevState);
    };

    return (
        <div id="bookmark" onClick={toggleBookmark} onMouseOver={handleMouseEnterBookmark} onMouseOut={handleMouseLeaveThumbnailBookmark}
        className={`${className} ${isBookmarkedHovered ? 'bg-white' : 'bg-transparentDarkerBlue'} cursor-pointer flex items-center justify-center
        w-8 h-8 rounded-full`}>
                <img src={isBookmarkedHovered? "assets/icon-bookmark-full-stroke.svg" : bookmarked ? "assets/icon-bookmark-full.svg" : "assets/icon-bookmark-empty.svg" }alt="bookmark-icon" />
        </div>
    );
};

export default BookmarkButton;
