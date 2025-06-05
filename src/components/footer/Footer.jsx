import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            {/* Quick Links */}
            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>All Movies</li>
                <li>Top Rated</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Genres */}
            <div className={styles.column}>
              <h4>Genres</h4>
              <ul>
                <li>Drama</li>
                <li>Action</li>
                <li>Comedy</li>
                <li>Romance</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className={styles.column}>
              <h4>Follow Us</h4>
              <ul className={styles.socialLinks}>
                <li><i className="fab fa-facebook-f"></i> Facebook</li>
                <li><i className="fab fa-twitter"></i> Twitter</li>
                <li><i className="fab fa-instagram"></i> Instagram</li>
                <li><i className="fab fa-youtube"></i> YouTube</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className={styles.column}>
              <h4>Stay Updated</h4>
              <p>Subscribe to get updates on new releases.</p>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* App Badges */}
          <div className={styles.downloadApps}>
            <p>Download Our App</p>
            <div className={styles.appButtons}>
              <img src="/appStoreBadge.png" alt="App Store" className={styles.storeBadge} />
            </div>
          </div>

          {/* Copyright */}
          <p className={styles.copyright}>
            © 2025 Movie App. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Bottom Panel */}
      <div className={styles.footPanel3}>
        <i className="fa-solid fa-cat"></i>
        <p className={styles.aChar}>A</p>
        <i className="fa-regular fa-heart"></i>
      </div>
    </>
  );
};

export default Footer;
