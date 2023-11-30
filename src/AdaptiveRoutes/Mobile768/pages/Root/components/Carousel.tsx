import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/Root/Carousel.module.sass";

interface item {
    image: string,
    header: string,
    subHeader: string
}

export default function Carousel({ items, move }: { items: item[], move: number }) {
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft += 1 * move;
    })

    function handleDragStart(ev: any) {
        if (!carouselRef.current) return;
        setIsDragStart(true);
        setPrevPageX(ev.pageX || ev.touches[0].pageX);
        setPrevScrollLeft(carouselRef.current.scrollLeft);
    }

    function handleDrag(ev: any) {
        if (!isDragStart || !carouselRef.current) return;
        ev.preventDefault();
        let posDiff = (ev.pageX || ev.touches[0].pageX) - prevPageX;
        carouselRef.current.scrollLeft = prevScrollLeft - 1 * posDiff;
    }

    function handleDragStop() {
        setIsDragStart(false);
    }

    return (
        <ul
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragStop}
            className={styles.carousel}
            ref={carouselRef}
        >
            {items.map(item =>
                <li className={styles.item}>
                    <div className={styles.innerWrap}>
                        <div
                            className={styles.workImage}
                            style={
                                {
                                    backgroundImage: `url(${item.image})`
                                }
                            }
                        >
                            <h1 className={styles.caption}>{item.header}</h1>
                            <h2>{item.subHeader}</h2>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    );
}
