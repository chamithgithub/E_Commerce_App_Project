import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";

const Product = ({ title, rowsCount }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        Pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <div className="w-full">
    <img
      src={imageUrl}
      alt={`product_unit_${id}`}
      className="w-full object-contain"
    />
    <h3>{productTitle}</h3>
    <h3>{price}</h3>
  </div>
);
