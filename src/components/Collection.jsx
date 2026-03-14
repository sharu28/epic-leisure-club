import { Link } from 'react-router-dom';
import styles from './Collection.module.css';

const villas = [
  {
    image: 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91/8fd79577-ee84-4ed6-a3cc-7f7d36021324/Epic+Unawtuna-5.jpg',
    alt: 'Epic Unawatuna',
    location: 'Unawatuna, Galle Coast',
    title: 'Epic Unawatuna',
    to: '/epic-unawatuna',
    specs: [
      { label: 'Rooms', value: 'Deluxe King / Queen / Superior' },
      { label: 'Setting', value: 'Beachfront' },
      { label: 'Style', value: 'Contemporary Coastal' },
    ],
    description:
      'A gateway to relaxation and elegance. Situated 100 metres from the shores of Unawatuna, this beachfront retreat blends modern luxury with the quiet charm of southern Sri Lanka — with Galle Fort, local markets, and nature trails at your doorstep.',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91/fac0bada-2478-43b9-9527-cbe1fc94b431/5A6A9725-HDR.jpg',
    alt: 'Bliss by Epic Unawatuna',
    location: 'Unawatuna, Galle Coast',
    title: 'Bliss by Epic',
    to: '/bliss-by-epic',
    specs: [
      { label: 'Rooms', value: 'King Suite / Queen / King' },
      { label: 'Feature', value: 'Serene Pool' },
      { label: 'Cuisine', value: 'Fresh Local Ingredients' },
    ],
    description:
      'Discover peace. Embrace sophistication. A boutique coastal retreat offering a harmonious blend of comfort and elegance, just steps from the pristine beaches of Unawatuna — with thoughtfully designed spaces and service tailored to you.',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91/af50c09c-355a-42a5-816f-f5ec747b1396/WhatsApp+Image+2025-01-22+at+15.03.27.jpeg',
    alt: 'Aura by Epic Collection',
    location: 'Mirissa',
    title: 'Aura by Epic',
    to: '/aura-by-epic',
    specs: [
      { label: 'Rooms', value: 'Apartments / Triple / Double' },
      { label: 'Feature', value: 'Pool & Restaurant' },
      { label: 'Access', value: 'Walk to Beach' },
    ],
    description:
      'Your sanctuary of serenity in Mirissa. A calm boutique retreat within walking distance of Mirissa\'s coast, offering spacious apartments with kitchenettes, a tranquil pool, and on-site dining — crafted for families and couples seeking true escape.',
  },
];

export default function Collection() {
  return (
    <section className={styles.collection}>
      {villas.map((villa, index) => (
        <Link to={villa.to} key={index} className={styles.villaLink}>
        <article
          className={`${styles.villaItem} ${index % 2 === 0 ? styles.odd : styles.even}`}
        >
          <div
            className={styles.villaImageContainer}
            style={{
              height:
                index === 1 ? '85vh' : index === 2 ? '60vh' : '70vh',
            }}
          >
            <img src={villa.image} alt={villa.alt} className={styles.villaImage} />
          </div>
          <div className={styles.villaMeta}>
            <div className={styles.villaLocation}>{villa.location}</div>
            <h2 className={styles.villaTitle}>{villa.title}</h2>
            <div className={styles.villaSpecs}>
              {villa.specs.map((spec, i) => (
                <div className={styles.specItem} key={i}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.villaDesc}>{villa.description}</p>
          </div>
        </article>
        </Link>
      ))}
    </section>
  );
}
