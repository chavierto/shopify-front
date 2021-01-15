import React from 'react';
import axios from './axios';

function SearchBar(props) {
	// Set search term to state

	// Use axios and the search term to get movie list
	async function getMovies(e) {
		const baseURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${props.searchTerm}`;
		e.preventDefault();
		const movies = await axios.get(baseURL);
		console.log(movies);
		props.setMovieList(movies.data.Search);
	}

	return (
		// Create a div that will hold the search form
		<div>
			<form onSubmit={getMovies}>
				<label>Search Movie:</label>
				<input
					className='inputField'
					type='text'
					name='searchMovie'
					onChange={(event) => {
						props.setSearchTerm(event.target.value);
					}}></input>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
