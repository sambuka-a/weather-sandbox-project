import axios from 'axios'
import * as api from './config'
import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../features/search/search-slice'
import { suggestionsReducer } from '../features/suggestions/suggestions-slice'
import { currentWeatherReducer } from '../features/currentWeather/currentWeather-slice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        suggestions: suggestionsReducer,
        currentWeather: currentWeatherReducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        thunk: {
          extraArgument: {
            client: axios,
            api,
          },
        },
      serializableCheck: false,
    })
})