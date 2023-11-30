import styles from '../AboutSection.module.sass';

import RECT39 from '../../../assets/img/RECT39.png';
import RECT41 from '../../../assets/img/RECT41.png';
import video1 from '../../../assets/video/column_1.mp4';
import RECT40 from '../../../assets/img/RECT40.png';
import gradient from '../../../assets/img/Mask group (3).svg';
import img49 from '../../../assets/img/img_49.png';
import React from 'react';

export default function LowerTable() {
  return (
    <div className={styles.sectionAbout__content__lowerTableWrap}>
      <div className={styles.sectionAbout__content__InnerColumn1}>
        <div className={styles.sectionAbout__content__imgWrap}>
          <video className={styles.sectionAbout__content__video1} src={video1} autoPlay loop muted/>
        </div>
        <div className={styles.sectionAbout__content__imgWrap2}>
          <img className={styles.sectionAbout__content__img} src={RECT40} alt=""/>
        </div>
      </div>

      <div className={styles.sectionAbout__content__InnerColumn2}>
        <span className={styles.sectionAbout__text__4}>
          Работа по подбору лотков и разработке эффективной системы водоотведения состоит из нескольких этапов . Первоочерёдно мы осуществляем проектирование, согласно техническому заданию заказчика. Наши лучшие проектировщики прорабатывают каждую деталь.
          <br/>
          <br/>
          В процессе проектирования систем водоотведения изучается рельеф территории, где должна быть установлена система, подготавливается вертикальная планировка и осуществляется гидравлический расчет. В соответствии с рассчитанными параметрами подбираются необходимые лотки. Наша задача - чтобы система водоотведения была функциональной и результативно работала.
          <br/>
          <br/>
          Далее производится изготовление продукции по согласованному проекту. Мы производим как стандартные изделия, так и на заказ по индивидуальным параметрам.
          <br/>
          <br/>
          Наша компания ответственно подходит к каждому клиенту и поставленной задаче, осуществляет поставку и монтаж изделий строго в установленные сроки.
          <br/>
          <br/>
          Важнейшим пунктом нашей работы является контроль на всех этапах работы.
        </span>
        <div className={styles.sectionAbout__content__imgWrap3}>
          <img className={styles.sectionAbout__content__img39} src={RECT39} alt=""/>
          <div className={styles.sectionAbout__content__imgWrap4}>
            <img className={styles.sectionAbout__content__imgGradient} src={gradient} alt=""/>
            <img className={styles.sectionAbout__content__imgRECT41} src={RECT41} alt=""/>
          </div>
        </div>
      </div>

      <div className={styles.sectionAbout__content__bottomCell}>
        <img className={styles.sectionAbout__content__img49} src={img49} alt=""/>
      </div>
    </div>
  );
}
