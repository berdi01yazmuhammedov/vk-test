import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie", {
    headers: {
      "X-API-KEY": process.env.REACT_APP_API_KEY
    },
  });
  return response.data.docs;
});
