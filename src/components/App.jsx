import {
  API_KEY,
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
 } from './vars';

import { requestGet } from './requestGet';
import { useEffect, useState, useRef } from 'react';

export const App = () => {
  const firstDownload = useRef(false);
  const [informationOnFilm, setInformationOnFilm] = useState([]);

  useEffect(() => {

    if (firstDownload.current) { return; }
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY)
      .then(res => { console.log('rez', res.data.results); setInformationOnFilm(res.data.results);  });   //firstDownload.current = true;
  }, [])

  return (
    <><div><button>Home</button> 
      <button>Movies</button></div>
      
      <div>
        <ul>
          {informationOnFilm.map(item => <li key={item.id}>{item.name?item.name:item.original_title}</li>)}
        </ul>
      </div>
    </>
  );
};
