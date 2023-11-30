import React from 'react';
import styles from "./LetterSection.module.sass"
import letter1 from "../../assets/img/letter (1).png"
import letter2 from "../../assets/img/letter (2).png"
import letter3 from "../../assets/img/letter (3).png"
import letter4 from "../../assets/img/letter (4).png"

export const LetterSection = () => {
    return (
        <div className={styles.LetterSection}>
            <h1 className={styles.LetterSection__header}>БЛАГОДАРСТВЕННЫЕ ПИСЬМА</h1>
            <div className={styles.LetterSection__letters__wrap}>
                <img className={styles.LetterSection__img} src={letter1} alt=""/>
                <img className={styles.LetterSection__img} src={letter2} alt=""/>
                <img className={styles.LetterSection__img} src={letter3} alt=""/>
                <img className={styles.LetterSection__img} src={letter4} alt=""/>
            </div>
            <div className={styles.LetterSection__letters__textWrap}>
                <span className={styles.LetterSection__letters__text}>
                  Успех нашей компании во многом объясняется тем, что мы придерживаемся принципа открытости и честности по отношению к своим клиентам и партнерам.
<br/>
<br/>

Мы не гонимся за сиюминутной выгодой, предпочитая строить прочные, надежные и взаимовыгодные отношения!
            </span>
            </div>
        </div>
    );
};
