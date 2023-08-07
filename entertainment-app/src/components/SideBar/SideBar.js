import React from 'react';
import { NavLink } from 'react-router-dom';

// Stateless functional component
const SideBar = () => {
    return (
        <div id="side-bar-content" className='w-24 h-960px m-6 flex flex-col items-center justify-between bg-darkBlue rounded-20px'>
            <div id='logo-links-container' className='mt-6 flex flex-col w-8 h-300px justify-between items-center'>
                <img className='w-8 h-7' src="/assets/logo.svg" alt="Logo" />
                <div id='nav-link' className='w-5 h-200px flex flex-col items-center justify-between'>
                    <NavLink to="/" activeClassName="active">
                        <img className=" w-8 h-6 "  src="/assets/icon-nav-home.svg" alt="Home" />
                    </NavLink>

                    <NavLink to="/movie" activeClassName="active">
                        <img src="/assets/icon-nav-movies.svg" alt="Movie" />
                    </NavLink>

                    <NavLink to="/tvseries" activeClassName="active">
                        <img src="/assets/icon-nav-tv-series.svg" alt="TV Series" />
                    </NavLink>

                    <NavLink to="/bookmarked" activeClassName="active">
                        <img src="/assets/icon-nav-bookmark.svg" alt="Bookmark" />
                    </NavLink>
                </div>
            </div>
            <img className=' mb-6 w-10 h-10' src="/assets/image-avatar.png" alt="Avatar" />
        </div>
    );
}

export default SideBar;
