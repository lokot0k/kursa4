import styles from '../../styles/Product/Product.module.sass';

import NavigationSection from './components/NavigationSection';

import BottomSection from '../common/BottomSection';
import TopSection from './components/TopSection';
import {useParams} from 'react-router-dom';
import {useGetCategoriesQuery} from '../../../../store/services/categoriesApi';
import {useGetProductQuery} from '../../../../store/services/productsApi';
import {useGetSubcategoriesQuery} from '../../../../store/services/subcategoriesApi';
import {AdaptiveNavbar} from '../../../../components/common/AdaptiveNavbar/AdaptiveNavbar';
import {mockCategory, mockSubcategories, mockProducts} from "../../../../mock";


export default function Product() {
    const {categoryId, productId} = useParams();
    const categories = mockCategory;
    const category = categories?.find((item) => item.id === Number(categoryId));
    const product = mockProducts.find((item)=> item.id === Number(productId));
    const subcategory =mockSubcategories.find((item) => item.id === product?.subcategoryId);
    return (
        <div className={styles.product__wrap}>
            <AdaptiveNavbar category={category} product={product}/>
            <TopSection category={subcategory} product={product}></TopSection>
            <BottomSection/>
        </div>
    );
}
