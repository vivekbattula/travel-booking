function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">

        <div className="about-images">
          <div className="about-image-large">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80"
              alt="Beautiful mountain lake destination"
            />
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
              alt="Tropical beach"
            />
          </div>

          <div className="experience-badge">
            <strong>10+</strong>
            <span>Years of<br />Experience</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT WANDERLY</p>

          <h2>
            We don't just plan trips.
            <br />
            <span>We create memories.</span>
          </h2>

          <p>
            At Wanderly, we believe that travel is more than visiting a
            destination. It's about discovering new cultures, meeting new
            people, and creating stories you'll remember for a lifetime.
          </p>

          <p>
            From relaxing beach escapes to adventurous mountain journeys,
            our team creates carefully planned holidays that match your
            travel style, budget, and expectations.
          </p>

          <div className="about-features">
            <div>
              <span className="feature-icon">✦</span>
              <div>
                <h4>Personalized Trips</h4>
                <p>Journeys designed around you.</p>
              </div>
            </div>

            <div>
              <span className="feature-icon">✓</span>
              <div>
                <h4>Trusted Experiences</h4>
                <p>Quality stays and experiences.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="text-button">
            Start Planning <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;