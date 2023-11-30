import styles from "../../../styles/Catalog/NavigationSection.module.sass"

import logo from "../../../../../assets/img/logo.png"
import { useNavigate } from "react-router-dom";


export default function NavigationSection({category}) {
    const navigate = useNavigate();

    return (
        <div className={styles.navigationSection__topWrap}>
            <div className={styles.navigationSection__wrap}>
                <span className={styles.back_button} onClick={() => navigate(-1)}>Назад</span>
                <span>{category?.name}</span>
            </div>
            <img className={styles.navigationSection__logo} onClick={()=>navigate('/')} src={logo}></img>
        </div>
    );
}
