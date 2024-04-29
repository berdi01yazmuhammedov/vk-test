import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
