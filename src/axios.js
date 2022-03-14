import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-6539e.cloudfunctions.net/api' // the api cloud function url
});

export default instance;