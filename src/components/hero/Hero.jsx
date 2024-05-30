import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/images/hero__image1.png";
import image2 from "../../assets/images/hero__image2.png";
import image3 from "../../assets/images/hero__image3.png";
import image4 from "../../assets/images/hero__image4.png";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const cards = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const Hero = () => {
  return (
    <section>
      <div className="container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {cards.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.image} alt={`Slide ${el.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
