function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <p className="hero-subtitle">EXPLORE • DREAM • DISCOVER</p>

        <h1>
          Your next great
          <br />
          <span>adventure</span> starts here.
        </h1>

        <p className="hero-description">
          Discover breathtaking destinations, unforgettable experiences,
          and carefully crafted holiday packages made just for you.
        </p>

        <div className="hero-buttons">
          <a href="#packages" className="primary-button">
            Explore Packages
            <span>→</span>
          </a>

          <a href="#destinations" className="secondary-button">
            Discover Destinations
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="container hero-stats">
          <div>
            <strong>50+</strong>
            <span>Destinations</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>Happy Travelers</span>
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Traveler Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;