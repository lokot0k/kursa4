import styles from '../../../styles/Catalog/MainCatalogSection.module.sass';
import {BASE_URL} from '../../../../../store/base';
import {scrollToElement} from '../../../../../scroll';

export default function MainCatalogSection({category, subcategories}) {
  return (
    <>
      <h1 className={`${styles.mainCatalogSection__header} ${styles.h1__cutted}`}>{category?.name}</h1>
      <div className={styles.mainCatalogSection__textBlock}>
          {category?.description}
      </div>
      <ul className={styles.mainCatalogSection__mainWrap}>
        {subcategories?.map(item =>
          <li key={item.id}  onClick={() => scrollToElement(`subcategory${item.id}`)}>
            <img src={BASE_URL + item.photo}></img>
            <h1>{item.name}</h1>
            <span>{item.description.split('.')[0] + '.'}</span>
          </li>
        )}
      </ul>
    </>
  );
}
