import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Agrozone</title>
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
        <h2>Contact Us</h2>
        <p>Phone: 123456789</p>
        <p>Email: agrozone@example.com</p>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Smart Crop Advisor | Built for Educational Purposes</p>
      </footer>
    </>
  );
}
