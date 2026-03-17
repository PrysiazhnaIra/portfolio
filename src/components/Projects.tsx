import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
interface Project {
  id: string;
  name: string;
  picture: string;
  linkPage: string;
  linkGithub: string;
  description: string;
  skills: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section className={styles.projectsSection} id='projects'>
      <div className='container'>
        <div className={`${styles.sectionHeader} reveal`}>
          <h2 className={styles.sectionTitle}>
            Selected <span className={styles.gradientText}>Works</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Here are some of the projects I've built. The data is loaded dynamically.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id} className={`reveal delay-${(index % 3) + 1}`}>
              <ProjectCard
                id={project.id}
                name={project.name}
                picture={project.picture}
                linkPage={project.linkPage}
                linkGithub={project.linkGithub}
                description={project.description}
                skills={project.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
