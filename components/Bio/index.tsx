import { FC } from 'react';
import styles from './style.module.css';

export interface BioProps {}

const Bio: FC<BioProps> = () => (
    <div className={styles.Bio}></div>
)

export default Bio;