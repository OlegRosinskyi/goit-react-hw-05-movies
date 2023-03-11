//import PropTypes from 'prop-types';

import { LineBox,Line,Link, LoyoutBox } from './Loyout.stiled';
//import { Outlet } from "react-router-dom";


const Loyout = () =>
{
   // console.log('ImageGalleryItem',datas);
   return (
      <>
      <header>
         < LoyoutBox> 
                <nav>
                <Link to="/" > Home   </Link>
                <Link to="/movies"> Movies </Link>
                </nav>
             < LineBox>  
                 <Line> </Line>    
            </ LineBox> 
         </ LoyoutBox>
      </header>
         
      </>
     )
}
export default Loyout;
Loyout.propTypes = {
   // informationOnFilm: PropTypes.array,
}