function WhyChooseUs() {
  const features = [
    {
      icon: "✦",
      title: "Personalized Journeys",
      description:
        "Every trip is carefully designed around your interests, preferences and budget.",
    },
    {
      icon: "₹",
      title: "Best Value",
      description:
        "Enjoy carefully selected stays and experiences at prices that offer great value.",
    },
    {
      icon: "24",
      title: "24/7 Support",
      description:
        "Our travel experts are available whenever you need help during your journey.",
    },
    {
      icon: "✓",
      title: "Trusted Experiences",
      description:
        "We work with reliable travel partners to make every journey comfortable and memorable.",
    },
  ];

  return (
    <section className="why-us section">
      <div className="container">

        <div className="why-heading">
          <p className="section-label">WHY WANDERLY</p>

          <h2>
            Travel more.
            <br />
            <span>Worry less.</span>
          </h2>

          <p>
            We take care of the details so you can focus on what really
            matters — enjoying your journey.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-card-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;