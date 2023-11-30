import React, { useRef } from 'react';
import styles from "./SliderSection.module.sass"
import {Slider} from "./components/slider/Slider";
import {slides} from "./components/slider/SliderArray";
import {useNavigate} from "react-router-dom";
import {scrollToElement} from '../../scroll'


export const SliderSection = () => {
    return (
        <div className={styles.sectionSlider}>
            <Slider slides={slides}/>
            <div className={styles.sectionSlider__buttons}>
                <button className={styles.sectionSlider__button__about} onClick={() => document.location.href = 'tel:+79172376520'}><span className={styles.sectionSlider__buttons__sp}>Получить консультацию вы можете по телефону <span className={styles.sectionSlider__buttons__pn}>+7 917 237 65 20</span></span>
                    <span className={styles.sectionSlider__buttons__textAbout}>ПОЗВОНИТЬ</span></button>
                <button className={styles.sectionSlider__button__buy} onClick={() => scrollToElement('catalogSection')}><span className={styles.sectionSlider__buttons__textBuy}>КУПИТЬ</span></button>
            </div>
        </div>
    );
};
