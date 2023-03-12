import { Routes, Route} from "react-router-dom";
import { requestGet } from './requestGet';
import { useEffect, useState, useRef } from 'react';
import Loyout from "./Loyout/Loyout";
import { lazy,Suspense } from 'react';
import ResultSearchFilm from "./ResultSearchFilm/ResultSearchFilm";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Rewiews/Reviews"

import {
  API_KEY,
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
 } from './vars';

const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Movies = lazy(() => import('pages/Movies'));
const Home = lazy(() => import('pages/Home'));

export const App = () => {

  const [informationTrendingOnFilm, setInformationTrendingOnFilm] = useState([]);
  const firstDownload = useRef(false);

  useEffect(() => {
    if (firstDownload.current) { return; }
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, 0, API_KEY,)
      .then(res => { setInformationTrendingOnFilm(res.data.results); });
  }, [])


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Loyout />}>
            <Route index element={<Home> <div><h1>Trending today</h1></div> <ResultSearchFilm  movies={informationTrendingOnFilm} /></Home>} />
            <Route path="movies" element={<Movies/>} />     
            <Route path="/:movieId" element={<MovieDetails  />} >
                  <Route path="cast" element={<Cast  /> } />
                  <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
   
  );
};
      
 