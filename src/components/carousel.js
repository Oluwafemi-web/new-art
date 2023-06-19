import React, { useEffect, useRef, useState } from "react";
import { Controller } from "swiper";
import mobile1 from "../images/slide-mobile01.jpg";
import img1 from "../images/slide01.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "../css/style.css";

export default function Carousel() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  let direction = "veritcal";
  return (
    <header className="slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        direction={direction}
        loop={true}
        controller={{ control: controlledSwiper }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="slider-images swiper-container"
      >
        <SwiperSlide style={{ background: `url(img1)` }}>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
      </Swiper>
      #
      <Swiper
        // install Swiper modules
        modules={[Navigation, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSwiper={setControlledSwiper}
        onSlideChange={() => console.log("slide change")}
        className="slider-texts swiper-container"
      >
        <svg width={580} height={400} className="svg-morph">
          <path
            id="svg_morph"
            d="m261,30.4375c0,0 114,6 151,75c37,69 37,174 6,206.5625c-31,32.5625 -138,11.4375 -196,-19.5625c-58,-31 -86,-62 -90,-134.4375c12,-136.5625 92,-126.5625 129,-127.5625z"
          />
        </svg>

        <SwiperSlide>
          <div className="container-fluid">
            <h1>
              Museums and <br />
              Galleries
            </h1>
            <p>
              Explore hundreds of museums, galleries and historic <br />
              places across the UK.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid">
            <h1>
              Discover Our <br />
              History
            </h1>
            <p>
              Your support is vital and helps the Museum to share <br />
              the collection with the world.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid">
            <h1>
              The Art of <br />
              North Africa
            </h1>
            <p>
              Curator Peter Loovers explores the special relationship between
              <br />
              Arctic Peoples and 'man's best friend'.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="play-now">
        <a
          href="videos/video.mp4"
          data-fancybox
          data-width="640"
          data-height="360"
          className="play-btn"
        ></a>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text>
              <textPath xlinkHref="#circlePath">
                PLAY NOW - PLAY NOW - PLAY NOW -
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </header>
  );
}
