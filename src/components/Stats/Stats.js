import React, { useEffect, useState } from 'react'
import { Rated_Movies } from '../../features/movies/movieSlice';
// import { Chart, Series } from 'devextreme-react/chart';
import { dataSource } from '../../Data/data';
import ReactEcharts from "echarts-for-react";

const Stats = () => {
  const [NameData, setNameData] = useState([]);
  const [RateData, setRateData] = useState([]);
  const [FinalVoteCount, setFinalVoteCount] = useState([]);
  useEffect(() => {
    var API_Response = Rated_Movies();
    API_Response.then((Ratingdata) => {
      if (Ratingdata != null) {
        var Final_Name_Data = [];
        var Final_Rating_Value = [];
        var VoteCount = [];
        Ratingdata.results.forEach((Innerelement, key) => {
          console.log(key[Math.floor(Math.random() * key.length)])
          if (key < 10) {
            Final_Name_Data.push(Innerelement.title.replace("The", "").replace(/\s/g, '').substring(0, 4) + "...");
            Final_Rating_Value.push(Innerelement.vote_average);
            VoteCount.push(Innerelement.vote_count);
          }
        });
        setNameData(Final_Name_Data)
        setRateData(Final_Rating_Value)
        setFinalVoteCount(VoteCount)
      }

    })
  }, [])
  const options = {
    xAxis: {
      type: 'category',
      data: NameData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: RateData,
        type: 'bar'
      }
    ]
  };
  const Rateoptions = {
    xAxis: {
      type: 'category',
      data: NameData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: FinalVoteCount,
        type: 'bar'
      }
    ]
  };
  return (
    <>
      <div className='container'>
        <h3 className='RatingMovie_HEading'>Top 10 Rated Movies</h3>
        <p className='RatingMovie_HEading'>X-Axis : Movie Names</p>
        <p className='RatingMovie_HEading'>Y-Axis : Total  Rating </p>
        <ReactEcharts option={options} />
      </div>
      <div className='container'>
        <h3 className='RatingMovie_HEading'> Movies With Vote / Rating Count.</h3>
        <p className='RatingMovie_HEading'>X-Axis : Movie Names</p>
        <p className='RatingMovie_HEading'>Y-Axis : Total Vote Cast</p>
        <ReactEcharts option={Rateoptions} />
      </div>
    </>
  )
}

export default Stats