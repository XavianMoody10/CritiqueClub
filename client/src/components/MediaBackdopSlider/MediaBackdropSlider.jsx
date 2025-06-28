import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { FiInfo as InfoIcon } from "react-icons/fi";
import { Autoplay } from "swiper/modules";

export const MediaBackdropSlider = ({ results, media_type }) => {
  const slides = results?.map((s) => {
    const backdropUrl = `https://image.tmdb.org/t/p/original/${s.backdrop_path}`;
    const title = s.name || s.title || s.orginal_title;
    const overview = s.overview;
    const mediaType = media_type || s.media_type;

    return (
      <SwiperSlide key={s.id}>
        <div
          className=" h-[700px] w-full bg-top bg-cover rounded-lg relative"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/55 flex items-end">
            <div className=" flex flex-col gap-5 ml-5 mb-5">
              <span className=" text-3xl text-white font-extrabold">
                {title}
              </span>

              <p className=" text-white  max-w-[450px] hidden sm:block">
                {overview}
              </p>

              <Link
                to={`/details/${mediaType}/${s.id}`}
                className=" w-fit border-2 border-white bg-white py-2 px-7 text-lg font-semibold rounded-sm hover:border-red-500 hover:bg-red-500 hover:text-white duration-150"
              >
                <div className=" flex items-center gap-2">
                  <InfoIcon size={25} />
                  <span>Details</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" min-h-[700px] w-full rounded-lg border">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
};
