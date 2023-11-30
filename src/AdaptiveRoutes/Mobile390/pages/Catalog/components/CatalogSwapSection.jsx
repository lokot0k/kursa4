import Carousel from "../../common/Carousel";

import { catalogList } from "../../../utils/CatalogList";

export default function CatalogSwapSection() {
    return(
        <>
            <Carousel items={catalogList}/>
        </>
    );
}