import PropTypes from 'prop-types';

const Home = ({ children }) =>
{
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

        