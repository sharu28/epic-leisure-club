import Header from './Header';
import Footer from './Footer';
import styles from './PropertyPage.module.css';

export default function PropertyPage({
  name,
  location,
  tagline,
  description,
  heroImage,
  gallery,
  rooms,
}) {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: `url(${heroImage})` }} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroLocation}>{location}</p>
          <h1 className={styles.heroTitle}>{name}</h1>
          <p className={styles.heroTagline}>{tagline}</p>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <p className={styles.introText}>{description}</p>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <span className={styles.sectionLabel}>Gallery</span>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <img src={img.src} alt={img.alt || name} loading="lazy" className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className={styles.roomsSection}>
        <div className={styles.roomsSectionHeader}>
          <span className={styles.sectionLabel}>Accommodations</span>
          <h2 className={styles.sectionTitle}>Room Types</h2>
        </div>
        {rooms.map((room, i) => (
          <div
            key={i}
            className={`${styles.roomRow} ${i % 2 !== 0 ? styles.roomRowReverse : ''}`}
          >
            {room.image && (
              <div className={styles.roomImageWrap}>
                <img src={room.image} alt={room.name} loading="lazy" className={styles.roomImage} />
              </div>
            )}
            <div className={styles.roomContent}>
              <p className={styles.roomNumber}>0{i + 1}</p>
              <h3 className={styles.roomName}>{room.name}</h3>
              {room.description && (
                <p className={styles.roomDesc}>{room.description}</p>
              )}
              {room.amenities && (
                <div className={styles.roomAmenities}>
                  {room.amenities.map((a, j) => (
                    <div key={j} className={styles.roomAmenityItem}>
                      <span className={styles.roomAmenityIcon}>{a.icon}</span>
                      <span className={styles.roomAmenityLabel}>{a.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Enquiry CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaTagline}>{tagline}</p>
          <h2 className={styles.ctaTitle}>Begin Your Stay</h2>
          <p className={styles.ctaDesc}>
            Reach out to our team and we'll arrange everything for your visit.
          </p>
          <div className={styles.ctaActions}>
            <a href="mailto:info@epicleisureclub.com" className={styles.ctaBtn}>
              Make an Enquiry →
            </a>
            <a href="tel:+94762900203" className={styles.ctaPhone}>+94 76 290 02 03</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
