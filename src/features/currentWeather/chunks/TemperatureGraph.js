import React from 'react'
import { useSelector } from "react-redux"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import '../../../index.css'

import { selectCurrentWeather } from '../currentWeather-slice';

const TemperatureGraph = () => {

    const {status, error, forecast} = useSelector(selectCurrentWeather)
    console.log(forecast.forecastday[0].hour);
    
    let graphData = forecast?.forecastday?.reduce((acc, item) => {
        return [...item.hour.map((hour) => (
          {time : hour.time, temp : hour.temp_c}))]
    }, [])

  return (
    <>
    {status === 'loading' && <h2>Loading...</h2>}
    {(status === 'received' && !error) && (
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={graphData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
        )}
    </>
)}

export default TemperatureGraph