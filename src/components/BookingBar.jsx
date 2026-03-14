import styles from './BookingBar.module.css';

export default function BookingBar() {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingGrid}>
        <div className={styles.bookingField}>
          <span className={styles.bookingLabel}>Arrival</span>
          <span className={styles.bookingValue}>Select Date</span>
        </div>
        <div className={styles.bookingField}>
          <span className={styles.bookingLabel}>Departure</span>
          <span className={styles.bookingValue}>Select Date</span>
        </div>
        <div className={styles.bookingField}>
          <span className={styles.bookingLabel}>Guests</span>
          <span className={styles.bookingValue}>02</span>
        </div>
        <div className={styles.bookingAction}>
          <button className={styles.btnReserve}>Check Availability</button>
        </div>
      </div>
    </section>
  );
}
