import styles from './Category.module.sass';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useGetCategoriesQuery} from '../../../store/services/categoriesApi';
import {useGetProductsQuery} from '../../../store/services/productsApi';
import {BASE_URL} from '../../../store/base';
import {scrollToElement} from '../../../scroll';
import {mockProducts} from "../../../mock";

function truncate(text, length) {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

function getCharLimit(width) {
  if (width >= 1920) {
    return 40;
  } else if (width >= 1650) {
    return 30;
  } else {
    return 27;
  }
}

export default function Category({subcategory}) {
  const navigate = useNavigate();
  const {categoryId} = useParams();
  const products = mockProducts.filter((item)=> item.subcategoryId === Number(subcategory.id));

  const [isDesktop, setDesktop] = useState(window.innerWidth);
  window.addEventListener('resize', () => setDesktop(window.innerWidth));

  return (
    <>
      <div id={`subcategory${subcategory?.id}`} className={styles.category__descriptionBlock}>
        <h1>{subcategory?.name}</h1><br/>
        <p>{subcategory?.description}</p>
      </div>
      <ul className={styles.category__categoryList}>
        {products?.map(item =>
          <li onClick={() => navigate(`/category/${categoryId}/product/${item.id}`)} key={item.id}>
            <h2>{item.name}</h2>
            <div className={'test'} style={{backgroundImage: `url("${BASE_URL + item.mainPhoto}")`}}/>
          </li>
        )}
      </ul>
    </>
  );
}
