import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { FrownTwoTone, MehTwoTone, SmileTwoTone, AlertTwoTone } from '@ant-design/icons';
import { Popover, Typography } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';

const AirQuality = () => {
    const {status, error, noLocation, current} = useSelector(selectCurrentWeather)
    const { Text } = Typography
    
    let daqiIndex
    let polutionData
    let airQuality
    let dustPolutantData
    let content

    if (status === 'received' && noLocation === 'noError') {
      airQuality = current.air_quality;
      daqiIndex = current.air_quality['gb-defra-index'];
      polutionData = Object.fromEntries(Object.entries(airQuality).filter(([key]) => 
        (!key.includes('index') && !key.includes('pm'))))

      dustPolutantData = Object.fromEntries(Object.entries(airQuality).filter(([key]) => 
        key.includes('pm')))

      content = Object.entries(polutionData).map(([key, value]) => <li key={key}>{`${key.toUpperCase()} : ${value.toFixed(2)} mg/m³`}</li>)
    }
    
  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
      <div className='pmData'>
        <div className='pmDetailsIcon'>
            <Popover placement={'bottomRight'} title="In Details" content={content}>
              {daqiIndex <= 3 && <SmileTwoTone className='smile' twoToneColor="#52c41a"/>}
              {(daqiIndex >= 4 && daqiIndex <= 6) && <MehTwoTone className='smile'/>}
              {(daqiIndex >= 7 && daqiIndex <= 9) && <FrownTwoTone className='smile' twoToneColor="#eb2f96"/>}
              {daqiIndex === 10 && <AlertTwoTone twoToneColor="#aa1a16"/>}
            </Popover>
          </div>
          <div className='pmDetails'>
            <Text type='secondary'>{`PM2.5 ${dustPolutantData.pm2_5.toFixed(2)} mg/m³`}</Text>
            <Text type='secondary'>{`PM10 ${dustPolutantData.pm10.toFixed(2)} mg/m³`}</Text>
          </div>
      </div>
    )}
    </>
  )
}

export default AirQuality