import { useMutation, useQuery } from "@tanstack/react-query";
import { getMovieDetailsRequest } from "../../services/movies.services";
import { useParams } from "react-router-dom";
import {
  getMediaReviewsRequest,
  postMediaReviewsRequest,
} from "../../services/reviews.services";
import { IoStarSharp as StarIcon } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { queryClient } from "../../App";
import { useState } from "react";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";

export const MovieDetails = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { mediaId } = useParams();

  const movie = useQuery({
    queryKey: ["movies", mediaId],
    queryFn: () => getMovieDetailsRequest(mediaId),
    retry: false,
  });

  const reviews = useQuery({
    queryKey: ["reviews", mediaId],
    queryFn: () => getMediaReviewsRequest(mediaId),
    retry: false,
  });

  const postReview = useMutation({
    mutationFn: (variables) => postMediaReviewsRequest(variables),
    onSuccess: (data) => {
      setErrorMessage("");
      setRating(0);
      setReview("");
      queryClient.setQueryData(["reviews", mediaId], data);
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    postReview.mutate({ mediaId, review, rating });
  }

  const reviewCards = reviews.data?.reviews?.map((s) => {
    return (
      <div
        key={s._id}
        className=" bg-white h-[200px] w-full p-5 rounded-lg shadow-md space-y-4"
      >
        <div className=" flex items-center gap-1">
          <StarIcon color="#C99700" size={25} />
          <span className=" font-bold">{s.rating}</span>
        </div>
        <p>{s.review}</p>
      </div>
    );
  });

  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.data?.poster_path}`;
  const placeholder = "https://placehold.co/600x900";
  const title =
    movie.data?.name || movie.data?.title || movie.data?.orginal_name;
  const overview = movie.data?.overview;

  return (
    <main className=" bg-[#eaeaea] min-h-screen pt-14 space-y-16 pb-3">
      <section className=" w-[90%] max-w-[1500px] mx-auto">
        {movie.isSuccess && (
          <div className=" flex flex-col items-center justify-between gap-3 min-[900px]:flex-row min-[900px]:items-start min-[900px]:gap-12">
            <img
              src={movie.data?.poster_path ? posterUrl : placeholder}
              alt={title}
              className=" w-full max-w-[400px]"
            />

            <div className=" flex flex-col items-center min-[900px]:items-start min-[900px]:gap-5 lg:min-w-[500px]">
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
      </section>

      <section className=" w-[90%] max-w-[1500px] mx-auto space-y-3">
        <form className=" max-w-[400px] space-y-2" onSubmit={onSubmit}>
          {errorMessage && (
            <div className=" bg-red-500 text-center p-4 rounded-lg flex items-center justify-center gap-2">
              <span className=" text-white font-bold">{errorMessage}</span>
              <ErrorIcon size={30} color="white" />
            </div>
          )}

          <div className=" flex flex-col gap-2">
            <textarea
              name="review"
              id="review"
              rows={10}
              placeholder="Add review here"
              onChange={(e) => setReview(e.target.value)}
              value={review}
              className=" border border-gray-400 w-full resize-none p-3 rounded-md outline-none"
            />

            <Rating
              name="half-rating"
              size="large"
              defaultValue={0}
              value={rating}
              precision={0.5}
              sx={{
                color: "red",
              }}
              onChange={(e, v) => setRating(v)}
            />

            <button className=" border-2 border-red-500 py-2 px-7 text-lg text-red-600 font-semibold rounded-sm hover:bg-red-500 hover:text-white duration-150">
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className=" w-[90%] max-w-[1500px] mx-auto space-y-3">
        <h2 className=" text-3xl font-bold">Review</h2>

        {reviews.isSuccess && (
          <div className=" grid gap-5 justify-items-center min-[800px]:grid-cols-2 xl:grid-cols-3">
            {reviewCards}
          </div>
        )}

        {reviews.error && (
          <div className=" min-h-[300px] flex items-center justify-center">
            <span className=" text-2xl font-bold">{reviews.error.message}</span>
          </div>
        )}
      </section>
    </main>
  );
};
