import "./ContactPage.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container contact-grid">

        <div className="contact-info">
          <span className="section-eyebrow">CONTACT US</span>

          <h2>Let's Build Something Great Together</h2>

          <p>
            Get in touch for structural design, consultancy,
            supervision works, interior design and construction projects.
          </p>

          <div className="contact-item">
            <strong>Phone</strong>
            <p>+91 99259 22320</p>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <p>shilp24115@gmail.com</p>
          </div>

          <div className="contact-item">
            <strong>Address</strong>
            <p>OFFICE NO:433 WORD 3/A, VANDNA GARBICHOK,RAMBAG ROAD,ADIPUR</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Write your message..."
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}