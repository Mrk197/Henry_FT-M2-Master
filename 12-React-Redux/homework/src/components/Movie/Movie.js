import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

//accder a obj Match de las props
   // this.props.match.params.id

   componentDidMount(){
     const movieId = this.props.match.params.id;
     this.props.getMovieDetail(movieId);
   }

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3> 
                <img src={this.props.movie.Poster} alt="Img not found"/> 
                <p>{`Year: ${this.props.movie.Year}`}</p>
                <p>{`Genre: ${this.props.movie.Genre}`}</p>
                <p>{`Runtime: ${this.props.movie.Runtime}`}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        movie: state.movieDetail  
    }
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

//connect(PROPS, ACTIONS)(COMPONENT)