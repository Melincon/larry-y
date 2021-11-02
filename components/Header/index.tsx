import { FC } from 'react';
import styles from './style.module.css';
import Nav from '../Nav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
    <header className={styles.Header}>
        <h2 className={styles.Header__siteTitle}>
            LAWRENCE YIP
        </h2>
        <Nav />
    </header>
)

export default Header;