import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id='contact'>
      <div className={`container ${styles.footerContent}`}>
        <div className={`${styles.footerInfo} reveal`}>
          <h2 className={styles.footerTitle}>
            Let's work <span className={styles.gradientText}>together</span>
          </h2>
          <p className={styles.footerDescription}>
            I'm currently available for freelance work. If you have a project that you want to get
            started, think you need my help with something or just fancy saying hey, then get in
            touch.
          </p>
          <a href='mailto:ira.prysiazhna@gmail.com' className={styles.emailLink}>
            ira.prysiazhna@gmail.com
          </a>
        </div>

        <div className={`${styles.footerSocial} reveal delay-1`}>
          <a
            href='https://www.linkedin.com/in/ira-prysiazhna/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/PrysiazhnaIra'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
          >
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className='container'>
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
