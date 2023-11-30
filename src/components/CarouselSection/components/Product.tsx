import React from 'react';
import styles from "./Product.module.sass"
import block from "../../../assets/img/Mask group.png"

export const Product = () => {
    return (
        <div className={styles.ProductWrap}>
            <div className={styles.Product}>
                <div className={styles.Product__imgWrap}>
                    <div className={styles.Product__img}></div>
                </div>
                <span className={styles.Product__header}>Мечеть Ахмадзаки</span>
                <span className={styles.Product__text}>Пластиковый сток</span>
            </div>
        </div>
    );
};

