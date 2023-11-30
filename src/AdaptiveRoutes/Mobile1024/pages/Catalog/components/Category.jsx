import styles from '../../../styles/Catalog/Category.module.sass';
import {useNavigate, useParams} from 'react-router-dom';
import {useGetProductsQuery} from '../../../../../store/services/productsApi';
import {useGetCategoriesQuery} from '../../../../../store/services/categoriesApi';
import {BASE_URL} from '../../../../../store/base';
import {mockCategory, mockSubcategories, mockProducts} from "../../../../../mock";

export default function Category({subcategory}) {
    const {categoryId} = useParams();
    const data= mockCategory;
    const category = data?.find((item) => item.id === Number(categoryId));
    //const subcategories = mockSubcategories.filter((item)=>item.categoryId == Number(categoryId));
    const navigate = useNavigate();
    const products = mockProducts.filter((item)=>item.subcategoryId == Number(subcategory.id));
  return (
    <>
      <div id={`subcategory${subcategory.id}`} className={styles.category__descriptionBlock}>
        <h1>{subcategory.name}</h1><br/>
        <p>{subcategory.description}</p>
      </div>
      <ul className={styles.category__categoryList}>
        {products?.map(item =>
          <li onClick={() => navigate(`/category/${categoryId}/product/${item.id}`)} key={item.id}>
            <h1>
              <span>{item.name}</span>
            </h1>
            <div style={{backgroundImage: `url("${BASE_URL + item.mainPhoto}")`}}/>
          </li>
        )}
      </ul>
    </>
  );
}
