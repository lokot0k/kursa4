import React, {useState} from 'react';
import styles from './CarouselSection.module.sass';
import {Product} from './components/Product';
import {Product2} from './components/Product2';
import group2 from '../../assets/img/Group 2.png';
import ceaser from '../../assets/img/ceaser.png';

import Carousel from './components/Carousel';
import {list} from './components/CarouselList';
import TopSection from '../../AdaptiveRoutes/Mobile390/pages/Root/components/TopSection';
import buttonImage from '../../assets/img/Group 19.png';


export const CarouselSection = () => {
  const [move, setMove] = useState(0);

  return (
    <div className={styles.CarouselSection}>
      <div className={styles.CarouselSection__text}>
              <span className={styles.CarouselSection__text__header__wrapper}>
                <span className={styles.CarouselSection__text__header}>Лучшее качество <br/> Оптимальные цены</span>
              </span>
        <span className={styles.CarouselSection__text__plaintext}>Компания «ПромКомСнаб» работает в сфере проектирования и поставок систем поверхностного водоотведения. Мы предоставляем комплексные решения задач по организации сбора и отвода ливневых и талых вод, а именно проектирование, поставка и шеф-монтаж систем поверхностного водоотвода.</span>
      </div>
      <div className={styles.topSection__portfolioWrap}>
        {/* <div className={styles.topSection__workWrap1}>
                    <div className={styles.topSection__work11}>
                        <span>Мечеть Ахмадзаки</span>Пластиковый сток
                    </div>
                    <div className={styles.topSection__subWrap1}>
                        <div className={styles.topSection__work12}>
                            <span></span>
                            <span>Убежденность<br />оппонентов</span>
                        </div>
                        <div className={styles.topSection__work13}>
                            <span></span>
                            <span>Убежденность<br />оппонентов</span>
                        </div>
                    </div>
                </div>
                <div className={styles.topSection__workWrap2}>
                    <div className={styles.topSection__work21}>
                        <span className={styles.topSection__nextButton}></span>
                        Смотреть<br />далее
                    </div>
                </div> */}
        <Carousel items={list} move={move}/>
      </div>
    </div>
  );
};
