import { http, HttpResponse } from "msw";
import movieGenresMockdata from "./mockdata/movieGenres.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import nowPlayingMovieMockdata from "./mockdata/nowPlayingMovie.mockdata.js";
import airingTodayShowsMockdata from "./mockdata/airingTodayShows.mockdata.js";
import trendingShowsMockdata from "./mockdata/trendingShows.mockdata.js";
import movieDetailsMockdata from "./mockdata/movieDetails.mockdata.js";
import showDetailsMockdata from "./mockdata/showDetails.mockdata.js";
import actionMoviesMockdata from "./mockdata/actionMovies.mockdata.js";
import actionAndAdventureShowsMockdata from "./mockdata/actionAndAdventureShows.mockdata.js";
import showsGenresMockdata from "./mockdata/showsGenres.mockdata.js";

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

  http.get("https://api.themoviedb.org/3/genre/tv/list", () => {
    return HttpResponse.json(showsGenresMockdata);

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

  http.get("https://api.themoviedb.org/3/trending/tv/day", () => {
    return HttpResponse.json(trendingShowsMockdata);

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

  http.get("https://api.themoviedb.org/3/tv/airing_today", () => {
    return HttpResponse.json(airingTodayShowsMockdata);
  }),

  http.get("https://api.themoviedb.org/3/tv/on_the_air", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/popular", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/top_rated", () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "The resource you requested could not be found.",
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/1011477", () => {
    return HttpResponse.json(movieDetailsMockdata);

    // return HttpResponse.json(
    //     {
    //       status_code: 7,
    //       status_message: "The resource you requested could not be found.",
    //     },
    //     { status: 404 }
    //   );
  }),

  http.get("https://api.themoviedb.org/3/tv/65701", () => {
    return HttpResponse.json(showDetailsMockdata);
  }),

  http.get("https://api.themoviedb.org/3/discover/movie", ({ request }) => {
    const url = new URL(request.url);
    const with_genres = url.searchParams.get("with_genres");
    const page = url.searchParams.get("page");

    if (with_genres === "28") {
      return HttpResponse.json(
        actionMoviesMockdata.find((m) => m.page == page)
      );
    } else {
      return HttpResponse.json(
        {
          status_code: 7,
          status_message: "The resource you requested could not be found.",
        },
        { status: 404 }
      );
    }
  }),

  http.get("https://api.themoviedb.org/3/discover/tv", ({ request }) => {
    const url = new URL(request.url);
    const with_genres = url.searchParams.get("with_genres");
    const page = url.searchParams.get("page");

    if (with_genres === "10759") {
      return HttpResponse.json(
        actionAndAdventureShowsMockdata.find((m) => m.page == page)
      );
    } else {
      return HttpResponse.json(
        {
          status_code: 7,
          status_message: "The resource you requested could not be found.",
        },
        { status: 404 }
      );
    }
  }),
];
