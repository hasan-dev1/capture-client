import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';

const HomeBanner = ({banner}) => {
    const {image, name, descryption} = banner;
    return (
      <SplideSlide>
        <div className="relative">
          <img
            className="imgContrust"
            src={image}
            style={{ width: "100%", minHeight: "640px", maxHeight: "840px" }}
            alt=""
          />
          <div
            style={{ zIndex: "1" }}
            className="absolute lg:top-2/3 md:top-2/3 top-1/2 lg:left-48 left-1/2 lg:-translate-x-0 -translate-x-[50%] lg:-translate-y-0 -translate-y-[50%] "
          >
            <h3 className="text-white lg:text-start text-center md:text-start font-bold text-6xl">
              {name}
            </h3>
            <p className="text-white lg:text-start text-center md:text-start font-bold text-xl my-4">
              {descryption}
            </p>
          </div>
        </div>
      </SplideSlide>
    );
};

export default HomeBanner;