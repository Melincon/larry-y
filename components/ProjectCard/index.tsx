import { FC } from 'react';
import styles from './style.module.css';

export interface ProjectCardProps {
    project: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <div className={styles.ProjectCard}>
        <img className={styles.ProjectCard__bgImage} src={project.bgImage} />
    </div>
)

export default ProjectCard;