import axios from 'axios';

const instance = axios.create({
	baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=`,
});

export default instance;
