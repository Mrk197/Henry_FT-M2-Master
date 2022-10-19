const API = '30b72a2c';

//CREADOR DE ACCIÓN SYNCRONO
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
 
//CREADOR DE ACCIÓN ASYNCRONO
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${API}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

export function getMovieDetail(idMovie){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API}&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}
  