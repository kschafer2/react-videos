// npm install axios@0.18.1
import axios from 'axios';

//https://console.developers.google.com/apis
const KEY = 'API KEY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
