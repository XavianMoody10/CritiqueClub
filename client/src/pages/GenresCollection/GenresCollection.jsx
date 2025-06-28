import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { ClipLoader } from "react-spinners";
import { FaArrowAltCircleRight as ArrowIcon } from "react-icons/fa";
import { getMoviesCollectionByGenreRequest } from "../../services/discover.services";

export const GenresCollection = () => {
  const { mediaType, genreId } = useParams();
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "0px 0px 200px 0px",
  });

  // Fetch media collection
  const fetchMedia = ({ pageParam }) => {
    return getMoviesCollectionByGenreRequest(mediaType, genreId, pageParam);
  };

  // Fetch data as user scolls down
  const query = useInfiniteQuery({
    queryKey: ["genres", mediaType, genreId],
    queryFn: fetchMedia,
    initialPageParam: 1,
    retry: false,
    staleTime: 300000,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page + 1 === 3) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });

  // When div is in view, fetch next page
  useEffect(() => {
    if (inView) {
      query.fetchNextPage();
    }
  }, [inView]);

  // Display media posters
  const posters = query.data?.pages?.map((page) => {
    return page?.results.map((s) => {
      const posterUrl = `https://image.tmdb.org/t/p/original/${s.poster_path}`;
      const placeholder = "https://placehold.co/600x900";
      const title = s.name || s.title || s.orginal_title;

      return (
        <div className=" relative" key={s.id}>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className=" absolute top-0 left-0 right-0 bottom-0 bg-black/80 flex items-center justify-center"
          >
            <Link
              to={`/details/${mediaType}/${s.id}`}
              className=" flex flex-col gap-2 items-center text-xl"
            >
              <span className=" text-white font-bold">{title}</span>

              <ArrowIcon
                color="white"
                size={50}
                className=" hover:scale-110 duration-150"
              />
            </Link>
          </motion.div>
          <img
            src={s.poster_path ? posterUrl : placeholder}
            alt=""
            loading="lazy"
          />
        </div>
      );
    });
  });

  return (
    <main className=" bg-[#eaeaea] min-h-screen">
      <div className=" w-[90%] max-w-[1500px] mx-auto">
        {query.isSuccess && (
          <div className=" min-h-[1200px] grid gap-4 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {posters}
          </div>
        )}

        {query.error && (
          <div className=" min-h-[500px] flex items-center justify-center">
            <span className=" text-2xl text-red-500 font-bold">
              {query.error.message}
            </span>
          </div>
        )}

        {query.hasNextPage && (
          <div ref={ref} className=" w-full p-4 flex justify-center">
            <ClipLoader />
          </div>
        )}
      </div>
    </main>
  );
};
