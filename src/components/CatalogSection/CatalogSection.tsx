import React, {useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './CatalogSection.module.sass';
import elem3 from "../../assets/img/elem3.png"
import cn from 'classnames/bind';
import {useGetCategoriesQuery} from '../../store/services/categoriesApi';
import {BASE_URL} from '../../store/base';
import {scrollToElement} from "../../scroll";
import {mockCategory} from "../../mock";

const cx = cn.bind(styles);

export const CatalogSection = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const href = window.location.href.substring(
        window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      scrollToElement('catalogSectionStart')
      navigate('/')
    }
  }, );
  const categories = mockCategory;
  return (
    <div id={'catalogSection'} className={styles.CatalogSection}>
      <h1 id={'catalogSectionStart'} className={styles.CatalogSection__header}><span className={styles.CatalogSection__colorText}>Все</span>,
        что <br/>нужно</h1>
      <div className={styles.CatalogSection__products}>
        <div className={styles.CatalogSection__products__row1}>
          <div className={styles.CatalogSection__products__row1Wrap}>
            <NavLink to={`/category/${categories[0]?.id}`}
                     className={({isActive}) => cx(styles.text,
                       {activeLink: isActive})}>
              <div className={styles.CatalogSection__products__row1__elem}><img
                className={styles.CatalogSection__products__row1__elem1Img} src={BASE_URL + categories[0]?.photo} alt=""/></div>
              <span className={styles.CatalogSection__products__row1__elemText}>{categories[0]?.name}</span>
            </NavLink>
          </div>

          <div className={styles.CatalogSection__products__row1Wrap}>
            <NavLink to={`/category/${categories[1]?.id}`}
                     className={({isActive}) => cx(styles.text,
                       {activeLink: isActive})}>
              <div className={styles.CatalogSection__products__row1__elem}><img
                className={styles.CatalogSection__products__row1__elem1Img} src={BASE_URL + categories[1]?.photo} alt=""/></div>
              <span className={styles.CatalogSection__products__row1__elemText}>{categories[1]?.name}</span>
            </NavLink>

          </div>

          <div className={styles.CatalogSection__products__row1__elemWrap}>
            <div className={styles.CatalogSection__products__row1__fillerImgWrap}><img
              className={styles.CatalogSection__products__row1__elem1Img} src={elem3} alt=""/></div>
            <span className={styles.CatalogSection__products__row1__text}>в <br/>каталоге</span>
          </div>

          <div className={styles.CatalogSection__products__row1Wrap}>
            <NavLink to={`/category/${categories[2]?.id}`}
                     className={({isActive}) => cx(styles.text,
                       {activeLink: isActive})}>
              <div className={styles.CatalogSection__products__row1__elem}><img
                className={styles.CatalogSection__products__row1__elem1Img} src={BASE_URL + categories[2]?.photo} alt=""/></div>
              <span className={styles.CatalogSection__products__row1__elemText}>{categories[2]?.name}</span>
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
};
