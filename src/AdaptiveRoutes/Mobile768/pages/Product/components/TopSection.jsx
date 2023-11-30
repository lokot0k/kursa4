import styles from "../../../styles/Product/TopSection.module.sass";
import Form from "./Form";
import React, {useState} from "react";
import {BASE_URL} from '../../../../../store/base';
import Carousel from "../../common/Carousel";


export default function TopSection({category, product}) {
    const [move, setMove] = useState(0);
    const imageList = product?.gallery?.map((item) => ({image: BASE_URL + item})) ?? [];
    return(
        <div className={styles.topSection__wrap}>
            <img src={BASE_URL + product?.mainPhoto} className={styles.topImage}/>
            <Form category={category} product={product}></Form>
            <div className={styles.topSection__gradMask}>
                {imageList.length !== 0 && <Carousel items={imageList} move={move}/>}
            </div>
            {product?.tablePhoto ? <div className={styles.productPage__fakeTable}>
                <img className={styles.productPage__fakeTableImg} src={BASE_URL + product?.tablePhoto} alt=""/>
            </div> : ""}
        </div>
    );
}
