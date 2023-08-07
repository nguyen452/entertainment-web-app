import React from "react"; 
import data from "../../data.json";
import trendingData from "./trendingData";

console.log(data)
const TrendingThumbnail = ({ largeImageURL, smallImageURL, title, year, category, isBookmarked }) => {

    return (
        <div id="thumbnail-container" className="flex-col max-w-md h-230px shrink-0 mr-10"> 
            <div id ="thumbnail" className="">
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
            <div id="content-info-container" className="relative bottom-24" >
                <div id="content-info">
                    <h1 id="content-title">Title</h1>
                </div>    
            </div>
        </div>
    )
};

export default TrendingThumbnail;