import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import { movieOrShowDetails } from '../../features/movies/movieSlice'
import './MovieDetails.scss';
import { removeMovieOrShow } from '../../features/movies/movieSlice'
import Spinner from '../Spinner/Spinner';


const MovieDetails = () => {



    const { imdbID } = useParams();
    // later callling after useEffect
    const dispatch = useDispatch();
    const details = useSelector(movieOrShowDetails)
    // console.log(details)

    // the above part

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeMovieOrShow())
        }
    }, [dispatch, imdbID])


    return (
        <>{Object.keys(details) === 0 ? <Spinner />
            : <>
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={"https://image.tmdb.org/t/p/w500" + details.poster_path} />
                            <h1>{details.title}</h1>
                            <h4>{details.release_date}</h4>
                            <span className="minutes">{details.runtime} min</span>
                            <p className="type">Action, Crime, Fantasy</p>
                        </div>
                        <div className="movie_desc pt-4">
                            <p className="text">
                                {details.overview}
                            </p>
                        </div>

                    </div>
                    <div className="blur_back bright_back"
                    // style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500` + details.poster_path`)` }}
                    ></div>
                </div></>}
        </>
    )
}

export default MovieDetails