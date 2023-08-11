import React from "react";

const PlayButton = ({className, isThumbnailHovered}) => {
    return (
        <div id="play-button" className= {`${className} w-117px h-48px flex justify-center items-center bg-transparentWhite
        rounded-3xl text-2xl ${isThumbnailHovered ? "visible cursor-pointer" : "invisible"} `}>
            <img src="assets/icon-play.svg" alt="play-icon" className="mr-4"  />
            <p>Play</p>
        </div>
    )
}

export default PlayButton;
