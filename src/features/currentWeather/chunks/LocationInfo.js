import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { Typography } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';
    
const CurrentLocation = () => {
    const { Title } = Typography
    const {status, error, location} = useSelector(selectCurrentWeather)

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
        <div className='locationInfo'>
          <div>
            <Title className='country' level={4}>{location.country}</Title>
          </div>
          <div className='localTime'>
            <small>{`Local time-${location.localtime}`}</small>
          </div>
      </div>
    )}
    </>
  )
}

export default CurrentLocation