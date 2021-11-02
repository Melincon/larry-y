import { FC } from 'react';
import styles from './style.module.css';

export interface FooterProps {}

const Footer: FC<FooterProps> = () => (
    <footer className={styles.Footer}></footer>
)

export default Footer;