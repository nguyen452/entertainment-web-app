import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = { <Root />}> 
    <Route index element = { <Home />} /> 
    {/* <Route path="/search" element = { <Search />} /> // <Search />  */}
    {/* <Route path="/movies" element = { <Movies />} /> // <Movies /> 
    <Route path="/tvseries" element = { <TvSeries />} /> // <Movies /> 
    <Route path="/bookmarked" element = { <Bookmarked />} /> // <Bookmarked />  */}
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router } />
  )
 
}

export default App;
