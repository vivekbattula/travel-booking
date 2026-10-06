import { destinations } from "../data/packages";

function Destinations() {
  return (
    <section className="destinations section" id="destinations">
      <div className="container">

        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE THE WORLD</p>

            <h2>
              Popular <span>Destinations</span>
            </h2>
          </div>

          <p>
            From tropical beaches to snowy mountains, discover places
            that are worth adding to your bucket list.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.id}>
              <img
                src={destination.image}
                alt={destination.name}
              />

              <div className="destination-overlay"></div>

              <div className="destination-info">
                <div>
                  <p>{destination.country}</p>
                  <h3>{destination.name}</h3>
                </div>

                <span className="destination-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Destinations;