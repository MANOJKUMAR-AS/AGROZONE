import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Agrozone</title>
      </Head>

      {/* Reusing the same header from index.js */}
      <header className={styles.header}>
        <h1>Agrozone<br />Choose Your Crop</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Main About Content Styled with the Hero Section */}
      <section className={styles.hero}>
        <h2>About Agrozone</h2>
        <p>
          Agrozone is a smart farming assistant that provides personalized crop and seed
          recommendations based on your location, soil, and season.
        </p>
        <p>
          Our mission is to empower farmers and agriculture enthusiasts with AI-driven
          insights to increase yield and sustainability.
        </p>
      </section>

      {/* Optional: Image section to match home */}
      <section className={styles.imageSection}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/23/01/57/agriculture-2433012_1280.jpg"
          alt="Farm landscape with crops"
        />
      </section>

      {/* Reusing footer from home */}
      <footer className={styles.footer}>
        <p>© 2025 Smart Crop Advisor | Built for Educational Purposes</p>
      </footer>
    </>
  );
}
