import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";

const ResultSearchFilm = ({onLink,ResultSearchFilm}) =>
{

   const onClickLink = (event) => {
     console.log(event.target.id);
     onLink(event.target.id);
  }
   // console.log('ImageGalleryItem',datas);
    return (
      <main>
       
        <div>
        <ul onClick={onClickLink}>
            {ResultSearchFilm.map((item, index) => <li   key={item.id}><Link id={item.id} to="/information">{item.name ? item.name : item.original_title}</Link></li>)}
        </ul>
      </div>
      </main>
     )
}
export default ResultSearchFilm;

ResultSearchFilm.propTypes = {
    informationOnFilm: PropTypes.array,
}