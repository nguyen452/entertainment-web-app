import React from "react";
import SideBar from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto w-1440px flex bg-darkerBlue">
           <section id='side-bar'>
                <SideBar />
            </section>
            <section id='main' className="mt-6">
                <SearchBar />
                <Outlet />
            </section>
        </div>
    )
}

export default Root;
