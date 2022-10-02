import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { settings } from '../../common/setting.js';
import Slider from "react-slick";
import Loader from '../Loader/Loader';
const MovieListing = () => {
    const [SearchResult, setSearchResult] = useState(false)
    // for movies
    const movies = useSelector(getAllMovies)
    // console.log(movies.items)
    let renderMovies = movies.item_count;
    // for Search
    const shows = useSelector(getAllShows)
    console.log(shows)
    if (shows.results > 0) {
        setSearchResult(true)
        console.log(shows)
    }
    // let renderShows = shows.total_pages;
    // console.log(ALlMovies)
    console.log(SearchResult)
    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...settings}>
                        {renderMovies > 0 ? movies.items.map((movie, index) => {
                            return <MovieCard key={index} data={movie} />
                        }) :
                            <Loader />
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing