import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='container'>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}

export default Loader