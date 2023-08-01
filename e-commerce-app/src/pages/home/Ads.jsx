import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const adsElement = [
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
  },
];

const Ads = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {adsElement.map(({ imageUrl }, index) => (
          <SwiperSlide>
            <AdUnit key={index} imageUrl={imageUrl} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Ads;

const AdUnit = ({ imageUrl, id }) => (
  <SwiperSlide>
    <img
      src={imageUrl}
      alt={`ad${id}`}
      className="w-full object-contain rounded-lg"
    />
  </SwiperSlide>
);
