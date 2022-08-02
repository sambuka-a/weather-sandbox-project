import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { Typography } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';
    
const CurrentLocation = () => {
    const { Title, Text } = Typography
    const {status, error, location} = useSelector(selectCurrentWeather)
    console.log(location);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
        <div>
            <Text type="secondary">{location.localtime}</Text>
            <Title level={5}>{location.country}</Title>
            <p>{location.region}</p>
        
      </div>
    )}
    </>
  )
}

export default CurrentLocation