
import { useState, useRef, useEffect } from 'react';
import { requestGet } from '../requestGet';
import { RewiewsBox } from './Reviews.stiled';
import { useParams } from "react-router-dom";

import {
    MAIN_PART_URL,
    GET_MOVIE_DETAILS,
    API_KEY,
    Get_MOVIE_REWIEWS,
} from '../vars';
const Reviews = () =>
{
    const [informationReviews, setInformationReviews] = useState([]);
    const prevId = useRef(0);
    const movieId = useParams();
 
    useEffect(() => {
        if (prevId.current === Number(movieId)) { return; }
        prevId.current = Number(movieId);
        requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS, movieId, Get_MOVIE_REWIEWS, API_KEY)
            .then(res => {
            setInformationReviews(res.data.results);
            })
    },[movieId])
    return (
      <main>
            <RewiewsBox>{
                informationReviews===[]?
                <ul>
                    {informationReviews.map((item, index) => <li key={item.id}><div><h5>Author: {item.author}</h5> <p>{item.content}</p></div> </li>)} 
               </ul>:<p>We don't have any reviews for this movie</p>}
            </RewiewsBox>
      </main>
     )
}
export default Reviews;


 