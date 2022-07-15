import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    lat: '',
    lon: '',
    display: true,
}

const searchSlice = createSlice({
    name: '@@search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload.name;
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        },
        setSuggestionTrigger: (state, action) => {
            state.display = action.payload;
        },
        resetSearch: () => initialState,
    },
})

export const { setSearch, resetSearch, setSuggestionTrigger } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

//selectors
export const selectSearch = (state) => state.search.search;
export const selectSuggestionTrigger = (state) => state.search.display;
export const selectCoordinates = (state) => {
    if((state.search.lon && state.search.lat)) {
        return `${state.search.lat},${state.search.lon}`
    }
    return `${state.search.search}`
} 