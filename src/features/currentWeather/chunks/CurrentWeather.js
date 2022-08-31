import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { Popover, Image, Typography } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';

const CurrentWeather = () => {
    const {status, error, current} = useSelector(selectCurrentWeather)
    const { Title } = Typography
    
    const content = (
      <div>
        <p key={1}>{<small>Last updated : </small>}<strong>{current?.last_updated}</strong></p>
        <p key={2}>{<small>Condition : </small>}<strong>{current?.condition.text}</strong></p>
        <p key={3}>{<small>Feels like : </small>}<strong>{current?.feelslike_c}°C</strong></p>
        <p key={4}>{<small>Wind : </small>}<strong>{current?.wind_kph}km/h</strong></p>
        <p key={5}>{<small>Humidity : </small>}<strong>{current?.humidity}%</strong></p>
      </div>
      );

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
        
        <div className='currentWeather'>
          <Popover placement={'bottomLeft'} title="In Details" content={content}>
            <Image
              width={45}
              preview={false}
              alt={current.condition.text}
              src={current.condition.icon}
            />
          </Popover>
          <div>
            <Title level={1}>{`${current.temp_c}°C`}</Title>
          </div>
      </div>
    )}
    </>
  )
}

export default CurrentWeather