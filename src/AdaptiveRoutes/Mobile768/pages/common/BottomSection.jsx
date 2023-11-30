import styles from '../../styles/common/BottomSection.module.sass';

import logo from '../../../../assets/img/logo.png';
import {scrollToElement} from '../../../../scroll';
import {useNavigate} from 'react-router-dom';
import catalog from '../../../../assets/catalog.pdf';

export default function BottomSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.bottomSection__topWrap}>
        <img className={styles.bottomSection__logo} onClick={() => navigate('/')} src={logo}></img>
        <h1 className={styles.bottomSection__header}>Одни из первых на рынке водоотведения</h1>
      </div>
      <div className={styles.bottomSection__controlsWrap}>
        <div className={styles.bottomSection__contactButton}
             onClick={() => document.location.href = 'tel:+79172376520'}>
          <span>Получить консультацию вы можете по телефону<br/><b>+7 917 23 765 20</b></span>
          <span>ПОЗВОНИТЬ</span>
        </div>
        <div className={styles.bottomSection__purchaseButton}
             onClick={() => {
               if (window.location.href.toString().split(window.location.host)[1] === '/') {
                 scrollToElement('catalogSectionStart');
               } else {
                 navigate('/#catalogSectionStart');
               }
             }}>
          <span>КУПИТЬ</span>
        </div>
      </div>
      <div
        className={styles.bottomSection__download}
        onClick={() => window.open(catalog, '_blank')}
      >
        <span>СКАЧАТЬ КАТАЛОГ</span>
      </div>
      <div className={styles.bottomSection__textBlock}>
        <p>Компания "ПромКомСнаб" гарантирует высокое качество и надёжность продукции и отказываемых услуг. Мы стремимся
          предложить оптимальные цены и достичь превосходных результатов в нашей работе, а доверие клиентов и
          долгосрочные партнерские отношения являются для нас ценнейшей наградой.</p></div>
    </>
  );
}
