import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerBrand} ${styles.serif}`}>Epic Collection</div>
      <div>© 2025 Epic Leisure Club</div>
      <div>Unawatuna — Mirissa — Galle</div>
    </footer>
  );
}
