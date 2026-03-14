import styles from './VillaCard.module.css';

export default function VillaCard({ image, alt, location, title, specs, description }) {
  return (
    <article className={styles.villaItem}>
      <div className={styles.villaImageContainer}>
        <img src={image} alt={alt} className={styles.villaImage} />
      </div>
      <div className={styles.villaMeta}>
        <div className={styles.villaLocation}>{location}</div>
        <h2 className={styles.villaTitle}>{title}</h2>
        <div className={styles.villaSpecs}>
          {specs.map((spec, i) => (
            <div className={styles.specItem} key={i}>
              <span className={styles.specLabel}>{spec.label}</span>
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>
        <p className={styles.villaDesc}>{description}</p>
      </div>
    </article>
  );
}
