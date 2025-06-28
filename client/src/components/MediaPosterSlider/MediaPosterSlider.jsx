import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowAltCircleRight as ArrowIcon } from "react-icons/fa";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";

export const MediaPosterSlider = ({ results, error }) => {
  const slides = results?.map((s) => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${s.poster_path}`;
    const placeholder = "https://placehold.co/600x900";
    const title = s.name || s.title || s.orginal_title;

    return (
      <SwiperSlide>
        <div className=" relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className=" absolute top-0 left-0 right-0 bottom-0 bg-black/80 flex items-center justify-center"
          >
            <Link to={""} className=" flex flex-col gap-2 items-center text-xl">
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
      </SwiperSlide>
    );
  });

  return (
    <div className=" min-h-[250px] relative">
      {error && (
        <div className=" h-[250px] flex flex-col items-center justify-center gap-6">
          <span className=" text-xl text-red-500 font-bold">
            {error.message}
          </span>

          <ErrorIcon className=" text-red-500" size={60} />
        </div>
      )}

      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          500: {
            slidesPerView: 2.3,
          },
          800: {
            slidesPerView: 3.3,
          },
          1024: {
            slidesPerView: 4.3,
          },
          1400: {
            slidesPerView: 5.3,
          },
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
};
