const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    response: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload) //agrega pelicula al estado de fav 
        //moviesFavourites: [...state.moviesFavourites, action.payload]
      };
    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
      };
    case "GET_MOVIES":
      return {
        ...state,
        // Search es una ropiedad de la respuesta del request a la API en donde contiene un arreglo del resultado 
        moviesLoaded:  action.payload.Search,
        response: action.payload.Response
      };
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetail: action.payload
      };
    default:
      return {...state}
  }
}
  
  export default rootReducer;

