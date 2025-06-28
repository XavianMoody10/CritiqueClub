import { http, HttpResponse } from "msw";
import movieGenresMockdata from "./mockdata/movieGenres.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import nowPlayingMovieMockdata from "./mockdata/nowPlayingMovie.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/genre/movie/list", () => {
    return HttpResponse.json(movieGenresMockdata);

    // return HttpResponse.json(
    //   {
    //     status_code: 7,
    //     status_message: "The resource you requested could not be found.",
    //   },
    //   { status: 404 }
    // );
  }),

  http.get("https://api.themoviedb.org/3/trending/movie/day", () => {
    return HttpResponse.json(trendingMoviesMockdata);

    // return HttpResponse.json(
    //   {
    //     status_code: 7,
    //     status_message: "The resource you requested could not be found.",
    //   },
    //   { status: 404 }
    // );
  }),

  http.get("https://api.themoviedb.org/3/movie/now_playing", () => {
    return HttpResponse.json(nowPlayingMovieMockdata);

    // return HttpResponse.json(
    //   {
    //     status_code: 7,
    //     status_message: "The resource you requested could not be found.",
    //   },
    //   { status: 404 }
    // );
  }),

  http.get("https://api.themoviedb.org/3/movie/popular", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/top_rated", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/upcoming", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),
];
