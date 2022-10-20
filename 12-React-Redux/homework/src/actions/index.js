const apikey = '30b72a2c';

//CREADOR DE ACCIÓN SYNCRONO
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function removeMovieFavorite(payload) {  //recibe id 
    return { type: "REMOVE_MOVIE_FAVORITE", payload }; //retorna action de remove
  }
 
//CREADOR DE ACCIÓN ASYNCRONO
  export function getMovies(titulo) {
    return function(dispatch) {  //Redux permite pasar dispatch como parámetro
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then(response => response.json())  //captura respuesta y convierte a JSON (OBJ JS)
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json }); //obtiene OBJ JS y envía acción
        });
    };
  }

export function getMovieDetail(idMovie){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
        .then(response => response.json()) //pasa respuesta a format JSON
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAILS", payload: json }); //despacha acción y pasa al payload la respuesta convertida a JSON
        });
    };
}
  