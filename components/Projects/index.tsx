import { FC } from 'react';
import styles from './style.module.css';
import ProjectCard from '../ProjectCard';
export interface ProjectsProps {
    projects: any[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => (
    <div className={styles.Projects}>
        <h3 className={styles.Projects__header}>
            Projects
        </h3>
        <div className={styles.Projects__cards}>
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
        </div>
    </div>
)

export default Projects;