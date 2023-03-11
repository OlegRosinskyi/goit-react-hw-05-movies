import { Routes, Route,useSearchParams } from "react-router-dom";
import { requestGet } from './requestGet';
import { useEffect, useState, useRef } from 'react';
import Loyout from "./Loyout/Loyout";
import Home from "../pages/Home";
//import { lazy } from 'react'; //,Suspense
import Movies from "../pages/Movies";
import MovieDetails from "pages/MovieDetails";
import  Searchbar  from "./Searchbar/Searchbar";
import ResultSearchFilm from "./ResultSearchFilm/ResultSearchFilm";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Rewiews/Reviews"

import NotFound from "./NotFound/NotFound";

import {
  API_KEY,
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
  SEARCH_MOVIE,
  GET_MOVIE_DETAILS,
 } from './vars';

//const MovieDetails = lazy(() => import('pages/MovieDetails'));
//const NotFound = lazy(() => import('./NotFound/NotFound'));
//const Movies = lazy(() => import('pages/Movies'));
//const Home = lazy(() => import('pages/Home'));

export const App = () => {
  const [informationTrendingOnFilm, setInformationTrendingOnFilm] = useState([]);
  const [informationSearchOnFilm, setInformationSearchOnFilm] = useState([]);
  const [informationMovieDetails, setInformationMovieDetails] = useState({});
   const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');

 // const [filmName, setFilmName] = useState('');
  const [id, setId] = useState(0);

  
  const firstDownload = useRef(false);
  const prevFilmName = useRef('');
  const prevId = useRef(0);
  const genresString = useRef('');
  const yearRelease = useRef('');
  

  const updateNameFilm = filmName => {
    //Збереження в state пошукового слова запиту на пошук фільму.
       setSearchParams({searchWord:filmName});
 
  }
  const activId = id => {
    //Збереження в state пошукового слова запиту на пошук фільму.
    setId(Number(id));
     }
  useEffect(() => {

    if (firstDownload.current) { return; }
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART,0, API_KEY,)
      .then(res => { setInformationTrendingOnFilm(res.data.results); });
  }, [])

  useEffect(() => {

    if (searchWord !== '') { 
    if (prevFilmName.current !== searchWord) {
      prevFilmName.current = searchWord;
      requestGet(MAIN_PART_URL, SEARCH_MOVIE,0, API_KEY, `&query=${prevFilmName.current}`)
        .then(res => { setInformationSearchOnFilm(res.data.results); });
      }
       }
       if (id === 0) { return; }
    if (prevId.current !== id) {
      prevId.current = id;
      requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS,id, API_KEY)
      .then(res => {  setInformationMovieDetails(res.data); 
      genresString.current = res.data.genres.map(el => el.name).join(', ');
      yearRelease.current = res.data.release_date.slice(0, 4);
    }); 
    }

  }, [searchWord,id])
  return (
    <div>
        <Loyout/>
      <Routes>
        <Route path="/">
        <Route index element={<Home> <div><h1>Trending today</h1></div> <ResultSearchFilm onLink={activId} ResultSearchFilm={informationTrendingOnFilm} /></Home>   } />
        <Route path="movies" element={<Movies > <Searchbar onSubmit={updateNameFilm}></Searchbar> {searchWord && < ResultSearchFilm onLink={activId} ResultSearchFilm={informationSearchOnFilm} />}  </Movies>} />
        <Route path="/movies/:movieId" element={<MovieDetails informationMovieDetails={informationMovieDetails} genresString={genresString.current}  yearRelease={yearRelease.current} />} >
            <Route path="cast" element={<Cast id={id } /> } />
            <Route path="reviews" element={<Reviews id={id} />} />
        </Route>
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
   </div>
  );
};
      
 