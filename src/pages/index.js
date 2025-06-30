import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import CropSelector from '../components/Cropselector';
import CropDetails from '../components/Cropdetails';
import UploadFile from '../components/UploadFile';

export default function Home() {
  const [pincode, setPincode] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleGetSuggestions = () => {
    console.log('Fetching suggestions for:', pincode);
    setShowDetails(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Agrozone - Smart Crop Advisor</title>
        <meta name="description" content="Get personalized crop recommendations" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.logo}>
            <span className={styles.logoMain}>Agrozone</span>
            <span className={styles.logoSub}>Smart Crop Advisor</span>
          </h1>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/features" className={styles.navLink}>Features</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Optimize Your Farming Potential</h2>
            <p className={styles.heroText}>
              Enter your pincode to receive crop recommendations.
            </p>
            
            <div className={styles.searchContainer}>
              <input
                id="pincode"
                type="text"
                placeholder="Enter 6-digit pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className={styles.searchInput}
                maxLength="6"
                required
              />
              <button 
                onClick={handleGetSuggestions}
                className={styles.searchButton}
                disabled={pincode.length !== 6}
              >
                Get Recommendations
              </button>
            </div>
          </div>
        </section>

        <section className={styles.imageSection}>
          <div className={styles.imageOverlay}></div>
          <img
            src="https://cdn.pixabay.com/photo/2017/06/23/01/57/agriculture-2433012_1280.jpg"
            alt="Farm landscape"
            className={styles.heroImage}
          />
        </section>

        <section className={styles.uploadSection}>
          <h3 className={styles.sectionTitle}>Upload Soil Data</h3>
          <UploadFile />
        </section>

        {showDetails && (
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>Crops for {pincode}</h2>
            <div className={styles.resultsGrid}>
              <div className={styles.selectorPanel}>
                <CropSelector />
              </div>
              <div className={styles.detailsPanel}>
                <CropDetails />
              </div>
            </div>
          </section>
        )}

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Agrozone?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌱</div>
              <h3>Scientific Approach</h3>
              <p>Research-based recommendations</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Data-Driven</h3>
              <p>Analyzes soil and weather data</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💧</div>
              <h3>Water Efficient</h3>
              <p>Considers water conservation</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p>© 2025 Agrozone</p>
        </div>
      </footer>
    </div>
  );
}