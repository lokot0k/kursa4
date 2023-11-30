import styles from '../../../styles/Root/OurWorkSection.module.sass';

import img1 from '../../../../../assets/img/mechet.png';
import img2 from '../../../../../assets/img/about_2.png';

import video from '../../../../../assets/video/column_2.mp4';
import React from 'react';

export default function OurWorkSection() {
  return (
    <>
      <h1 className={styles.ourWorkSection__header}><span>Наши</span><br/>работы</h1>
      <div className={styles.ourWorkSection__columnBlock}>
        <div className={styles.ourWorkSection__column}>
          <img className={`${styles.ourWorkSection__img} ${styles.ourWorkSection__offsetImg}`} src={img1}></img>
          <div className={styles.ourWorkSection__blockWrapper}>
            <h1 className={styles.ourWorkSection__subHeader}>Мечеть Ахмадзаки, г.Казань</h1>
            <br/>
            <hr/>
            <br/>
            <div className={styles.ourWorkSection__textBlock}>
              <p>
                Нами было осуществлено проектирование и поставка системы поверхностного водоотведения. В соответствие с
                сложным рельефом местности были подобраны необходимые водоотводные лотки. Также было разработано
                проектное решение по ограждению территории мечети, стояла задача создать оригинальный и неповторимый
                дизайн. В соответствие с проектом ограждения были изготовлены и смонтированы.
                <br/>
                <br/>
                Мы выражаем благодарность за предоставленную нам возможность принять участие в таком масштабном и
                знаковом объекте нашего города.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ourWorkSection__column}>
          <img className={styles.ourWorkSection__img} src={img2}></img>
          <div className={styles.ourWorkSection__blockWrapper}>
            <h1 className={styles.ourWorkSection__subHeader}>Набережная Марка Шагала, г.Москва</h1>
            <br/>
            <hr/>
            <br/>
            <div className={styles.ourWorkSection__textBlock}>
              <p>
                Идея создания набережной Марка Шагала родилась на стыке двух больших проектов: строительства жилого комплекса бизнес-класса «ЗИЛАРТ» и программы благоустройства набережных Москвы-реки.
                <br/>
                <br/>
                В 2019 году наша компания принимала участие в строительстве данного объекта. Нами был разработан проект поверхностного водоотведения с использованием лотков серии MAXI с внутренним уклоном.
                <br/>
                <br/>
                Лотки были изготовлены и поставлены на объект в кратчайшие сроки. Также был произведен шеф-монтаж водоотводных лотков на объекте, оказаны профессиональные консультации и предоставлена проектная поддержка.
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.youtube.com/embed/AIgLZ2fIfZE"
              className={styles.ourWorkSection__video}
              title="О компании ООО &quot;Промкомснаб&quot;" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen/>
      <div className={styles.ourWorkSection__textBlock}>
      </div>
      <br/>
      <h1 className={styles.ourWorkSection__subHeader}>Качество, которому доверились уже более 200 крупных компаний</h1>
    </>
  );
}
