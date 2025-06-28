import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { TVShows } from "./pages/TVShows/TVShows";
import { Genres } from "./pages/Genres/Genres";
import { Header } from "./layouts/Header/Header";

// Create a client
export const queryClient = new QueryClient();

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_shows" element={<TVShows />} />
          <Route path="/genre/:genreId" element={<Genres />} />
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
