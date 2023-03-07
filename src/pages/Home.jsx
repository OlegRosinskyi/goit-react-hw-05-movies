import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

const Home = ({ children }) =>
{
  

   // console.log('ImageGalleryItem',datas);
    return (
      <main> 
            <div>{children}</div>  
        </main>
     )
}
export default Home;

Home.propTypes = {
   children:PropTypes.array,
}

        