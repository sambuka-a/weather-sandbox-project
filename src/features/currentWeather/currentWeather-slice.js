import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCurrentWeather = createAsyncThunk(
    '@@weather/getCurrentWeather',
    async (query, {
        rejectWithValue
    }) => {
        try{
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_GW_KEY}&q=${query}&aqi=yes`)
            const data = await res.json();
            console.log(data);

            return data;
        } catch(err) {
            return rejectWithValue('Failed loading data...')
        }
        
    }
);

const initialState = {
    status: 'idle',
    error: null,
    weather: [],
    noLocation: null,
}

const currentWeatherSlice = createSlice({
    name: "@@currentWeather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCurrentWeather.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(getCurrentWeather.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
        })
        .addCase(getCurrentWeather.fulfilled, (state, action) => {
            state.status = 'received';
            state.error = null;
            state.weather = action.payload;
            state.noLocation = action.payload.error || 'noError';
        })
    }
})

export const currentWeatherReducer = currentWeatherSlice.reducer;

//selectors
export const selectCurrentWeather = (state) => ({
    status: state.currentWeather.status,
    error: state.currentWeather.error,
    //weather: state.currentWeather.weather,
    current: state.currentWeather.weather.current,
    location: state.currentWeather.weather.location,
    noLocation: state.currentWeather.noLocation,
})