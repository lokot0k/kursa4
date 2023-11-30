import callImg from '../../../assets/img/VectorImages/Frame 28.svg';
import React from 'react';
import styles from '../ProductPage.module.sass';
import frame from '../../../assets/img/Frame 12.png';
import {Category, FullProduct, Subcategory} from '../../../store/types';
import {useForm} from '../../../hooks/useForm';

export const Form = ({subcategory, product}: {
  subcategory: Subcategory | undefined,
  product: FullProduct | undefined
}) => {
  const {nameChangeHandler, phoneChangeHandler, sendRequest, isError, isSuccess} = useForm(product?.id ?? 1);
  return (
    <div className={styles.productPage__block__1}>
      <div className={styles.productPage__block1__textWrap}>
        <span className={styles.productPage__block__text}></span>
      </div>
      <div className={styles.productPage__block__descriptionBlock}>
        <div className={styles.productPage__block__textWrap}>
          <span className={styles.productPage__block__textHeader}>{subcategory?.name} <br/>{product?.name}</span>
          <img className={styles.productPage__block__img} src={frame} alt=""/>
        </div>
        <div className={styles.productPage__block__imgWrap}>
          <span className={styles.productPage__block__textDescription}>{product?.description}</span>
        </div>
      </div>
      <div className={styles.productPage__block__formWrap}>
        <div className={styles.productPage__block__formElem}>
          <span className={styles.productPage__block__formText}>ВАШЕ ИМЯ</span>
          <label><input className={styles.productPage__block__input} onChange={nameChangeHandler} type="text"/></label>
        </div>
        <div className={styles.productPage__block__formElem}>
          <span className={styles.productPage__block__formText}>ВАШ ТЕЛЕФОН</span>
          <label><input className={styles.productPage__block__input} onChange={phoneChangeHandler} type="text"/></label>
        </div>
      </div>
      <div className={styles.productPage__block__buttonBlock}>
        <button className={styles.productPage__block__button} onClick={sendRequest}><span
          className={styles.productPage__block__buttonText}>ЗАКАЗАТЬ ЗВОНОК</span>
        </button>
        <button
          className={styles.productPage__block__callButton}
        >
          +7 960 030 19 52
        </button>
      </div>
      {
        isSuccess && <span className={styles.productPage__block__response}>
          Заявка успешно создана
        </span>
      }
      {
        isError && <span className={`${styles.productPage__block__response} ${styles.productPage__block__response_error}`}>
          Произошла какая-то ошибка
        </span>
      }
    </div>
  );
};
