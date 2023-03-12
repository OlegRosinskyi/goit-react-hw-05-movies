import PropTypes from 'prop-types';
import { NavLink,} from "react-router-dom";
import { generatePath, useLocation } from 'react-router-dom';

let str = '/:movieId';
const ResultSearchFilm = ({movies}) =>
{
  const location = useLocation();
    return (
      <main>
        <div>
          <ul >
            {movies.map((item) =>
              <li key={item.id}>
                <NavLink to={generatePath(str, { movieId: item.id, })} state={{ from: location }} id={item.id} >
                  {item.name ? item.name : item.original_title}
                </NavLink>
              </li>)}
        </ul>
        </div>
      </main>
     )
}
export default ResultSearchFilm;
  ResultSearchFilm.propTypes = {
  movies: PropTypes.array,

}