import { Routes, Route } from "react-router-dom";
import { requestGet } from './requestGet';
import { useEffect, useState, useRef } from 'react';
import Loyout from "./Loyout/Loyout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Information from "pages/Information";
import { Searchbar } from "./Searchbar/Searchbar";
import ResultSearchFilm from "./ResultSearchFilm/ResultSearchFilm";
import Cast from "./Cast";
import Reviews from "./Reviews";

import {
  API_KEY,
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
  SEARCH_MOVIE,
  GET_MOVIE_DETAILS,
 } from './vars';

export const App = () => {
  const [informationTrendingOnFilm, setInformationTrendingOnFilm] = useState([]);
  const [informationSearchOnFilm, setInformationSearchOnFilm] = useState([]);
  const [informationMovieDetails, setInformationMovieDetails] = useState({});

  const [filmName, setFilmName] = useState('');
  const [id, setId] = useState(0);

  
  const firstDownload = useRef(false);
  const prevFilmName = useRef('');
  const prevId = useRef(0);
  const genresString = useRef('');
  const yearRelease = useRef('');

  const updateNameFilm = filmName => {
    //Збереження в state пошукового слова запиту на пошук фільму.
    setFilmName(filmName);
    console.log(filmName);
  }
  const activId = id => {
    //Збереження в state пошукового слова запиту на пошук фільму.
    setId(Number(id));
    console.log(Number(id));
  }
  useEffect(() => {

    if (firstDownload.current) { return; }
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART,0, API_KEY,)
      .then(res => { console.log('rez', res.data.results); setInformationTrendingOnFilm(res.data.results); });
  }, [])

  useEffect(() => {

    if (filmName !== '') { 
    if (prevFilmName.current !== filmName) {
      // console.log('useEffect: prevImageName.current !== imageName');
      prevFilmName.current = filmName;
      requestGet(MAIN_PART_URL, SEARCH_MOVIE,0, API_KEY, `&query=${prevFilmName.current}`)
        .then(res => { console.log('rez', res.data.results); setInformationSearchOnFilm(res.data.results); });
      }
       }
    console.log('Id--', id)
    if (id === 0) { return; }
    if (prevId.current !== id) {
      prevId.current = id;
      console.log('Id--', id)
      
      requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS,id, API_KEY)
        .then(res => { console.log('res.data', res.data); setInformationMovieDetails(res.data); 
          genresString.current = res.data.genres.map(el => el.name).join(', ');
          yearRelease.current = res.data.release_date.slice(0, 4);
    });
       
    }

  }, [filmName,id])

  return (
    <div>
      <Routes>
        <Route path="/"element={<Loyout/>}>
            <Route path="" element={<Home> <div><h1>Trending today</h1></div> <ResultSearchFilm onLink={activId} ResultSearchFilm={informationTrendingOnFilm} /></Home>   } />
            <Route path="movies" element={<Movies > <Searchbar onSubmit={updateNameFilm}></Searchbar> {filmName &&< ResultSearchFilm onLink={activId} ResultSearchFilm={informationSearchOnFilm} />}  </Movies>} />
            <Route path=":information" element={<Information informationMovieDetails={informationMovieDetails} genresString={genresString.current} id={id}  yearRelease={yearRelease.current} />} >
                <Route path="cast" element={<Cast id={id } /> } />
                <Route path="reviews" element={<Reviews id={id} /> } />
            </Route>
          </Route>
      </Routes>
    </div>
  );
};
