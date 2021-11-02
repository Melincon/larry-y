import { FC } from 'react';
import styles from './style.module.css';

export interface NavItemProps {
    children: string;
}

const NavItem: FC<NavItemProps> = ({children}) => (
    <div className={styles.NavItem}>
        {children}
    </div>
)

export default NavItem;