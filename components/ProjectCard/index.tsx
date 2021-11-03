import { FC, useState } from 'react';
import styles from './style.module.css';

export interface ProjectCardProps {
    project: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const [showProjectDetails,setShowProjectDetails] = useState(false);
    const handleClick = () => {
        setShowProjectDetails(!showProjectDetails);
    }
    return (
        <div className={styles.ProjectCard}>
            <img onClick={handleClick} className={styles.ProjectCard__bgImage} src={project.bgImage} />
            {showProjectDetails && (
                <div className={styles.ProjectCard__projectDetails}>
                    testing
                </div>
            )}
        </div>
    )
}

export default ProjectCard;