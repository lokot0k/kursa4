import React from 'react';
import styles from '../AboutSection.module.sass';
import RECT36 from '../../../assets/img/RECT36.png';
import line from '../../../assets/img/Line 29.png';
import rectangle38 from '../../../assets/img/Rectangle 38.png';
import RECT40 from '../../../assets/img/RECT40.png';
import {Video} from './Video';

import video1 from '../../../assets/video/column_1.mp4';

export const Column1 = () => {
  return (
    <div className={styles.sectionAbout__content__column1Wrap}>
      <div className={styles.sectionAbout__column1}>
        <img className={styles.sectionAbout__content__img1} src={RECT36} alt=""/>
        <span className={styles.sectionAbout__text__3}>
          Николаева Ольга — основатель и директор компании
          <br/>
          «ПромКомСнаб»
        </span>
        <img className={styles.line} src={line} alt=""/>
        <span className={styles.sectionAbout__text__1}>
          Моим главным принципом в работе является ответственный и грамотный подход, надежность и качество производимых работ.
          <br/>
          <br/>
          Более 15 лет мы с командой воплощаем в жизнь идею о чистых и ухоженных улицах без луж и городских затоплений после проливных дождей.
          <br/>
          <br/>
          Основными направлениями деятельности нашей компании являются: поставка лотков из высокопрочного бетона, полимербетона и морозостойкого пластика; изделий из высокопрочного чугуна для систем ливневого водоотвода (решетки, дождеприемники, люки); поставка межпутевых дренажных лотков серии МПЛ; внутренний дренаж из нержавеющей стали; поставка промышленных настилов и ступеней из оцинкованной стали; изготовление и монтаж металлоконструкций, ограждений любой сложности.
          <br/>
          <br/>
          Мы реализовали огромное количество важнейших объектов в г. Казань, г. Москва, а также по всей России.
        </span>
      </div>
    </div>
  );
};

// <Video className={styles.sectionAbout__content__img} src={video1} />
// <img className={styles.sectionAbout__content__img} src={rectangle38} />
/*
    <Video
                        className={styles.sectionAbout__content__video}
                        src={video1}
                    />
*/
