import PropTypes from 'prop-types';
import { useLocation, Outlet, useParams} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { ResultBox } from './MovieDetails.stiled';
import { ResultLine } from './MovieDetails.stiled';
import { ResultText,Link } from './MovieDetails.stiled';

import {
    BASE_IMG_URL,
    MOBILE_SIZES,
} from '../components/vars';

const MovieDetails = ({informationMovieDetails,genresString,yearRelease }) =>
{       const  id  = useParams();
        const location = useLocation();
        const go_Back = location?.state?.from ?? '/';
  
        let url;
        (informationMovieDetails.poster_path === null) ?  url= `../images/mi_fotou.jpg` : url = `${BASE_IMG_URL}${MOBILE_SIZES}${informationMovieDetails.poster_path}`
console.log('id-------',id)
    return (
        <main>
           {id?
            <div>
                <div> <Link to={go_Back}><BiArrowBack/>Go back</Link></div>
                <ResultBox >
                    <div><img src={url} alt={informationMovieDetails.title} /></div>
                    <ResultText>
                        <h2>{informationMovieDetails.original_title} ({yearRelease})</h2>
                        <p>User Score: { informationMovieDetails.vote_average }%</p>
                        <h3>Overview</h3>
                        <p>{informationMovieDetails.overview}</p>
                        <h2>Genres</h2>
                        <p>{genresString}</p>
                       
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

MovieDetails.propTypes = {
    informationOnFilm: PropTypes.object,
    genresString: PropTypes.string,
   // id: PropTypes.number,
    yearRelease:PropTypes.string,
}