import PropTypes from 'prop-types';

const Movies = ({children}) =>
{
   // console.log('ImageGalleryItem',datas);
    return (
        <main> 
            <div>{children}</div>  
        </main>
     )
}
export default Movies;

Movies.propTypes = {
  children:PropTypes.array,
}
