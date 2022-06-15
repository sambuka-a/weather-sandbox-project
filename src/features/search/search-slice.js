import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
}

const searchSlice = createSlice({
    name: '@@search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
            console.log(state.search);
        },
        resetSearch: () => initialState,
    },
})

export const { setSearch, resetSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

//selectors
export const selectSearch = (state) => state.search.search;