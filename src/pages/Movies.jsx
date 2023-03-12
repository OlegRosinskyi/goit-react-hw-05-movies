import Searchbar from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { requestGet } from '../components/requestGet';
import ResultSearchFilm from "../components/ResultSearchFilm/ResultSearchFilm";
import {
  API_KEY,
  MAIN_PART_URL,
  SEARCH_MOVIE,
} from '../components/vars';
const Movies = () =>
{
  const [informationSearchOnFilm, setInformationSearchOnFilm] = useState([]);
  const prevFilmName = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');
 
  const updateNameFilm = filmName => {
    //Збереження в state пошукового слова запиту на пошук фільму.
    setSearchParams(filmName !== '' ? { searchWord: filmName } : {});
  } 
   useEffect(() => {
    if (searchWord !== '') {
      if (prevFilmName.current !== searchWord) {
        prevFilmName.current = searchWord;
        requestGet(MAIN_PART_URL, SEARCH_MOVIE, 0, API_KEY, `&query=${prevFilmName.current}`)
          .then(res => { setInformationSearchOnFilm(res.data.results); });
      }
     } }, [searchWord])     
       return (
        <main> 
        <Searchbar onSubmit={updateNameFilm}>  </Searchbar>
        {searchWord && < ResultSearchFilm  movies={informationSearchOnFilm} />}  
        </main>
     )
}
export default Movies;

