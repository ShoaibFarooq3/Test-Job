import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { settings } from '../../common/setting.js';
import Slider from "react-slick";

const MovieListing = () => {
    // for movies
    const movies = useSelector(getAllMovies)
    // console.log(movies.item_count)
    let renderMovies = movies.item_count;
    // for shows
    const shows = useSelector(getAllShows)
    let renderShows = shows;
    console.log(shows)
    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...settings}>
                        {renderMovies > 0 ? movies.items.map((movie, index) => {
                            return <MovieCard key={index} data={movie} />
                        }):
                            <div className='movies-error' ><h2>{movies.Error}</h2></div>
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing