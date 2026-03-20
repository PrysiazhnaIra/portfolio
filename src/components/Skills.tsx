import Marquee from 'react-fast-marquee';
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiTypescript,
  SiFigma,
  SiMui,
  SiStyledcomponents,
  SiVite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiTrello,
  SiPostman,
  SiSwagger,
  SiAxios,
  SiVercel,
  SiNetlify,
  SiRender,
  SiFirebase,
  SiMongodb,
  SiAlgolia,
  SiContentful,
  SiOpenai,
} from 'react-icons/si';
import { FaMobileAlt, FaDatabase, FaServer, FaBrain } from 'react-icons/fa';
import styles from './Skills.module.css';

const row1 = [
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss color="#1572B6" /> },
  { name: 'SASS / SCSS', icon: <SiSass color="#CC6699" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
  { name: 'Material UI', icon: <SiMui color="#007FFF" /> },
  { name: 'Styled-Components', icon: <SiStyledcomponents color="#DB7093" /> },
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  { name: 'Responsive Design', icon: <FaMobileAlt color="#A8B2D1" /> },
];

const row2 = [
  { name: 'Formik / Yup', icon: <SiReact color="#61DAFB" /> },
  { name: 'REST API (Axios)', icon: <SiAxios color="#5A29E4" /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" /> },
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  { name: 'GitHub', icon: <SiGithub color="#FFFFFF" /> },
  { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
  { name: 'Jira', icon: <SiJira color="#0052CC" /> },
  { name: 'Trello', icon: <SiTrello color="#0052CC" /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  { name: 'Swagger', icon: <SiSwagger color="#85EA2D" /> },
  { name: 'Chrome DevTools', icon: <FaServer color="#A8B2D1" /> },
  { name: 'Vercel', icon: <SiVercel color="#FFFFFF" /> },
  { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
  { name: 'Render', icon: <SiRender color="#46E3B7" /> },
];

const row3 = [
  { name: 'NoSQL / Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Database Architecture', icon: <FaDatabase color="#A8B2D1" /> },
  { name: 'Algolia', icon: <SiAlgolia color="#003DFF" /> },
  { name: 'Contentful', icon: <SiContentful color="#2478CC" /> },
  { name: 'AI Tools (Codex)', icon: <SiOpenai color="#412991" /> },
  { name: 'Prompt Engineering', icon: <FaBrain color="#FF69B4" /> },
  { name: 'Antigravity', icon: <FaBrain color="#A8B2D1" /> },
];

const SkillPill = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className={styles.skillPill}>
    <div className={styles.skillIcon}>{icon}</div>
    <span className={styles.skillName}>{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <div className={`${styles.sectionHeader} reveal`}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.gradientText}>Tech Stack</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Here are the technologies I've been working with recently to build robust web applications.
          </p>
        </div>
      </div>

      <div className={styles.marqueesContainer}>
        {/* Row 1 - Left to Right */}
        <div className={`${styles.marqueeRow} reveal`}>
          <Marquee gradient={true} gradientColor="var(--bg-primary)" gradientWidth={100} speed={40} pauseOnHover={true}>
            {row1.map((skill, index) => (
              <SkillPill key={index} name={skill.name} icon={skill.icon} />
            ))}
            {row1.map((skill, index) => (
              <SkillPill key={`${index}-dup`} name={skill.name} icon={skill.icon} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 - Right to Left */}
        <div className={`${styles.marqueeRow} reveal delay-1`}>
          <Marquee gradient={true} gradientColor="var(--bg-primary)" gradientWidth={100} speed={45} direction="right" pauseOnHover={true}>
            {row2.map((skill, index) => (
              <SkillPill key={index} name={skill.name} icon={skill.icon} />
            ))}
            {row2.map((skill, index) => (
              <SkillPill key={`${index}-dup`} name={skill.name} icon={skill.icon} />
            ))}
          </Marquee>
        </div>

        {/* Row 3 - Left to Right again, slower */}
        <div className={`${styles.marqueeRow} reveal delay-2`}>
          <Marquee gradient={true} gradientColor="var(--bg-primary)" gradientWidth={100} speed={35} pauseOnHover={true}>
            {row3.map((skill, index) => (
              <SkillPill key={index} name={skill.name} icon={skill.icon} />
            ))}
            {row3.map((skill, index) => (
              <SkillPill key={`${index}-dup`} name={skill.name} icon={skill.icon} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
