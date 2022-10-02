import React from 'react'
import './MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
    return (
        <div className='card-item'>
            <Link to={`/movie/${data.id}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h3 className='text-center'>{data.title}</h3>
                            <p>{data.release_date}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard