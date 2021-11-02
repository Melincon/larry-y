import { FC } from 'react'
import styles from './style.module.css';

export interface HeroProps {}

const Hero: FC<HeroProps> = () => (
    <div className={styles.Hero}>
        <div className={styles.Hero__text}>
            <h1 className={styles.Hero__header}>
                XR DEVELOPER
            </h1>
            <span className={styles.Hero__superText}>
                Technical Art | Storytelling | Human Centered Design
            </span>
        </div>
    </div>
)

export default Hero;