import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [ userInput, setUserInput ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchQuery = {
            searchInput: userInput
        };

        const query = createSearchParams(searchQuery)
        navigate({
            pathname: '/search',
            search: `${query}`
        })



    }

    return (
        <form id="search-bar" className="w-1200px h-12 flex items-center" value={userInput} onSubmit={handleSubmit} >
            <button type="submit" className="w-8 h-8"><img className=" w-8 h-8" src="/assets/icon-search.svg" alt="Search" /></button>
            <input type="text" placeholder="Search for movies or TV Series" className="flex-1 h-14 bg-darkerBlue text-2xl
            font-light ml-6 focus:ring-0 focus:border-b-1 focus:border-darkBlue focus: outline-none" value={userInput} onChange={(event) => {
                setUserInput(prev => event.target.value);
            }}/>

        </form>
    )
};

export default SearchBar;
//implement search in react 1. get
