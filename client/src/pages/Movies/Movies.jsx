import { useQuery } from "@tanstack/react-query";
import { getGenresRequest } from "../../services/genres.services";
import { getTrendingMediaRequest } from "../../services/trending.services";
import { MediaBackdropSlider } from "../../components/MediaBackdopSlider/MediaBackdropSlider";
import { MediaGenresSlider } from "../../components/MediaGenresSlider/MediaGenresSlider";
import { getMoviesByListRequest } from "../../services/movies.services";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { Link } from "react-router-dom";
import { FaChevronRight as ArrowIcon } from "react-icons/fa";

export const Movies = () => {
  const trending = useQuery({
    queryFn: () => getTrendingMediaRequest("movie"),
    queryKey: ["movie", "trending"],
    staleTime: 300000,
  });

  const genres = useQuery({
    queryFn: () => getGenresRequest("movie"),
    queryKey: ["movie", "genres"],
    staleTime: 300000,
  });

  const nowPlaying = useQuery({
    queryFn: () => getMoviesByListRequest("now_playing", 1),
    queryKey: ["movie", "now_playing", 1],
    staleTime: 300000,
    retry: false,
  });

  const popular = useQuery({
    queryFn: () => getMoviesByListRequest("popular", 1),
    queryKey: ["movie", "popular", 1],
    staleTime: 300000,
    retry: false,
  });

  const topRated = useQuery({
    queryFn: () => getMoviesByListRequest("top_rated", 1),
    queryKey: ["movie", "top_rated", 1],
    staleTime: 300000,
    retry: false,
  });

  const upcoming = useQuery({
    queryFn: () => getMoviesByListRequest("upcoming", 1),
    queryKey: ["movie", "upcoming", 1],
    staleTime: 300000,
    retry: false,
  });

  return (
    <main className=" bg-[#eaeaea] min-h-screen">
      <div className=" w-[90%] max-w-[1500px] mx-auto space-y-12">
        <section>
          <MediaBackdropSlider results={trending.data?.results} />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Genres</h2>
          <MediaGenresSlider genres={genres.data?.genres} />
        </section>

        <section className=" space-y-5">
          <div className=" flex items-center gap-5">
            <h2 className=" text-2xl font-bold">Now Playing</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={nowPlaying.data?.results}
            error={nowPlaying.error}
          />
        </section>

        <section className=" space-y-5">
          <div className=" flex items-center gap-5">
            <h2 className=" text-2xl font-bold">Popular</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={popular.data?.results}
            error={popular.error}
          />
        </section>

        <section className=" space-y-5">
          <div className=" flex items-center gap-5">
            <h2 className=" text-2xl font-bold">Top Rated</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={topRated.data?.results}
            error={topRated.error}
          />
        </section>

        <section className=" space-y-5">
          <div className=" flex items-center gap-5">
            <h2 className=" text-2xl font-bold">Upcoming</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={upcoming.data?.results}
            error={upcoming.error}
          />
        </section>
      </div>
    </main>
  );
};
