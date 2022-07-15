import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { FrownTwoTone, MehTwoTone, SmileTwoTone, AlertTwoTone } from '@ant-design/icons';
import { Popover } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';

const AirQuality = () => {
    const {status, error, noLocation, weather} = useSelector(selectCurrentWeather)
    console.log(noLocation);
    let daqiIndex
    let polutionData
    let airQuality
    let content

    if (status === 'received' && noLocation === 'noError') {
      airQuality = (weather.current.air_quality)
      daqiIndex = (weather.current.air_quality['gb-defra-index'])
      polutionData = Object.fromEntries(Object.entries(airQuality).filter(([key]) => !key.includes('index')))
      content = Object.entries(polutionData).map(([key, value]) => <li>{`${key} - ${value.toFixed(2)}`}</li>)
    }
    
  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
        <div>
        <Popover placement={'right'} title="In Details" content={content}>
          {daqiIndex <= 3 && <SmileTwoTone className='smile' twoToneColor="#52c41a"/>}
          {(daqiIndex >= 4 && daqiIndex <= 6) && <MehTwoTone className='smile'/>}
          {(daqiIndex >= 7 && daqiIndex <= 9) && <FrownTwoTone className='smile' twoToneColor="#eb2f96"/>}
          {daqiIndex === 10 && <AlertTwoTone twoToneColor="#aa1a16"/>}
        </Popover>
      </div>
    )}
    </>
  )
}

export default AirQuality