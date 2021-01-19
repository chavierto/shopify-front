import React from 'react';

function MovieCard(props) {
	const movie = props.movie;

	return (
		<div className='movie-card'>
			<div className='poster-div'>
				<img className='poster' src={movie.Poster} alt={movie.Title}></img>
			</div>
			<div className='movie-info'>
				<p>{movie.Title}</p>
				<p>{movie.Year}</p>
			</div>
		</div>
	);
}

export default MovieCard;
