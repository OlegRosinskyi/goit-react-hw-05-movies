import axios from 'axios';
export async function requestGet(base_url, path,id, key, ...parameters) {
  try {
    let requestURL;
    if (id === 0) {
       requestURL = `${base_url}${path}${key}${parameters.join('')}`;
     
    }
    else { requestURL = `${base_url}${path}${id}${key}${parameters.join('')}`;
      ;}
    
    const response = await axios.get(requestURL) 
    console.log('response',response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
