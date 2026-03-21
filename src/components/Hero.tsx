import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id='about'>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <span className={`${styles.greeting} reveal`} style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </span>
          <h1 className={`${styles.title} reveal`} style={{ animationDelay: '0.2s' }}>
            A Frontend <br />
            <span className={styles.gradientText}>Developer</span>
          </h1>
          <p className={`${styles.description} reveal`} style={{ animationDelay: '0.3s' }}>
            I build exceptional and accessible digital experiences for the web. Transforming ideas
            into robust, modern applications.
          </p>
          <div className={`${styles.heroActions} reveal`} style={{ animationDelay: '0.4s' }}>
            <a href='#projects' className={`${styles.btn} ${styles.btnPrimary}`}>
              View My Work
            </a>
            <a href='#contact' className={`${styles.btn} ${styles.btnSecondary}`}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={`${styles.heroVisual} reveal`} style={{ animationDelay: '0.5s' }}>
          <div className={`${styles.glowOrb} ${styles.orb1}`}></div>
          <div className={`${styles.glowOrb} ${styles.orb2}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
