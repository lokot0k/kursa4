import styles from './AdaptiveNavbar.module.css'
import {useNavigate} from 'react-router-dom';
import {Category, Product} from '../../../store/types';
import bubble from '../../../assets/img/bubble.png'
import logo from "../../../assets/img/logo.png";
import React from "react";

export const AdaptiveNavbar = ({category, product} : {category?: Category, product?: Product}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.wrapper} ${product ? styles.wrapper_91 : styles.wrapper_90}`}>
      <div className={`${styles.adaptiveNavbar__container} ${!product && styles.adaptiveNavbar__container_min}`}>
        <button onClick={() => {
            product ? navigate(`/category/${category?.id}/#subcategory${product.subcategoryId}`) : navigate('/#catalogSectionStart')
        }
        } className={styles.adaptiveNavbar__backButton}>
          Назад
        </button>
        <img src={bubble} className={product ? styles.adaptiveNavbar__mergeFigure_vert : styles.adaptiveNavbar__mergeFigure}/>
        <span className={styles.adaptiveNavbar__curRoute}>
          { category?.name }{ product && ` / ${product?.name}` }
        </span>
      </div>
        <div className={`${styles.logo} ${product && styles.logo_product}`}>
            <img className={styles.logo_style} onClick={() => navigate('/')} src={logo}></img>
        </div>
    </div>
    </>
  )
}
