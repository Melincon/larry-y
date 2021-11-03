import { FC } from 'react';
import styles from './style.module.css';

export interface ProjectCardProps {
    project: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <div className={styles.ProjectCard}>
        
    </div>
)

export default ProjectCard;