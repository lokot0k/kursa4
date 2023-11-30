import TopSection from "./components/TopSection";
import CatalogSection from "./components/CatalogSection";
import AboutSection from "./components/AboutSection";
import OurWorkSection from "./components/OurWorkSection";
import LetterSection from "./components/LetterSection";
import BottomSection from "../common/BottomSection";

import styles from "../../styles/Root/Root.module.sass"

export default function Root() {
    return (
        <div className={styles.root__wrap}>
            <TopSection />
            <CatalogSection />
            <AboutSection />
            <OurWorkSection />
            <BottomSection />
        </div>
    );
}