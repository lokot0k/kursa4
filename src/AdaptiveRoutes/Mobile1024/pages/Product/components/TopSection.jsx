import rect25 from '../../../../../assets/img/Rectangle25.png';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../../../styles/Product/TopSection.module.sass';
import Form from './Form';
import fake_table from '../../../../../assets/img/fake_table.jpg';
import React from 'react';
import Carousel from '../../common/Carousel';
import {BASE_URL} from '../../../../../store/base';


export default function TopSection({category, product}) {
  const [move, setMove] = useState(0);

  const imageList = product?.gallery?.map((item) => ({image: BASE_URL + item})) ?? [];

  return (
    <div className={styles.topSection__wrap}>
      <div className={styles.topSection__columnBlock}>
        <div className={styles.topSection__column}>
          <img src={BASE_URL + product?.mainPhoto} className={styles.topImage}/>
        </div>
        <div className={styles.topSection__column}>
          <Form category={category} product={product}></Form>
        </div>
      </div>
      <div className={styles.topSection__gradMask}>
        {imageList.length !== 0 && <Carousel items={imageList} move={move}/>}
      </div>
        {product?.tablePhoto ? <div className={styles.productPage__fakeTable}>
            <img className={styles.productPage__fakeTableImg} src={BASE_URL + product?.tablePhoto} alt=""/>
        </div> : ""}
    </div>
  );
}
