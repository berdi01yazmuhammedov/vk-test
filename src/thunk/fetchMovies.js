import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie", {
    headers: {
      "X-API-KEY": "0GQ42M1-B7P4HA9-NQ4BGVJ-6182G1S",
    },
  });
  return response.data.docs;
});
