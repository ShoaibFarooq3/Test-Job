import React from 'react'
import { useSelector } from 'react-redux'
import { getAllShows } from '../../features/movies/movieSlice'

const SearchResult = () => {
  const shows = useSelector(getAllShows)
  console.log(shows)



  return (
    <div>SearchResult</div>
  )
}

export default SearchResult