import Carousel from './Product/Carousel';

import React, {useState} from 'react'
import styles from './ProductPage.module.sass';
import {NavLink, useParams} from 'react-router-dom';
import {BottomSection} from '../BottomSection/BottomSection';
import {Form} from './components/Form';
import {useGetProductQuery} from '../../store/services/productsApi';
import {BASE_URL} from '../../store/base';
import {useGetSubcategoriesQuery} from '../../store/services/subcategoriesApi';
import {AdaptiveNavbar} from '../common/AdaptiveNavbar/AdaptiveNavbar';
import {mockCategory, mockProducts} from "../../mock";

export const GoBackButton = () => (
    <NavLink className={styles.navLinkBackProductPage} onClick={() => window.history.back()} to="#">
        <span className={styles.productPage__header__back1}>Назад</span>
    </NavLink>
);


export const ProductPage = () => {

    const {categoryId, productId} = useParams();
    const category = mockCategory?.find((item) => item.id === Number(categoryId));
    //const product = useGetProductQuery(productId ?? '').data;
    const product = mockProducts.find((item)=> item.id == Number(productId));
    const subcategory = (useGetSubcategoriesQuery(categoryId ?? '').data ?? []).find((item) => item.id === product?.subcategoryId)
    // @ts-ignore
    const imageList = product?.gallery?.map((item) => ({image: BASE_URL + item})) ?? [];
    const [move, setMove] = useState(0);

    return (
        <div className={styles.productPage}>
            <div className={styles.productPage__block}>
                <div className={styles.productPage__block__column}>
                    <div className={styles.productPage__header__wrap}>
                        <AdaptiveNavbar category={category} product={product}/>
                    </div>
                    {/*    верхний блок*/}
                    <div className={styles.productPage__top}>
                        <div className={styles.productPage__rect25__imgWrap}>
                            <img src={BASE_URL + product?.mainPhoto} className={styles.topImage}></img>
                        </div>
                        <div className={styles.productPage__block__column2}>
                            {/* @ts-ignore */ }
                            <Form product={product} subcategory={subcategory}></Form>
                        </div>
                    </div>

                    <div className={styles.productPage__block1__gradMask}>
                        {imageList.length !== 0 && <Carousel items={imageList} move={move} disable={false}/>}
                    </div>
                </div>
            </div>
            {product?.tablePhoto ? <div className={styles.productPage__fakeTable}>
                <img className={styles.productPage__fakeTableImg} src={BASE_URL + product?.tablePhoto} alt=""/>
            </div> : ""}


            <div className={styles.BottomSectionWrap}>
                <BottomSection></BottomSection>
            </div>
        </div>
    );
};

