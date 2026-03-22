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
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleToggle = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.projectsSection} id='projects'>
      <div className='container'>
        <div className={`${styles.sectionHeader} reveal`}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.gradientText}>Projects</span>
          </h2>
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
                isExpanded={expandedProjectId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
