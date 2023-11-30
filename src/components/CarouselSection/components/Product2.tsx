import React from 'react';
import styles from "./Product2.module.sass"
import arrow from "../../../assets/img/Arrow.png"
import circle from "../../../assets/img/Ellipse10.png"


export const Product2 = () => {
    return (
        <div className={styles.Product}>
            <span className={styles.Product__header}>Чугунный лоток</span>
            <span className={styles.Product__header}>Набережная Марка Шагала</span>
            <div className={styles.Product__elypse}>
                <img src={arrow} alt=""/>
            </div>
            <span className={styles.Product__textNext}>Смотреть <br/>далее</span>
        </div>
    );
};
