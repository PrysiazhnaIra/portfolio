import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeElements();

    // Use MutationObserver to detect dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.main}>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
