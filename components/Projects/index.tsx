import { FC } from 'react';
import styles from './style.module.css';

export interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
    <div className={styles.Projects}>
        <h3 className={styles.Projects__header}>
            Projects
        </h3>
        <div className={styles.Projects__cards}>

        </div>
    </div>
)

export default Projects;