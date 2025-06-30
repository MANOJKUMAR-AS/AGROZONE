import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | Agrozone</title>
      </Head>

      <header className={styles.header}>
        <h1>Agrozone<br />Choose Your Crop</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Features of Agrozone</h2>
        <ul>
          <li><strong>Location-based crop advice:</strong> Get crop suggestions tailored to your specific region and climate.</li>
          <li><strong>Soil & Climate Matching:</strong> Recommendations based on soil type and current weather conditions.</li>
          <li><strong>Seasonal Recommendations:</strong> Know the best crops to plant each season to maximize yield.</li>
          <li><strong>Sowing Time & Tips:</strong> Learn optimal sowing times and agricultural tips for each crop.</li>
          <li><strong>Water & Land Filter Options:</strong> Customize crop suggestions based on your land size and water availability.</li>
          <li><strong>File Upload Feature:</strong> Upload soil reports or images for more personalized advice.</li>
        </ul>
      </section>

      <section className={styles.imageSection}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/25/12/28/farm-1761553_1280.jpg"
          alt="Modern agriculture technology"
        />
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Smart Crop Advisor | Built for Educational Purposes</p>
      </footer>
    </>
  );
}
