import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { TVShows } from "./pages/TVShows/TVShows";
import { Header } from "./layouts/Header/Header";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { TVShowDetails } from "./pages/TVShowDetails/TVShowDetails";
import { GenresCollection } from "./pages/GenresCollection/GenresCollection";

// Create a client
export const queryClient = new QueryClient();

const App = () => {
  // const location = useLocation();

  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <ScrollRestoration
                getKey={(location, matches) => {
                  if (
                    location.pathname === "/movies" ||
                    location.pathname === "/tv_shows"
                  ) {
                    return location.key;
                  }
                }}
              ></ScrollRestoration>
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_shows" element={<TVShows />} />
          <Route
            path="/genre/:mediaType/:genreId"
            element={<GenresCollection />}
          />
          <Route path="/details/tv/:mediaId" element={<TVShowDetails />} />
          <Route path="/details/movie/:mediaId" element={<MovieDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
