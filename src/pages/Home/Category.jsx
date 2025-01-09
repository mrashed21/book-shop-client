// import { Pagination } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Bt9Z6kq/Forest-Expeditions.jpg"
            alt=""
          />
          <h1 className="-mt-10 text-2xl font-semibold text-white text-center">
            Category 01
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Bt9Z6kq/Forest-Expeditions.jpg"
            alt=""
          />
          <h1 className="-mt-10 text-2xl font-semibold text-white text-center">
            Category 02
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Bt9Z6kq/Forest-Expeditions.jpg"
            alt=""
          />
          <h1 className="-mt-10 text-2xl font-semibold text-white text-center">
            Category 03
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Bt9Z6kq/Forest-Expeditions.jpg"
            alt=""
          />
          <h1 className="-mt-10 text-2xl font-semibold text-white text-center">
            Category 04
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Bt9Z6kq/Forest-Expeditions.jpg"
            alt=""
          />
          <h1 className="-mt-10 text-2xl font-semibold text-white text-center">
            Category 05
          </h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
