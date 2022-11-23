import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import {PhotoView} from 'react-photo-view'

const PreviewsWorkSlider = ({previousWork}) => {
    const {image, name} = previousWork;
    return (
      <SplideSlide data-splide-interval="1000">
        <div>
          <PhotoView src={image}>
            <img src={image} style={{ height: "100%" }} alt="" />
          </PhotoView>
        </div>
      </SplideSlide>
    );
};

export default PreviewsWorkSlider;