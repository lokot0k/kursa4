import React, {useState, useEffect} from 'react';
import styles from '../../../styles/Root/Slider.module.sass';
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

export const Slider = ({slides}) => {
  return (
    <div className={styles.sliderWrap}>
      <MDBCarousel showIndicators touch={false} pause={undefined} interval={5000} onMouseEnter={() => {
      }}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={slides[0]}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={slides[1]}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={slides[2]}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src={slides[3]}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
};
