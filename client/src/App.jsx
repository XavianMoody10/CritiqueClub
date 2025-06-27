import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { TVShows } from "./pages/TVShows/TVShows";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv_shows" element={<TVShows />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
