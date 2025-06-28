import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import GenreBackground from "../../assets/genrebg.jpg";

export const MediaGenresSlider = ({ genres, mediaType }) => {
  const slide = genres?.map((s) => {
    return (
      <SwiperSlide>
        <Link
          to={`/genre/${mediaType}/${s.id}`}
          className=" h-[120px] w-full border-2 flex items-center justify-center rounded-lg"
          style={{ backgroundImage: `url(${GenreBackground})` }}
        >
          <span className=" font-bold text-white text-lg sm:text-xl">
            {s.name}
          </span>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={1.2}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          500: {
            slidesPerView: 2.2,
          },
          800: {
            slidesPerView: 3.2,
          },
          1200: {
            slidesPerView: 4.2,
          },
        }}
      >
        {slide}
      </Swiper>
    </div>
  );
};
