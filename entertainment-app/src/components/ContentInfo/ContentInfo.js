import React from 'react'

const ContentInfo = ({title, year, category, rating, className, titleFontSize}) => {
    return (
        <div id="content-info-container" className={`${className} flex flex-col`} >
            <div id="content-info" className="flex min-w-32 h-3 text-semiTransparentWhite items-center font-light">
                    <p id="content-year">{year}</p>
                    <img src='assets\oval.svg' alt="oval" className="mx-2" />
                    <img src ='assets\icon-category-movie.svg' alt="movie-icon" className="mx-2 h-4 w-4" />
                    <p id="content-category">{category}</p>
                    <img src='assets\oval.svg' alt="oval" className="mx-2" />
                    <p id="content-rating">{rating}</p>
            </div>
        
            <h1 id="content-title" className={`font-light mt-1 ${titleFontSize}`}>{title}</h1>
        </div>
    )
};

export default ContentInfo