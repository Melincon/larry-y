import { FC } from 'react';
import styles from './style.module.css';

export interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
    <div className={styles.Projects}>
        <h3 className={styles.Projects__header}>
            Projects
        </h3>
    </div>
)

export default Projects;