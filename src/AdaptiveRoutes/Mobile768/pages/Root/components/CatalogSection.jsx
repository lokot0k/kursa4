import {NavLink, useNavigate} from 'react-router-dom';
import styles from '../../../styles/Root/CatalogSection.module.sass';
import {useGetCategoriesQuery} from '../../../../../store/services/categoriesApi';
import {BASE_URL} from '../../../../../store/base';
import {useEffect} from "react";
import {scrollToElement} from "../../../../../scroll";
import {mockCategory} from "../../../../../mock";

export default function CatalogSection() {
  const categories = mockCategory;
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
  return (
    <>
      <h1
        id="catalogSectionStart"
        className={styles.catalogSection__header}
      ><span>Все</span>, что <br/>нужно</h1>
      <ul className={styles.catalogSection__wrap}>
        {categories?.map(category =>
          <li
            className={styles.catalogSection__item}
            key={category.id}
          >
            <NavLink to={`/category/${category.id}`}>
              {category.photo && <img src={BASE_URL + category.photo}></img>}
              <h1>{category.name}</h1>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
