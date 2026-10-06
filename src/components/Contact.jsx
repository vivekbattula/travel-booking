import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">

        <div className="contact-info">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's plan your
            <br />
            <span>next adventure.</span>
          </h2>

          <p className="contact-description">
            Tell us where you want to go and what kind of experience
            you're looking for. Our travel experts will help you plan
            the perfect getaway.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">✉</div>
              <div>
                <small>Email us</small>
                <p>hello@wanderly.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">☎</div>
              <div>
                <small>Call us</small>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">⌖</div>
              <div>
                <small>Visit us</small>
                <p>Kolkata, West Bengal, India</p>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-form-container">

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h3>Thank you!</h3>

              <p>
                Your inquiry has been submitted successfully.
                Our travel expert will get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="primary-button"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Destination</label>

                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select destination</option>
                    <option value="Bali">Bali</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your trip</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us your preferred dates, budget or anything else..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Inquiry
                <span>→</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

export default Contact;