import React from "react";
import Trending from "../components/Trending/Trending";
import Recommended from "../components/Recommended/Recommended";

const Home = () => {
  return (
    <section id="home" className=" flex flex-col ">
      <Trending />
      <Recommended />
    </section>
  )
}

export default Home;
