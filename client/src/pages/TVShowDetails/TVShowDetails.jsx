import { useQuery } from "@tanstack/react-query";
import { getShowDetailsRequest } from "../../services/shows.services";
import { useParams } from "react-router-dom";

export const TVShowDetails = () => {
  const { mediaId } = useParams();

  const show = useQuery({
    queryKey: ["show", mediaId],
    queryFn: () => getShowDetailsRequest(mediaId),
    retry: false,
  });

  const posterUrl = `https://image.tmdb.org/t/p/original/${show.data?.poster_path}`;
  const placeholder = "https://placehold.co/600x900";
  const title = show.data?.name || show.data?.title || show.data?.orginal_name;
  const overview = show.data?.overview;

  return (
    <main className=" bg-[#eaeaea] min-h-screen pt-14">
      <div className=" w-[90%] max-w-[1500px] mx-auto">
        <section className=" flex flex-col items-center justify-center gap-3 min-[900px]:flex-row min-[900px]:items-start min-[900px]:gap-12">
          <img
            src={show.data?.poster_path ? posterUrl : placeholder}
            alt={title}
            className=" w-full max-w-[400px]"
          />

          <div className=" flex flex-col items-center min-[900px]:items-start min-[900px]:gap-5 lg:min-w-[500px] max-w-[700px]">
            <h1 className=" text-2xl font-bold min-[900px]:text-3xl">
              {title}
            </h1>
            <p className=" hidden min-[900px]:block">{overview}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
