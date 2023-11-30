import styles from "../../../styles/Catalog/NavigationSection.module.sass"

import { useNavigate } from "react-router-dom";


export default function NavigationSection({category}) {
    const navigate = useNavigate();
    return(
        <div className={styles.navigationSection__wrap}>
            <span onClick={() => navigate(-1)}>Назад</span>
            <span>{category?.name}</span>
        </div>
    );
}
