import React from 'react';
import MovieCard from './MovieCard';

function Results(props) {
	const movieList = props.movieList;

	return (
		<div className='results'>
			<h1>Search Results</h1>
			<div className='movie-list'>
				{movieList.map((movie) => {
					return (
						<div key={movie.imdbID}>
							<MovieCard movie={movie} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Results;
