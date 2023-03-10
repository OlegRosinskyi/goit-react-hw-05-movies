import PropTypes from 'prop-types';
import { NavLink,} from "react-router-dom";
import { useLocation,generatePath, useParams } from 'react-router-dom';
//import { Link } from "react-router-dom";
const str = 'movies/:movieId';
const ResultSearchFilm = ({onLink,ResultSearchFilm}) =>
{ const location = useLocation();
  const nId = useParams();
   const onClickLink = (event) => {
         onLink(event.target.id);
  }
    console.log('nId',nId);
    return (
      <main>
        <div>
          <ul onClick={onClickLink}>
            {ResultSearchFilm.map((item) => <li   key={item.id}><NavLink path={generatePath(str, {movieId:item.id,})}  to={generatePath(str, {movieId:item.id,})} state={{ from: location }} id={item.id} >{item.name ? item.name : item.original_title}</NavLink></li>)}
        </ul>
        </div>
        
      </main>
     )
}
export default ResultSearchFilm;

ResultSearchFilm.propTypes = {
  ResultSearchFilm: PropTypes.array,
  onLink:PropTypes.func,
}