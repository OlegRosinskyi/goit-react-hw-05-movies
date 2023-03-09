import PropTypes from 'prop-types';
import { useState,useEffect, useRef } from 'react';
import { requestGet } from './requestGet';
import {
    MAIN_PART_URL,
    GET_MOVIE_DETAILS,
    API_KEY,
    Get_MOVIE_CREDITS,
    BASE_IMG_URL,
    MOBILE_SIZES,
} from './vars';
 
const Cast = ({ id }) =>
{
    const [informationCast, setInformationCast] = useState([]);
    const prevId = useRef(0);

    useEffect(() => {
        if (prevId.current === id) { return; }
        prevId.current = id;
        requestGet(MAIN_PART_URL, GET_MOVIE_DETAILS, id, Get_MOVIE_CREDITS, API_KEY)
            .then(res => {
                console.log('res.data setInformationCast', res.data.cast); setInformationCast(res.data.cast);
            })
            }, [id]);

let url = `${BASE_IMG_URL}${MOBILE_SIZES}`
       
    return (
      <main>
            <div>
                <ul>
                    
                {informationCast.map((item, index) => <li key={item.id}> <div><img src={url+item.profile_path} width='46px' alt={item.name} /> <p>{item.name}</p> <p>Character: {item.character}</p></div> </li>)}
                </ul> 
            </div>
      </main>
     )
}
export default Cast;
Cast.propTypes = {
    id: PropTypes.number,
}
