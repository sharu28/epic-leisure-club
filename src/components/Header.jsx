import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const properties = [
  { label: 'Epic Unawatuna', to: '/epic-unawatuna' },
  { label: 'Bliss by Epic', to: '/bliss-by-epic' },
  { label: 'Aura by Epic', to: '/aura-by-epic' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {isHome ? (
            <button
              className={`${styles.navLink} ${styles.navBtn}`}
              onClick={() => setMenuOpen((o) => !o)}
            >
              Menu
            </button>
          ) : (
            <Link to="/" className={styles.navLink}>← Back</Link>
          )}
        </div>
        <div className={styles.headerRight}>
          <div className={styles.collectionsWrapper}>
            <button
              className={`${styles.navLink} ${styles.navBtn}`}
              onClick={() => setCollectionsOpen((o) => !o)}
            >
              Collections
            </button>
            {collectionsOpen && (
              <div className={styles.dropdown}>
                {properties.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    className={styles.dropdownLink}
                    onClick={() => setCollectionsOpen(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/journal" className={styles.navLink}>Journal</Link>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
          <nav className={styles.menuNav} onClick={(e) => e.stopPropagation()}>
            <button className={styles.menuClose} onClick={() => setMenuOpen(false)}>✕</button>
            <p className={styles.menuLabel}>Properties</p>
            {properties.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className={styles.menuLink}
                onClick={() => setMenuOpen(false)}
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
