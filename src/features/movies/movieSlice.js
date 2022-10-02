import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY } from '../../common/API/MovieApiKey';
import movieAPI from '../../common/API/movieAPI';

// asyncthunkfor movies-This is an async action creator
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieAPI.get(`list/1?api_key=${APIKEY}&language=en-US`)
    return response.data;
});
// asyncthunk for shows-This is an async action creator
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieAPI.get(`search/movie?api_key=${APIKEY}&query=${term}`)
    return response.data;
});
// asyncthunk for show and movie details-This is an async action creator
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieAPI.get(`movie/${id}?api_key=${APIKEY}&language=en-US`)
    // console.log(response)
    return response.data;
});
// states
const initialState = {
    movies: {},
    shows: {},
    details: {}
}
// slice
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMovieOrShow: (state) => {
            state.details = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected');
        },
        // for shows
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            console.log(payload)
            return { ...state, shows: payload }
        },
        // for show/movie details
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            return { ...state, details: payload }
        },
    }
})

export default movieSlice.reducer;
export const getAllMovies = (redu) => redu.movies.movies;
export const getAllShows = (redu) => redu.movies.shows;
export const movieOrShowDetails = (redu) => redu.movies.details;
export const { removeMovieOrShow } = movieSlice.actions;

// Rated Movie List 
export const Rated_Movies = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=06462030f7de9a187cf530c7dc957cda&language=en-US&page=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            return result;
        })
        .catch(error => {
            console.log('error', error);
            return null;
        });
}