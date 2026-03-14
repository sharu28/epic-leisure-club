import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import styles from './ArticlePage.module.css';

const CATEGORY_COLORS = {
  Destinations: '#a8875a',
  Experiences: '#6b8c6e',
  Property: '#7a7a9a',
  'Travel Tips': '#8a7060',
};

function BodyBlock({ block }) {
  if (block.type === 'h2') {
    return <h2 className={styles.bodyH2}>{block.text}</h2>;
  }
  if (block.type === 'quote') {
    return (
      <blockquote className={styles.bodyQuote}>
        <span className={styles.bodyQuoteMark}>"</span>
        {block.text}
      </blockquote>
    );
  }
  return <p className={styles.bodyP}>{block.text}</p>;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const related = getRelatedArticles(slug, 3);

  if (!article) {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.notFound}>
          <p>Article not found.</p>
          <Link to="/journal">← Back to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const catColor = CATEGORY_COLORS[article.category];

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${article.coverImage})` }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <span
            className={styles.heroCategory}
            style={{ '--cat-color': catColor }}
          >
            {article.category}
          </span>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <p className={styles.heroTagline}>{article.excerpt}</p>
        </div>
      </section>

      {/* Meta bar */}
      <div className={styles.metaBar}>
        <div className={styles.metaInner}>
          <span
            className={styles.metaCategory}
            style={{ '--cat-color': catColor }}
          >
            {article.category}
          </span>
          <span className={styles.metaSep}>|</span>
          <span>{article.date}</span>
          <span className={styles.metaSep}>|</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Body */}
      <article className={styles.body}>
        {article.body.map((block, i) => (
          <BodyBlock key={i} block={block} />
        ))}
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <div className={styles.relatedHeader}>
              <p className={styles.relatedLabel}>Continue Reading</p>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/journal/${a.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageWrap}>
                    <img
                      src={a.coverImage}
                      alt={a.title}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span
                      className={styles.relatedCategory}
                      style={{ '--cat-color': CATEGORY_COLORS[a.category] }}
                    >
                      {a.category}
                    </span>
                    <h3 className={styles.relatedTitle}>{a.title}</h3>
                    <span className={styles.relatedMeta}>{a.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
