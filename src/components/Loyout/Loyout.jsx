//import PropTypes from 'prop-types';

import { LineBox,Line,Link, LoyoutBox } from './Loyout.stiled';
import { Outlet } from "react-router-dom";


const Loyout = () =>
{
   // console.log('ImageGalleryItem',datas);
   return (
      <>
         < LoyoutBox> 
                <nav>
                <Link to="/"> <span>Home</span>   </Link>
                <Link to="/movies"> <span>Movies</span> </Link>
                </nav>
             < LineBox>  
                 <Line> </Line>    
            </ LineBox> 
         </ LoyoutBox>
          <Outlet />
      </>
     )
}
export default Loyout;
Loyout.propTypes = {
   // informationOnFilm: PropTypes.array,
}