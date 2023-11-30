import styles from '../../../styles/Root/LetterSection.module.sass';

import letter1 from '../../../../../assets/img/letter (1).png';
import letter2 from '../../../../../assets/img/letter (2).png';
import letter3 from '../../../../../assets/img/letter (3).png';
import letter4 from '../../../../../assets/img/letter (4).png';

export default function LetterSection() {
    return (
        <>
            <h1 className={styles.letterSection__header}>БЛАГОДАРСТВЕННЫЕ ПИСЬМА</h1>
            <div className={styles.letterSection__letterWrap}>
                <img src={letter1}></img>
                <img src={letter2}></img>
                <img src={letter3}></img>
                <img src={letter4}></img>
            </div>
            <div className={styles.letters__textWrap}>
                <span className={styles.letters__text}>
                    Успех нашей компании во многом объясняется тем, что мы придерживаемся принципа открытости и честности по отношению к своим клиентам и партнерам.
<br/>
<br/>

Мы не гонимся за сиюминутной выгодой, предпочитая строить прочные, надежные и взаимовыгодные отношения!
            </span>
            </div>
        </>
    );
}
