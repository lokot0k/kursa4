import React, {useEffect} from 'react';
import styles from './Product.module.sass';
import {BottomSection} from '../../BottomSection/BottomSection';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import cn from 'classnames/bind';
import Category from './Category';
import {useGetCategoriesQuery} from '../../../store/services/categoriesApi';
import {useGetSubcategoriesQuery} from '../../../store/services/subcategoriesApi';
import {scrollToElement} from '../../../scroll';
import {BASE_URL} from '../../../store/base';
import logo from '../../../assets/img/logo.png';
import {AdaptiveNavbar} from '../../common/AdaptiveNavbar/AdaptiveNavbar';
import {mockCategory, mockSubcategories} from "../../../mock";

const cx = cn.bind(styles);

export const GoBackButton = () => (
  <NavLink className={styles.navLinkBackProduct} onClick={() => window.history.back()} to="#">
    <span className={styles.productPage__header__back1}>Назад</span>
  </NavLink>
);

export const Product = () => {
  const {categoryId} = useParams();
  const data= mockCategory;
  const category = data?.find((item) => item.id === Number(categoryId));
  const subcategories = mockSubcategories.filter((item)=>item.categoryId == Number(categoryId));
  const navigate = useNavigate();

  useEffect(() => {
      const href = window.location.href.substring(
        window.location.href.lastIndexOf('#') + 1
      );
      scrollToElement(href);
    },
  );

  return (
    <div className={styles.aboba}>
      <div className={styles.navbarWrapper}>
        <AdaptiveNavbar category={category}/>
      </div>
      <div className={styles.mainCatalogSection__pageWrap}>
        <div className={styles.mainCatalogSection__topWrap}>
          <div className={styles.mainCatalogSection__topLeft}>
            <h1 className={`${styles.mainCatalogSection__header} ${styles.h1__cutted}`}>{category?.name}</h1>
            <div className={styles.mainCatalogSection__textBlock}>
              {category?.description}
            </div>
          </div>
          <div className={styles.mainCatalogSection__topRight}>
            <ul className={styles.mainCatalogSection__mainWrap}>
              {subcategories?.map(item =>
                <li key={item.id} onClick={() => scrollToElement(`subcategory${item.id}`)}>
                  <img src={BASE_URL + item.photo}></img>
                  <div>
                    <h1>{item.name}</h1>
                    <span>{item.description.split('.')[0] + '.'}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        {subcategories?.map((item) => <Category subcategory={item} key={item.id}/>)}
      </div>
      <BottomSection></BottomSection>
    </div>
  );
};
