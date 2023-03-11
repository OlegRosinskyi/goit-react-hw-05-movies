import PropTypes from 'prop-types';
import { NavLink,} from "react-router-dom";
import { generatePath, useLocation } from 'react-router-dom';
//import { useEffect } from 'react';
//import { Link } from "react-router-dom";
let str = '/:movieId';
const ResultSearchFilm = ({onLink,ResultSearchFilm}) =>
{
 
  const location = useLocation();

  console.log('ResultSearchFilm-location', location);
  
 // if (location.pathname === '/movies') {str = '/:movieId'; };//{ location.pathname = '/'; }
 // useEffect(()=>{if (location.pathname === '/movies') { location.pathname = '/'; }},[location])

   const onClickLink = (event) => {
         onLink(event.target.id);
  }
    
    return (
      <main>
        <div>
          <ul onClick={onClickLink}>
            {ResultSearchFilm.map((item) => <li   key={item.id}><NavLink   to={generatePath(str, {movieId:item.id,})} state={{ from: location }} id={item.id} >{item.name ? item.name : item.original_title}</NavLink></li>)}
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