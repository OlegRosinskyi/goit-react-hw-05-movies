import { useState,useEffect, useRef } from 'react';
import { requestGet } from '../requestGet';
import { CastBox } from './Cast.stiled';
import { useParams } from "react-router-dom";

import {
    MAIN_PART_URL,
    GET_MOVIE_DETAILS,
    API_KEY,
    Get_MOVIE_CREDITS,
    BASE_IMG_URL,
    MOBILE_SIZES,
} from '../vars';
 
const Cast = () =>
{    const {movieId} = useParams();
    const [informationCast, setInformationCast] = useState([]);
    const prevId = useRef(0);

    useEffect(() => {
        if (prevId.current === Number(movieId)) { return; }
        prevId.current = Number(movieId);
        requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS, prevId.current, Get_MOVIE_CREDITS, API_KEY)
            .then(res => {
            setInformationCast(res.data.cast);
            })
            }, [movieId]);

let url = `${BASE_IMG_URL}${MOBILE_SIZES}`
       
    return (
      <main>
            <CastBox>
                <ul>
                    
                {informationCast.map((item, index) => <li key={item.id}> <div><img src={url+item.profile_path} width='46px' alt={item.name} /> <p>{item.name}</p> <p>Character: {item.character}</p></div> </li>)}
                </ul> 
            </CastBox>
      </main>
     )
}
export default Cast;
