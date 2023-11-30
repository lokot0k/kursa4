import { useState } from "react";
import { Slider } from "./Slider";
import { sliderImageList } from "../../../utils/SliderImageList";
import styles from "../../../styles/Root/TopSection.module.sass";
import { scrollToElement } from '../../../../../scroll'
import Carousel from "./Carousel";
import { list } from "../../../utils/CarouselList";

// images
import whatsappIcon from '../../../../../assets/img/whatsapp.png';
import instagramIcon from '../../../../../assets/img/instagram.png';

export default function TopSection() {
    const [move, setMove] = useState(0);

    return (
        <>
            <Slider slides={sliderImageList} />
            <div className={styles.topSection__controlsWrap}>
                <div
                    className={styles.topSection__contactButton}
                    onClick={() => document.location.href = 'tel:+79172376520'}
                >
                    <span>Получить консультацию вы можете по телефону<br /> <b>+7 960 030 19 52</b></span>
                    <span>ПОЗВОНИТЬ</span>
                </div>
                <div
                    className={styles.topSection__purchaseButton}
                    onClick={() => scrollToElement("catalogSectionStart")}
                >
                    <span>КУПИТЬ</span>
                </div>
            </div>
            <div className={styles.topSection__contacts}>
                <p>Казань, ул.Летова, д.17  </p>
                <p>+7 917 237 65 20</p>
                <div>
                    <a href={"https://t.me/promkomsnab"} target={"_blank"}><img src={whatsappIcon} /></a>
                    <a href='https://www.instagram.com/promkomsnab.ru/' target='_blank'><img src={instagramIcon} /></a>
                </div>
                <p>abcdef@gmail.com</p>
            </div>
            <div className={styles.topSection__descriptionWrap}>
                <span>
                    Лучшее качество <br /> Оптимальные цены
                </span>
                <span>
                    Компания «ПромКомСнаб» работает в сфере проектирования и поставок систем поверхностного водоотведения. Мы предоставляем комплексные решения задач по организации сбора и отвода ливневых и талых вод, а именно проектирование, поставка и шеф-монтаж систем поверхностного водоотвода.</span>
            </div>
            <div className={styles.topSection__portfolioWrap}>
                {/* <div className={styles.topSection__workWrap1}>
                    <div className={styles.topSection__work11}>
                        <span>Мечеть Ахмадзаки</span>Пластиковый сток
                    </div>
                    <div className={styles.topSection__subWrap1}>
                        <div className={styles.topSection__work12}>
                            <span></span>
                            <span>Убежденность<br />оппонентов</span>
                        </div>
                        <div className={styles.topSection__work13}>
                            <span></span>
                            <span>Убежденность<br />оппонентов</span>
                        </div>
                    </div>
                </div> */}
                {/* <div className={styles.topSection__workWrap2}>
                    <div className={styles.topSection__work21}>
                        <span className={styles.topSection__nextButton}></span>
                        Смотреть<br />далее
                    </div>
                    <div className={styles.topSection__work22}>
                        <span></span>
                    </div>
                    <div className={styles.topSection__work23}>
                        <span></span>
                    </div>
                </div> */}
                <Carousel items={list} move={move} />
                <div className={styles.topSection__nextButtonBlock}>
                    <button
                        className={styles.topSection__nextButton}
                        onClick={() => {
                            setMove(1);
                            setTimeout(() => setMove(0), 1);
                        }}
                    ></button>
                    <span>Смотреть далее</span>
                </div>
            </div>
        </>
    );
}
