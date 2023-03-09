import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { requestGet } from './requestGet';

import {
    
    MAIN_PART_URL,
    GET_MOVIE_DETAILS,
    API_KEY,
    Get_MOVIE_REWIEWS,
} from './vars';
const Reviews = ({ id }) =>
{
    console.log('informationReviews', { id });

    const [informationReviews, setInformationReviews] = useState([]);
    const prevId = useRef(0);
  
    useEffect(() => {
        if (prevId.current === id) { return; }
        prevId.current = id;
        requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS, id, Get_MOVIE_REWIEWS, API_KEY)
            .then(res => {
                console.log('res.data setInformationReviews', res.data.results); setInformationReviews(res.data.results);
            })
    },[id])
     
    return (
      <main>
            <div>{
                informationReviews===[]?
                <ul>
                    {informationReviews.map((item, index) => <li key={item.id}><div><h5>Author: {item.author}</h5> <p>{item.content}</p></div> </li>)} 
               </ul>:<p>We don't have any reviews for this movie</p>}
                
            </div>
      </main>
     )
}
export default Reviews;
Reviews.propTypes = {
    informationreviews: PropTypes.array,
}

 