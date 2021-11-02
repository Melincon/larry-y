import { FC } from 'react';
import styles from './style.module.css';
import NavItem from '../NavItem';

export interface NavProps {}

const Nav: FC<NavProps> = () => (
    <nav className={styles.Nav}>
        <NavItem>
            Home
        </NavItem>
        <NavItem>
            Resume
        </NavItem>
        <NavItem>
            Projects
        </NavItem>
        <NavItem>
            Bio
        </NavItem>
        <NavItem>
            Contact
        </NavItem>
    </nav>
)

export default Nav;