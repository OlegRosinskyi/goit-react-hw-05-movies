import { Outlet } from 'react-router-dom';
import { LineBox, Line, Link, LoyoutBox } from './Loyout.stiled';

const Loyout = () =>
{
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
