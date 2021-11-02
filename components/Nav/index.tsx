import { FC } from 'react';
import styles from './style.module.css';
import NavItem from '../NavItem';

export interface NavProps {}

const Nav: FC<NavProps> = () => (
    <nav className={styles.Nav}>
        <NavItem>
            Resume
        </NavItem>
        <NavItem>
            Email
        </NavItem>
        <NavItem>
            Linkedin
        </NavItem>
    </nav>
)

export default Nav;