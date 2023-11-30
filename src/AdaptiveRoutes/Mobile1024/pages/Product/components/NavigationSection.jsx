import styles from '../../../styles/Product/NavigationSection.module.sass';

import {useNavigate} from 'react-router-dom';

export default function NavigationSection({category, product}) {
  const navigate = useNavigate();

  return (
    <div className={styles.navigationSection__wrap}>
      <span onClick={() => navigate(-1)}>Назад</span>
      <span>{category?.name} / {product?.name}</span>
    </div>
  );
}
