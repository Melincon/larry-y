import { FC } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

export interface BioProps {}

const Bio: FC<BioProps> = () => (
    <div className={styles.Bio}>
        <Image className={styles.Bio__image} src="/headshot.jpg" alt="Lawrence Yip" height={345} width={300}  />
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