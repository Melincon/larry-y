import { FC } from 'react'
import styles from './style.module.css';

export interface HeroProps {}

const Hero: FC<HeroProps> = () => (
    <div className={styles.Hero}>
        <h2 className={styles.Hero__header}>
            XR DEVELOPER
        </h2>
        <span className={styles.Hero__superText}>
            Technical Art | Storytelling | Human Centered Design
        </span>
    </div>
)

export default Hero;