import { useRef, useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import styles from "./Carousel.module.sass"

export default function Carousel({ items, move, disable }) {
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (disable) return;
        carouselRef.current.scrollLeft += 1 * move;
    })
    
    function handleDragStart(ev) {
        setIsDragStart(true);
        setPrevPageX(ev.pageX || ev.touches[0].pageX);
        setPrevScrollLeft(carouselRef.current.scrollLeft);
    }

    function handleDrag(ev) {
        if (!isDragStart) return;
        ev.preventDefault();
        let posDiff = (ev.pageX || ev.touches[0].pageX) - prevPageX;
        carouselRef.current.scrollLeft = prevScrollLeft - 1 * posDiff;
    }

    function handleDragStop() {
        setIsDragStart(false);
    }

    return (
        <div className={styles.wrap}>
            <ul
                className={styles.carousel}
                ref={carouselRef}
                onPointerDown={handleDragStart}
                onPointerMove={handleDrag}
                onPointerUp={handleDragStop}
                onPointerLeave={handleDragStop}
            >
                {items.map(item =>
                    <li>
                        <NavLink to={item.path}>
                            <img
                                src={item.image}
                                draggable={false}
                            ></img>
                            <p className={styles.caption}>{item.title}</p>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}