import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NavHomeIcon } from '../../nav-icon/icon-nav-home.svg';
import { ReactComponent as NavMoviesIcon } from '../../nav-icon/icon-nav-movies.svg';
import { ReactComponent as NavTVIcon } from '../../nav-icon/icon-nav-tv-series.svg';
import { ReactComponent as NavBookmarkIcon } from '../../nav-icon/icon-nav-bookmark.svg';



// Stateless functional component
const SideBar = () => {
    return (
        <div id="side-bar-content" className='w-24 h-960px m-6 flex flex-col items-center justify-between bg-darkBlue rounded-20px'>
            <div id='logo-links-container' className='mt-6 flex flex-col w-8 h-300px justify-between items-center'>
                <img className='w-8 h-7' src="/assets/logo.svg" alt="Logo" />
                <div id='nav-link' className='w-5 h-200px flex flex-col items-center justify-between'>

                    <NavLink to="/" className={({isActive}) => {
                        return isActive? "text-white hover:text-red" : "text-greyBlue hover:text-red"
                    }}>
                        <NavHomeIcon />
                    </NavLink>


                    <NavLink to="/movies" className={({isActive}) => {
                        return isActive? "text-white hover:text-red" : "text-greyBlue hover:text-red"
                    }}>
                        <NavMoviesIcon />
                    </NavLink>

                    <NavLink to="/tvseries"className={({isActive}) => {
                        return isActive? "text-white hover:text-red" : "text-greyBlue hover:text-red"
                    }}>
                        <NavTVIcon />
                    </NavLink>

                    <NavLink to="/bookmarked" className={({isActive}) => {
                        return isActive? "text-white hover:text-red" : "text-greyBlue hover:text-red"
                    }}>
                        <NavBookmarkIcon />
                    </NavLink>
                </div>
            </div>
            <img className=' mb-6 w-10 h-10' src="/assets/image-avatar.png" alt="Avatar" />
        </div>
    );
}

export default SideBar;
