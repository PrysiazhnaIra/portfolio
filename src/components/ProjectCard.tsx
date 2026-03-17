import { useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  name: string;
  picture: string;
  linkPage: string;
  linkGithub: string;
  skills: string[];
  description: string;
}

const ProjectCard = ({
  name,
  picture,
  linkPage,
  linkGithub,
  skills = [],
  description,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrapper}>
        <img src={picture} alt={name} className={styles.projectImage} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectLinks}>
            <a
              href={linkPage}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.iconLink}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
            <a
              href={linkGithub}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.iconLink}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{name}</h3>
        
        <div className={styles.projectSkills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.projectSkill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.accordionContainer}>
          <button 
            className={`${styles.accordionButton} ${isExpanded ? styles.active : ''}`}
            onClick={toggleAccordion}
            aria-expanded={isExpanded}
          >
            <span>Project Details</span>
            <svg 
              className={styles.accordionIcon} 
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          <div 
            className={styles.accordionContent}
            style={{ 
              maxHeight: isExpanded ? '300px' : '0', 
              opacity: isExpanded ? 1 : 0,
              paddingTop: isExpanded ? '1rem' : '0',
            }}
          >
            <p className={styles.projectDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
