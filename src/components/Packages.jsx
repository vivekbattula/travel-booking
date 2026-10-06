import { packages } from "../data/packages";

function Packages() {
  return (
    <section className="packages section" id="packages">
      <div className="container">

        <div className="section-heading">
          <div>
            <p className="section-label">TRAVEL YOUR WAY</p>

            <h2>
              Featured <span>Holiday Packages</span>
            </h2>
          </div>

          <p>
            Carefully designed experiences with comfortable stays,
            exciting activities and unforgettable moments.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.id}>

              <div className="package-image">
                <img src={item.image} alt={item.title} />

                <span className="package-duration">
                  {item.duration}
                </span>
              </div>

              <div className="package-content">

                <p className="package-location">
                  📍 {item.location}
                </p>

                <h3>{item.title}</h3>

                <p className="package-description">
                  {item.description}
                </p>

                <div className="package-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="package-bottom">

                  <div>
                    <small>Starting from</small>
                    <strong>{item.price}</strong>
                  </div>

                  <a href="#contact" className="package-button">
                    View Package →
                  </a>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Packages;