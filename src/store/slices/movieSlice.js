import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../thunk/fetchMovies";

const initialState = {
    movies: [],
    isLoading: false,
    error: null,
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
});
export const moviesReducer = movieSlice.reducer;