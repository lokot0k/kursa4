import React from 'react';
import styles from '../AboutSection.module.sass';
import line from '../../../assets/img/Line 29.png';
import video1 from '../../../assets/video/column_2.mp4';

export const Column2 = () => {
  return (
    <div className={styles.sectionAbout__content__column2Wrap}>
      <div className={styles.sectionAbout__column2}>
        <span className={styles.sectionAbout__text__2}>
          Лучшее качество продукции.
          <br/>
          <br/>
          Быстрая обработка и доставка заказов – вам не придется долго ждать.
          <br/>
          <br/>
          Гарантия и надежность.
          <br/>
          <br/>
          Использование современных технологий.
          <br/>
          <br/>
          Профессиональный штат сотрудников.
          <br/>
          <br/>
          Мы работаем с каждым клиентом по индивидуальному плану: проектирование, изготовление, поставка и предоставление всех необходимых консультаций по вопросам монтажа систем поверхностного водоотведения.
        </span>
        <div className={styles.sectionAbout__content__wrap2}>
          <div className={styles.sectionAbout__content__img37Wrap}>
            <video className={styles.sectionAbout__content__video2} src={video1} autoPlay loop muted/>
          </div>
          <div>
            <span className={styles.sectionAbout__text__5}>Как правильно подобрать водоотводные лотки и разработать эффективную систему поверхностного водоотведения?</span>
            <img className={styles.line2} src={line} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
