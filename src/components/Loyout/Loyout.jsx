//import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { LineBox, Line, Link, LoyoutBox } from './Loyout.stiled';
//import { useNavigate } from "react-router-dom"
//import {useState, useEffect } from "react";
//import { Outlet } from "react-router-dom";
const Loyout = () =>
{
 //const [status, setStatus] = useState(false);
   //  const navigate = useNavigate();
   // useEffect(() => { if (status === false) { setStatus(true); navigate("/",);}  }, [])
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
            <Outlet />
         </ LoyoutBox>
         
      </>
     )
}
export default Loyout;
Loyout.propTypes = {
   // informationOnFilm: PropTypes.array,
}