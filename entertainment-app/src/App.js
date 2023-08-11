import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';
import TvSeries from './pages/TvSeries';
import Bookmarked from './pages/Bookmarked';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = { <Root />}>
    <Route index element = { <Home />} />
    <Route path="/search" element = { <Search />} />
    <Route path="/movies" element = { <Movie />} />
    <Route path="/tvseries" element = { <TvSeries />} />
    <Route path="/bookmarked" element = { <Bookmarked />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router } />
  )

}

export default App;
