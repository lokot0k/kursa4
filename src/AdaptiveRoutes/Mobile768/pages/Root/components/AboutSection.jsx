import styles from '../../../styles/Root/AboutSection.module.sass';

import img1 from '../../../../../assets/img/RECT36.png';
import img2 from '../../../../../assets/img/RECT40.png';
import img3 from '../../../../../assets/img/RECT39.png';
import img4 from '../../../../../assets/img/RECT41.png';
import img5 from '../../../../../assets/img/img_49.png';
import grad1 from '../../../../../assets/img/Mask group (3).svg';
import grad2 from '../../../../../assets/img/grad.svg';

import video1 from '../../../../../assets/video/column_1.mp4';
import video2 from '../../../../../assets/video/column_2.mp4';
import React from 'react';

export default function AboutSection() {
  return (
    <>
      <div
        id="aboutSectionStart"
        className={styles.aboutSection__briefDescription}
      >
        <span>О НАС</span><br/><br/>
        <span>
                    ПромКомСнаб предлагает широкий ассортимент продукции для организации систем поверхностного водоотведения
                </span>
      </div>
      <h1 className={styles.aboutSection__header}>Наши конкурентные преиммущества</h1>
      <div className={styles.aboutSection__columnBlock}>
        <div className={styles.aboutSection__column}>
          <img className={`${styles.aboutSection__img} ${styles.aboutSection__offsetLeftImg}`} src={img1}></img>
          <div className={styles.aboutSection__blockWrapper}>
            <h1 className={styles.aboutSection__subHeader}>Николаева Ольга — основатель и директор компании
              «ПромКомСнаб»</h1>
            <hr/>
            <div className={styles.aboutSection__textBlock}>
              <p>
                Моим главным принципом в работе является ответственный и грамотный подход, надежность и качество
                производимых работ.
                <br/>
                <br/>
                Более 15 лет мы с командой воплощаем в жизнь идею о чистых и ухоженных улицах без луж и городских
                затоплений после проливных дождей.
                <br/>
                <br/>
                Основными направлениями деятельности нашей компании являются: поставка лотков из высокопрочного бетона,
                полимербетона и морозостойкого пластика; изделий из высокопрочного чугуна для систем ливневого
                водоотвода (решетки, дождеприемники, люки); поставка межпутевых дренажных лотков серии МПЛ; внутренний
                дренаж из нержавеющей стали; поставка промышленных настилов и ступеней из оцинкованной стали;
                изготовление и монтаж металлоконструкций, ограждений любой сложности.
                <br/>
                <br/>
                Мы реализовали огромное количество важнейших объектов в г. Казань, г. Москва, а также по всей России.
              </p>
            </div>
          </div>
          <video className={styles.aboutSection__video1} src={video1} autoPlay loop muted playsInline></video>
          <img className={styles.aboutSection__img} src={img2}></img>
          <img style={{flexGrow: 3}} className={styles.aboutSection__img} src={grad1}></img>
        </div>
        <div className={styles.aboutSection__column}>
          <img className={`${styles.aboutSection__img} ${styles.aboutSection__offsetRightImg}`} src={grad2}></img>
          <div className={styles.aboutSection__blockWrapper}>
            <div className={styles.aboutSection__textBlock}>
              <p>
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
                <br/><br/>
                Профессиональный штат сотрудников.
                <br/><br/>

                Мы работаем с каждым клиентом по индивидуальному плану: проектирование, изготовление, поставка и
                предоставление всех необходимых консультаций по вопросам монтажа систем поверхностного водоотведения.
              </p>
            </div>
          </div>
          <video className={styles.aboutSection__video2} src={video2} autoPlay loop muted playsInline></video>
          <div className={styles.aboutSection__blockWrapper}>
            <h1 className={styles.aboutSection__subHeader}>Как правильно подобрать водоотводные лотки и разработать
              эффективную систему поверхностного водоотведения?</h1>
            <hr/>
            <div className={styles.aboutSection__textBlock}>
              <p>
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
              </p>
            </div>
          </div>
          <img className={styles.aboutSection__img} src={img3}></img>
          <img className={styles.aboutSection__img} src={img4}></img>
        </div>
      </div>
      <img className={styles.aboutSection__img} src={img5}></img>
    </>
  );
}
