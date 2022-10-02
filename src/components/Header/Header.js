import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows, getAllShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [ALlMovies, setAllMovies] = useState(false);
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setTerm(value);
    }
    const submitHandler = (event) => {
        if (term === "")
            alert("Please enter text")
        else {
            // dispatch(fetchAsyncMovies(term))
            dispatch(fetchAsyncShows(term))
        }
        event.preventDefault();

    }
    const shows = useSelector(getAllShows)
    return (

        <div className='header'>
            <Link to={`/`}>
                <div className="MAinStatHEad" >
                    <h6>Home</h6>
                </div>
            </Link> <Link to={`/Stats`}>
                <div className="MAinStatHEad" >
                    <h6>Statistics</h6>
                </div>
            </Link>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search Movie' name="search" onChange={handleChange} autoComplete="off" />
                    <button type='submit'> <i className="fa fa-search"></i> </button>
                </form>
            </div>
            <div className="user-img">
                <img src={user} alt="user-img" />
            </div>
        </div>

    )
}

export default Header