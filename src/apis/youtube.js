// npm install axios@0.18.1
import axios from 'axios';

const KEY = 'AIzaSyBKMQv89N_W9878uW6G40QlV8CKUwN7Zas';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
