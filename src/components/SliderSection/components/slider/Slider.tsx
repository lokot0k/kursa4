import React, {useState, useEffect} from 'react';
import styles from './Slider.module.sass';
import icon2 from '../../../../assets/img/instagram.png'
import icon1 from '../../../../assets/img/whatsapp.png'
import exp from 'constants';
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

interface Slide {
    backgroundImage: string;
}

interface Props {
    slides: Slide[];
}

// @ts-ignore
export const Slider = ({slides}) => {
    return (
        <div className={styles.sliderWrap}>
            {/* @ts-ignore */}
            <MDBCarousel showIndicators touch={false} pause={undefined} interval={5000} onMouseEnter={() => {
            }}>
                <MDBCarouselItem
                    // @ts-ignore
                    pause={undefined}
                    className='w-100 d-block'
                    itemId={1}
                    src={slides[0].backgroundImage}
                    alt='...'
                />
                <MDBCarouselItem
                    // @ts-ignore
                    pause={undefined}
                    className='w-100 d-block'
                    itemId={2}
                    src={slides[1].backgroundImage}
                    alt='...'
                />
                <MDBCarouselItem
                    // @ts-ignore
                    pause={undefined}
                    className='w-100 d-block'
                    itemId={3}
                    src={slides[2].backgroundImage}
                    alt='...'
                />
                <MDBCarouselItem
                    // @ts-ignore
                    pause={undefined}
                    className='w-100 d-block'
                    itemId={4}
                    src={slides[3].backgroundImage}
                    alt='...'
                />
            </MDBCarousel>
            <div className={styles.contacts}>
                <p>Казань, ул.Летова, д.17</p>
                <p>+7 917 237 65 20</p>
                <div className={styles.icons}>
                    <a href={"https://t.me/promkomsnab"} target={"_blank"}>
                        <img style={{width: "40px", height: "40px", marginTop: "-9px"}} src={icon1}></img>
                    </a>
                    <a href={"https://www.instagram.com/promkomsnab.ru/"} target={"_blank"}>
                        <img style={{width: "40px", height: "40px", marginTop: "-9px", marginLeft:"10px"}} src={icon2}></img>
                    </a>
                </div>
                <p>abcdef@gmail.com</p>
            </div>
        </div>
    )
};
