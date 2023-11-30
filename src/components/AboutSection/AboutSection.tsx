import React from 'react';
import styles from "./AboutSection.module.sass"
import img49 from "../../assets/img/img_49.png"
import { Column1 } from "./components/Column_1";
import { Column2 } from "./components/Column_2";
import grad from "../../assets/img/grad.svg";

import LowerTable from './components/LowerTable';

export const AboutSection = () => {
    return (
        <div id={'aboutSection'} className={styles.sectionAbout}>
            <img className={styles.sectionAbout__content__img__absolute} src={grad} alt="" />
            <div className={styles.sectionAbout__textWrap}>
                <span className={styles.sectionAbout__header}>О НАС</span>
                <span className={styles.sectionAbout__headerText}>ПромКомСнаб предлагает широкий ассортимент продукции <br /> для организации систем поверхностного <br /> водоотведения</span>
            </div>
            <div className={styles.sectionAbout__content}>
                <h1 className={styles.sectionAbout__content__header}>Наши конкурентные <br /> преимущества</h1>
                <div className={styles.sectionAbout__contentWrap}>
                    <Column1></Column1>
                    <Column2></Column2>
                </div>
                <LowerTable />
            </div>
        </div>
    );
};

