import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.heroBg}
        autoPlay
        muted
        loop
        playsInline
        src="/hero-video.mp4"
      />
      <div className={styles.heroScrim} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Where every journey<br />
          becomes a <span className={styles.storyWrap}>
            <strong>story</strong>
            <svg className={styles.storyUnderline} viewBox="0 0 200 22" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M 2,15 C 18,4 32,17 52,10 C 68,4 82,18 102,10 C 120,3 140,17 160,10 C 176,4 190,13 198,11" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> worth <strong>telling</strong>
        </h1>
      </div>
      <div className={`${styles.brandMarker} ${styles.serif}`}>Epic Collection</div>
    </section>
  );
}
