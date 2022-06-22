import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    display: true,
}

const searchSlice = createSlice({
    name: '@@search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
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