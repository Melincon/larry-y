import { FC } from 'react';
import styles from './style.module.css';
import Nav from '../Nav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
    <header className={styles.Header}>
        <h1 className={styles.Header__siteTitle}>
            LAWRENCE YIP
        </h1>
        <Nav />
    </header>
)

export default Header;