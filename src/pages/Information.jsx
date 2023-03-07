import PropTypes from 'prop-types';
import { Link,Outlet} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


import {
    BASE_IMG_URL,
    MOBILE_SIZES,
} from '../components/vars';


const Information = ({informationMovieDetails,genresString,id,yearRelease }) =>
{
   

    let url = `${BASE_IMG_URL}${MOBILE_SIZES}${informationMovieDetails.poster_path}`
   
    return (
      <main>
            <div>
                <div> <Link to="/"><BiArrowBack/>Go back</Link></div>
                <div >
                    <div><img src={url} alt={informationMovieDetails.title} /></div>
                    <div>
                        <h2>{informationMovieDetails.original_title} ({yearRelease})</h2>
                        <p>User Score: { informationMovieDetails.vote_average }%</p>
                        <h3>Overview</h3>
                        <p>{informationMovieDetails.overview}</p>
                        <h2>Genres</h2>
                        <p>{genresString}</p>
                       
                    </div> 
                </div>    
                <div></div>
                    <h4>Additional information</h4>
                    <ul >
                        <li>
                            <Link to="cast"  >Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" >Reviews</Link>
                        </li>
        
                    </ul>
                   
                <div></div>
            </div>
            <Outlet />
      </main>
     )
}
export default Information;

Information.propTypes = {
    informationOnFilm: PropTypes.object,
    genresString: PropTypes.string,
    id: PropTypes.number,
    yearRelease:PropTypes.string,
}