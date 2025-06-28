import { useQuery } from "@tanstack/react-query";
import { getTrendingMediaRequest } from "../../services/trending.services";
import { getGenresRequest } from "../../services/genres.services";
import { getShowsByListRequest } from "../../services/shows.services";
import { MediaBackdropSlider } from "../../components/MediaBackdopSlider/MediaBackdropSlider";
import { MediaGenresSlider } from "../../components/MediaGenresSlider/MediaGenresSlider";
import { FaChevronRight as ArrowIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";

export const TVShows = () => {
  const trending = useQuery({
    queryFn: () => getTrendingMediaRequest("tv"),
    queryKey: ["tv", "trending"],
    staleTime: 300000,
  });

  const genres = useQuery({
    queryFn: () => getGenresRequest("tv"),
    queryKey: ["tv", "genres"],
    staleTime: 300000,
  });

  const airingToday = useQuery({
    queryFn: () => getShowsByListRequest("airing_today", 1),
    queryKey: ["movie", "airing_today", 1],
    staleTime: 300000,
    retry: false,
  });

  const onTheAir = useQuery({
    queryFn: () => getShowsByListRequest("on_the_air", 1),
    queryKey: ["tv", "on_the_air", 1],
    staleTime: 300000,
    retry: false,
  });

  const popular = useQuery({
    queryFn: () => getShowsByListRequest("popular", 1),
    queryKey: ["tv", "popular", 1],
    staleTime: 300000,
    retry: false,
  });

  const topRated = useQuery({
    queryFn: () => getShowsByListRequest("top_rated", 1),
    queryKey: ["movie", "top_rated", 1],
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
            <h2 className=" text-2xl font-bold">Airing Today</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={airingToday.data?.results}
            error={airingToday.error}
          />
        </section>

        <section className=" space-y-5">
          <div className=" flex items-center gap-5">
            <h2 className=" text-2xl font-bold">On The Air</h2>

            <Link to={""} className=" flex items-center gap-1">
              <span className=" text-lg font-semibold">View All</span>
              <ArrowIcon size={25} />
            </Link>
          </div>

          <MediaPosterSlider
            results={onTheAir.data?.results}
            error={onTheAir.error}
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
      </div>
    </main>
  );
};
