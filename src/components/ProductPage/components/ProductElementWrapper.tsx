import styles from './ProductElement.module.sass'

import { useState, useRef, useMemo, useEffect } from 'react'

interface Props {
    children: any,
    className: string
}

export const ProductElementWrapper: React.FC<Props> = ({ children, className }) => {
    const [isActive, setIsActive] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const buttonRef: any = useRef();

    function handlePointerMove(ev: any) {
        ev.stopPropagation();

        setButtonPosition(
            {
                x: ev.pageX,
                y: ev.pageY 
            }
        );
    }

    return (
        <>
            <div
                onPointerMove={handlePointerMove}
                onPointerEnter={() => setIsActive(true)}
                onPointerLeave={() => setIsActive(false)}
                className={className}
                style={
                    {
                        cursor: isActive ? "none" : "default"
                    }
                }
            >
                {children}
            </div>
            <div
                ref={buttonRef}
                className={styles.watchButton}
                style={
                    {
                        display: isActive ? "block" : "none",
                        left: buttonPosition.x,
                        top: buttonPosition.y
                    }
                }
            >Смотреть</div>
        </>
    );
}