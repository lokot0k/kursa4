import React from 'react';
import styles from "../AboutSection.module.sass";


interface Props {
    src: string;
    className: string;
}

export const Video: React.FC<Props> = ({ src, className }) => {
    return (
        <video className={className} autoPlay loop muted>
            <source src={src} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
};
