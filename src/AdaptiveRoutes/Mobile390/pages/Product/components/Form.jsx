import styles from '../../../styles/Product/TopSection.module.sass';

import React, {useRef} from 'react';
import {useForm} from '../../../../../hooks/useForm';

export default function Form({category, product}) {
  const {nameChangeHandler, phoneChangeHandler, sendRequest, isError, isSuccess} = useForm(product?.id ?? 1);
  return (
    <div className={styles.topSection__form}>
      <span className={styles.productPage__block__textHeader}>{category?.name} <br/>{product?.name}</span>
      <span className={styles.productPage__block__textDescription}>{product?.description}</span>
      <div className={styles.productPage__block__formWrap}>
        <div className={styles.productPage__block__formElem}>
          <span className={styles.productPage__block__formText}>ВАШЕ ИМЯ</span>
          <label><input className={styles.productPage__block__input} type="text" onChange={nameChangeHandler}/></label>
        </div>
        <div className={styles.productPage__block__formElem}>
          <span className={styles.productPage__block__formText}>ВАШ ТЕЛЕФОН</span>
          <label><input className={styles.productPage__block__input} type="text" onChange={phoneChangeHandler}/></label>
        </div>
      </div>
      <button className={styles.productPage__block__button} onClick={sendRequest}><span
        className={styles.productPage__block__buttonText}>ЗАКАЗАТЬ ЗВОНОК</span></button>
      <button className={styles.productPage__block__button__blue}
              onClick={() => document.location.href = 'tel:+79172376520'}><span
        className={styles.productPage__block__buttonText}>ПОЗВОНИТЬ</span></button>
      {
        isSuccess && <span className={styles.productPage__block__response}>
          Заявка успешно создана
        </span>
      }
      {
        isError &&
        <span className={`${styles.productPage__block__response} ${styles.productPage__block__response_error}`}>
          Произошла какая-то ошибка
        </span>
      }
    </div>
  );
}
