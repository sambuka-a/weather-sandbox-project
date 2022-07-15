import React from 'react'

import Header from './components/Header'
import { CurrentWeather } from './features/currentWeather/CurrentWeather'

const App = () => {
  return (
    <div>
      <Header/>
      <CurrentWeather/>
    </div>
  )
}

export default App 