import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsRequest } from "../../services/movies.services";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { mediaId } = useParams();

  const movie = useQuery({
    queryKey: ["tv", mediaId],
    queryFn: () => getMovieDetailsRequest(mediaId),
    retry: false,
  });

  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.data?.poster_path}`;
  const placeholder = "https://placehold.co/600x900";
  const title =
    movie.data?.name || movie.data?.title || movie.data?.orginal_name;
  const overview = movie.data?.overview;

  return (
    <main className=" bg-[#eaeaea] min-h-screen pt-14">
      <div className=" w-[90%] max-w-[1500px] mx-auto">
        {movie.isSuccess && (
          <div className=" flex flex-col items-center justify-center gap-3 min-[900px]:flex-row min-[900px]:items-start min-[900px]:gap-12">
            <img
              src={movie.data?.poster_path ? posterUrl : placeholder}
              alt={title}
              className=" w-full max-w-[400px]"
            />

            <div className=" flex flex-col items-center min-[900px]:items-start min-[900px]:gap-5 lg:min-w-[500px] max-w-[700px]">
              <h1 className=" text-2xl font-bold min-[900px]:text-3xl">
                {title}
              </h1>
              <p className=" hidden min-[900px]:block">{overview}</p>
            </div>
          </div>
        )}

        {movie.error && (
          <div className=" min-h-[500px] flex items-center justify-center">
            <span className=" text-2xl text-red-500 font-bold">
              {movie.error.message}
            </span>
          </div>
        )}
      </div>
    </main>
  );
};
