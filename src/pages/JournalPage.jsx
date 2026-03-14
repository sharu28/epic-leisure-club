import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';
import styles from './JournalPage.module.css';

const CATEGORY_COLORS = {
  Destinations: '#a8875a',
  Experiences: '#6b8c6e',
  Property: '#7a7a9a',
  'Travel Tips': '#8a7060',
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className={styles.page}>
      <Header />

      {/* Page header */}
      <section className={styles.pageHeader}>
        <p className={styles.pageLabel}>The Epic Journal</p>
        <h1 className={styles.pageTitle}>
          Places, stories,<br />and the spaces between
        </h1>
      </section>

      {/* Featured article */}
      <section className={styles.featured}>
        <Link to={`/journal/${featured.slug}`} className={styles.featuredLink}>
          <div className={styles.featuredImage}>
            <img src={featured.coverImage} alt={featured.title} className={styles.featuredImg} />
          </div>
          <div className={styles.featuredContent}>
            <span
              className={styles.categoryTag}
              style={{ '--cat-color': CATEGORY_COLORS[featured.category] }}
            >
              {featured.category}
            </span>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <div className={styles.featuredMeta}>
              <span>{featured.date}</span>
              <span className={styles.metaDot}>·</span>
              <span>{featured.readTime}</span>
            </div>
            <span className={styles.readMore}>Read article →</span>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {rest.map((article) => (
            <Link
              key={article.slug}
              to={`/journal/${article.slug}`}
              className={styles.card}
            >
              <div className={styles.cardImageWrap}>
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <span
                  className={styles.categoryTag}
                  style={{ '--cat-color': CATEGORY_COLORS[article.category] }}
                >
                  {article.category}
                </span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardMeta}>
                  <span>{article.date}</span>
                  <span className={styles.metaDot}>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
