import styles from '../../styles/Catalog/Catalog.module.sass';

import NavigationSection from './components/NavigationSection';
import MainCatalogSection from './components/MainCatalogSection';
import SubCatalogSection from './components/SubCatalogSection';
import BottomSection from '../common/BottomSection';
import {useParams} from 'react-router-dom';
import {useGetCategoriesQuery} from '../../../../store/services/categoriesApi';
import {useGetSubcategoriesQuery} from '../../../../store/services/subcategoriesApi';
import {AdaptiveNavbar} from '../../../../components/common/AdaptiveNavbar/AdaptiveNavbar';
import {useEffect} from 'react';
import {scrollToElement} from '../../../../scroll';
import {mockCategory, mockSubcategories} from "../../../../mock";

export default function Catalog() {
    const {categoryId} = useParams();
    const data= mockCategory;
    const category = data?.find((item) => item.id === Number(categoryId));
    const subcategories = mockSubcategories.filter((item)=>item.categoryId == Number(categoryId));


    useEffect(() => {
      const href = window.location.href.substring(
        window.location.href.lastIndexOf('#') + 1
      );
      scrollToElement(href);
    },
  );

  return (
    <div className={styles.catalog__wrap}>
      <AdaptiveNavbar category={category}/>
      <MainCatalogSection category={category} subcategories={subcategories}/>
      <SubCatalogSection subcategories={subcategories}/>
      <BottomSection/>
    </div>
  );
}
