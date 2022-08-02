import React from 'react'
import { useSelector } from "react-redux"

import '../../../index.css'

import { Popover, Image, Typography } from 'antd'
import { selectCurrentWeather } from '../currentWeather-slice';

const CurrentWeather = () => {
    const {status, error, current} = useSelector(selectCurrentWeather)
    const { Title, Text } = Typography
    console.log(current);
    
  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {(status === 'received' && !error) && (
        <div>
            <Text type="secondary">{current.last_updated}</Text>
            <Title level={5}>{`${current.temp_c} °C`}</Title>
            <div>
                <Image
                    width={35}
                    preview={false}
                    alt={current.condition.text}
                    src={current.condition.icon}
                />
                <Text>{current.condition.text}</Text>
            </div>
            <Popover placement={'right'} title="In Details" content={''}>
            </Popover>
      </div>
    )}
    </>
  )
}

export default CurrentWeather