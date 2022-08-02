import React from 'react'

import Header from './components/Header'
import { CurrentWeatherCard } from './features/currentWeather/CurrentWeatherCard'

const App = () => {
  return (
    <div>
      <Header/>
      <CurrentWeatherCard/>
    </div>
  )
}

export default App 