import React, { useEffect, useState } from 'react'
import { Rated_Movies } from '../../features/movies/movieSlice';
// import { Chart, Series } from 'devextreme-react/chart';
import { dataSource } from '../../Data/data';


const Stats = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    var API_Response = Rated_Movies();
    API_Response.then((Ratingdata) => {
      if (Ratingdata != null) {
        console.log(Ratingdata)
        var FinalData = [];
        var RatedListArray = {};
        Ratingdata.results.forEach(Ineerelement => {
          // console.log(Ineerelement.title)
          RatedListArray =
            { "Movie Name": Ineerelement.title, "Rating": Ineerelement.vote_average }
          // console.log(RatedListArray)
          FinalData.push(RatedListArray)
          // setData(RatedListArray)
        });
        setData(FinalData)
      }

    })
  }, [])
  console.log(data)
  return (
    <div>Stats</div>
  )
}

export default Stats