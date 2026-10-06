function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Wander<span>ly</span>
            </a>

            <p>
              Making travel simple, meaningful and unforgettable.
              Your next adventure is closer than you think.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#about">About Us</a>
            <a href="#destinations">Destinations</a>
            <a href="#packages">Holiday Packages</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h4>Popular Trips</h4>

            <a href="#packages">Bali</a>
            <a href="#packages">Maldives</a>
            <a href="#packages">Dubai</a>
            <a href="#destinations">Kashmir</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <p>hello@wanderly.com</p>
            <p>+91 98765 43210</p>
            <p>Kolkata, West Bengal</p>
            <p>India</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Wanderly. All rights reserved.
          </p>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;