import React from 'react'
import { useSelector } from "react-redux"
import { LabelList, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import '../../../index.css'

import { selectCurrentWeather } from '../currentWeather-slice';

const TemperatureGraph = () => {

    const {status, error, forecast} = useSelector(selectCurrentWeather)
    
    let graphData = forecast?.forecastday?.reduce((acc, item) => {
        return [...item.hour.map((hour) => (
          {
            time : hour.time, 
            temperature : hour.temp_c, 
            feels : hour.feelslike_c,
            wind_s : hour.wind_kph,
            wind_dir : hour.wind_dir,
            humidity: hour.humidity, 
          }
        ))]
    }, [])

    const CustomTooltip = ({ active, payload, label }) => {
      console.log(payload);
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            {payload.map(item => (
              <p style={{color: item.color}}>{`${item.name} : ${item.value} ${item.unit}`}</p>
            ))}
          </div>
        );
      }
    
      return null;
    };

  return (
    <>
    {status === 'loading' && <h2>Loading...</h2>}
    {(status === 'received' && !error) && (
        <ResponsiveContainer width='100%' height={350}>
            <LineChart data={graphData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="time" />
                <YAxis padding={{ top: 10 }} />
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