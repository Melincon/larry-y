import { FC } from 'react';
import styles from './style.module.css';

export interface NavItemProps {}

const NavItem: FC<NavItemProps> = ({children}) => (
    <div className={styles.NavItem}></div>
)

export default NavItem;