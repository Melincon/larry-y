import { FC } from 'react'
import styles from './style.module.css';

export interface HeroProps {}

const Hero: FC<HeroProps> = () => (
    <div className={styles.Hero}></div>
)

export default Hero;