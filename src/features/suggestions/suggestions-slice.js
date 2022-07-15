import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSuggestions = createAsyncThunk(
    '@@suggestions/get-suggestions',
    async (town, {
        rejectWithValue
    }) => {
        try{
            const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${town}`)
            const data = await res.json();

            return data;
        } catch(err) {
            return rejectWithValue('Failed loading data...')
        }
        
    }
);

const initialState = {
    status: 'idle',
    error: null,
    list: [],
}

const suggestionsSlice = createSlice({
    name: '@@suggestions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSuggestions.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getSuggestions.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(getSuggestions.fulfilled, (state, action) => {
                state.status = 'received';
                state.error = null;
                state.list = action.payload.results || [];
            })
    }
})

export const suggestionsReducer = suggestionsSlice.reducer;

//selectors
export const selectSuggestions = (state) => ({
    status: state.suggestions.status,
    error: state.suggestions.error,
    list: state.suggestions.list,
})