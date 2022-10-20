import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

import {removeMovieFavorite} from "../../actions/index"

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
          this.props.resp === "False" ?
          <div><p>No Encontrado</p></div> :
          this.props.movies?.map(movie =>
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={()=>this.props.removeMovieFavorite(movie.id)}>
                  X
                </button> 
              </div>
          ) 
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    movies: state.moviesFavourites,
    resp: state.response
  };
}

export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);
