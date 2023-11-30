import React from 'react';
import styles from "./BottomSection.module.sass"
import logo from "./../../assets/img/logo.png"
import {scrollToElement} from "../../scroll";
import {useNavigate} from "react-router-dom";
import catalog from '../../assets/catalog.pdf';


export const BottomSection = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.bottomSection}>
            <div className={styles.bottomSection__column}>
                <img className={styles.bottomSection__logo} src={logo}  onClick={()=>navigate('/')} alt={"logo"}/>
                <span className={styles.bottomSection__text} >Одни из первых на рынке водоотведения</span>
            </div>
            <div
                className={styles.bottomSection__column__about}
                onClick={() => document.location.href = 'tel:+79172376520'}
            >
                <span className={styles.bottomSection__sp}>Получить консультацию <br className={styles.break_1}/> вы можете<br className={styles.break_2}/> по телефону <span className={styles.bottomSection__pn}> <b>+7 960 030 19 52</b></span></span>
                <span className={styles.bottomSection__column__aboutText}>ПОЗВОНИТЬ</span>
            </div>
            <div
                className={styles.bottomSection__column__buy}
                onClick={() => {
                    if(window.location.href.toString().split(window.location.host)[1]==='/') {
                        scrollToElement('catalogSectionStart')
                    }else {
                        navigate("/#catalogSectionStart")
                    }
                }}
            >
                <span  className={styles.bottomSection__column__buyText}>КУПИТЬ</span>
            </div>
            <div className={styles.bottomSection__column__last}>
              <span className={styles.bottomSection__column__textBlock}>Компания "ПромКомСнаб" гарантирует высокое качество и надёжность продукции и отказываемых услуг. Мы стремимся предложить оптимальные цены и достичь превосходных результатов в нашей работе, а доверие клиентов и долгосрочные партнерские отношения являются для нас ценнейшей наградой.</span>
              <div
                className={styles.bottomSection__column__last__download}
                onClick={() => window.open(catalog, '_blank')}
              >
                <span  className={styles.bottomSection__column__buyText}>СКАЧАТЬ КАТОЛОГ</span>
              </div>
            </div>
        </div>
    );
};

