# Shopify Front-End Challenge

## The Shoppies: Movie awards for entrepreneurs

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

<br>

## Technical requirements
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.


# MVP:
- As a user, I want to be able to search for a movie title.
- As a user, I want to have the results of my search display the title of the movie along with the poster and release date.
- As a user, I want to have the results of my search to be displayed chronologically.
- As a user, I want to add up to 5 movies to a *nominees* list.
- As a user, I want to be able to remove movies I've added to my *nominees* list.