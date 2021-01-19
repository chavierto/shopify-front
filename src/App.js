import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import Nominees from './Nominees';
import dotenv from 'dotenv';

dotenv.config();

// Setting up a class component in order to have global state. --> EDIT: In the future going to try Redux so I can use all hooks
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieList: [],
			nominees: [],
			searchTerm: '',
		};
	}

	// Create the functions to update the movie list, nominees and search term from the search results, to be passed down to the components.
	setMovieList = (res) => {
		this.setState({ movieList: res });
	};

	setNominees = (movie) => {
		this.setState({ nominees: movie });
	};

	setSearchTerm = (text) => {
		this.setState({ searchTerm: text });
	};

	render() {
		return (
			<div className='App'>
				<main>
					<SearchBar
						searchTerm={this.state.searchTerm}
						setSearchTerm={this.setSearchTerm}
						setMovieList={this.setMovieList}
					/>
					<Results
						movieList={this.state.movieList}
						setNominees={this.setNominees}
					/>
					<Nominees setNominees={this.setNominees} />
				</main>
			</div>
		);
	}
}

export default App;
