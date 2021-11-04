import { FC, useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

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
            <Image onClick={handleClick} className={styles.ProjectCard__bgImage} src={project.bgImage} height={1280} width={1920} />
            {showProjectDetails && (
                <div className={styles.ProjectCard__projectDetails}>
                    {project.content}
                </div>
            )}
        </div>
    )
}

export default ProjectCard;