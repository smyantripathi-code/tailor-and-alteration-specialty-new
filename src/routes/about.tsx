import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

export default function About() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow"><Link to="/">Home</Link> / About</p>
          <h1>About Us</h1>
          <p className="page-hero-sub">
            A family-owned shop in the heart of Lake Oswego, trusted by the community for expert tailoring and alterations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-story">
            <h2>Down to earth. Exceptionally skilled.</h2>
            <p>
              Tailor &amp; Alteration Specialty is a small, family-run business located at Lake Place in Lake Oswego. We've been the go-to alteration shop for residents across Lake Oswego, West Linn, and the greater Portland area for years — and our neighbors keep coming back.
            </p>
            <p>
              We specialize in wedding dress alterations and formal wear, but there's very little we won't take on. Shearling coats, Italian suits, leather, and complex beaded overlays are all in a day's work. If you've got something you care about and need it done right, bring it in.
            </p>
            <p>
              Every job gets a quote upfront. We take pride in honest pricing and honest work — you'll know what you're paying before we pick up a needle.
            </p>

            <blockquote className="pull-quote">
              "Nicest people who are down to earth and know their stuff."
            </blockquote>

            <h2>Come see us</h2>
            <p>
              Walk-ins are welcome Tuesday through Saturday. No appointment needed for most alterations. For large or time-sensitive jobs — like wedding dresses — we recommend calling ahead so we can give you our full attention.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="contact-card">
              <h3>Contact &amp; Location</h3>
              <div className="contact-row">
                <span className="contact-label">Address</span>
                <span>333 S State St, Suite K<br />Lake Place<br />Lake Oswego, OR 97034</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Phone</span>
                <a href="tel:5036363454">(503) 636-3454</a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Email</span>
                <a href="mailto:Alteration3454@gmail.com">Alteration3454@gmail.com</a>
              </div>
              <div className="hours-divider" />
              <h4>Hours</h4>
              <table className="hours-table">
                <tbody>
                  <tr><td>Tuesday – Friday</td><td>9:30 AM – 6:00 PM</td></tr>
                  <tr><td>Saturday</td><td>9:30 AM – 5:00 PM</td></tr>
                  <tr><td>Sunday – Monday</td><td>Closed</td></tr>
                </tbody>
              </table>
              <div className="hours-divider" />
              <a
                href="https://maps.google.com/?q=333+S+State+St+K+Lake+Oswego+OR+97034"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline full-width"
              >
                Get Directions
              </a>
            </div>

            <div className="rating-card">
              <div className="rating-number">4.5</div>
              <div className="rating-stars">★★★★★</div>
              <p>70 reviews on Google</p>
              <a
                href="https://www.google.com/maps/search/Tailor+%26+Alteration+Specialty+333+S+State+St+Lake+Oswego+OR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline full-width"
              >
                Read Reviews
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
