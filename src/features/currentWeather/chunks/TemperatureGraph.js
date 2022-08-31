import React from 'react'
import { useSelector } from "react-redux"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import '../../../index.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { selectCurrentWeather } from '../currentWeather-slice';

const TemperatureGraph = () => {

  const {status, error, forecast} = useSelector(selectCurrentWeather)
  
  let graphData = forecast?.forecastday?.reduce((acc, item) => {
      return [...item.hour.map((hour) => (
        {
          time : hour.time.slice(-5), 
          temperature : hour.temp_c, 
          feels : hour.feelslike_c,
          wind_s : hour.wind_kph,
          wind_dir : hour.wind_dir,
          humidity: hour.humidity, 
          conditionText: hour.condition.text,
          conditionIcon: hour.condition.icon,
        }
      ))]
  }, [])

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {

        return (
          <div className="custom-tooltip">
            <img src={payload[0].payload.conditionIcon} alt="Condition" width="48" height="48"></img>
            <p>{`${label}`}</p>
            {payload.map((i) => (
              <p style={{color: i.color}} key={i.name}>{`${i.name} : ${i.value} ${i.unit}`}</p>
            )
            )}
            <p>{`Humidity : ${payload[0].payload.humidity} %`}</p>
            <p>{`Wind direction : ${payload[0].payload.wind_dir}`}</p>
            
          </div>
        );
      }
      return null;
    };

  return (
    <>
    {status === 'loading' && <Skeleton count={5} />}
    {(status === 'received' && !error) && (
        <ResponsiveContainer width='100%' height={350}>
            <LineChart data={graphData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="time" />
                <YAxis padding={{ top: 10 }} label={{ value: '°C', position: 'insideLeft', textAnchor: 'middle' }} />
                <Tooltip content = {<CustomTooltip />}/>
                <Line type="monotone" name={'Temperature'} unit={'°C'} dataKey="temperature" stroke="#757761" />
                <Line type="monotone" name={'Feels like'} unit={'°C'} dataKey="feels" stroke="#f4e76e" />
                <Line type="monotone" name={'Wind speed'} unit={'km/h'} dataKey="wind_s" stroke="#8ff7a7" />
            </LineChart>
        </ResponsiveContainer>
        )}
    </>
)}

export default TemperatureGraph