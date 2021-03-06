import { FC } from 'react';
import styles from './style.module.css';

export interface BioProps {}

const Bio: FC<BioProps> = () => (
    <div className={styles.Bio}>
        <img className={styles.Bio__image} src="/headshot.jpg" alt="Lawrence Yip" />
        <div className={styles.Bio__text}>
            <h3 className={styles.Bio__title}>
                Bio
            </h3>
            <span className={styles.Bio__superText}>
                Developer & Storyteller
            </span>
            <p className={styles.Bio__paragraph}>
                I am a passionate CR developer with interests in technical art and narratives. 
                I seek to design and create deep and novel experiences unique to XR.
            </p>
        </div>
    </div>
)

export default Bio;