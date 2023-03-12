
import { useLocation, Outlet, useParams } from "react-router-dom";
import {useEffect,useRef,useState} from "react"
import { BiArrowBack } from "react-icons/bi";
import { ResultBox } from './MovieDetails.stiled';
import { ResultLine } from './MovieDetails.stiled';
import { ResultText,Link } from './MovieDetails.stiled';
import { requestGet } from '../components/requestGet';
import {
    BASE_IMG_URL,
    MOBILE_SIZES,
    API_KEY,
    MAIN_PART_URL,
    GET_MOVIE_DETAILS,
} from '../components/vars';

const MovieDetails = () =>
{

    const [informationMovieDetails, setInformationMovieDetails] = useState({});
    const {movieId} = useParams();
    const location = useLocation();
    const prevId = useRef(0);
    const genresString = useRef('');
    const yearRelease = useRef('');
    const go_Back = location?.state?.from ?? '/';
    let url;
    (informationMovieDetails.poster_path === null) ?
        url = `../images/mi_fotou.jpg` :
        url = `${BASE_IMG_URL}${MOBILE_SIZES}${informationMovieDetails.poster_path}`
    
useEffect(() => {

      if ((Number(movieId) === 0) ||( movieId === '')) { return; }
      if (prevId.current !== Number(movieId)) {
        prevId.current = Number(movieId);
        requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS, prevId.current, API_KEY)
            .then(res => {
            setInformationMovieDetails(res.data);
            genresString.current = res.data.genres.map(el => el.name).join(', ');
            yearRelease.current = res.data.release_date.slice(0, 4);
          });
      }
     }, [ movieId])

    return (
        <main>
           {informationMovieDetails?
            <div>
                <div> <Link to={go_Back}><BiArrowBack/>Go back</Link></div>
                <ResultBox >
                    <div><img src={url} alt={informationMovieDetails.title} /></div>
                    <ResultText>
                        <h2>{informationMovieDetails.original_title} ({yearRelease.current})</h2>
                        <p>User Score: { informationMovieDetails.vote_average }%</p>
                        <h3>Overview</h3>
                        <p>{informationMovieDetails.overview}</p>
                        <h2>Genres</h2>
                        <p>{genresString.current}</p>
                       
                    </ResultText> 
                </ResultBox>    
                <ResultLine></ResultLine>
                    <h4>Additional information</h4>
                    <ul >
                        <li>
                            <Link to="cast"  >Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" >Reviews</Link>
                        </li>
                    </ul>
                    <ResultLine></ResultLine>
                    <Outlet/>
            </div>:<div></div> } 
      </main>
     )
}
export default MovieDetails;

