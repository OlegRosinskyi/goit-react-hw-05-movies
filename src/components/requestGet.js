import axios from 'axios';
export async function requestGet(base_url, path, key, ...parameters) {
  try {
    let requestURL = `${base_url}${path}${key}${parameters.join('')}`;
    const response = await axios.get(requestURL);
    console.log('response',response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
