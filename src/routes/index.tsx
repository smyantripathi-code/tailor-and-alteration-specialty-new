import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const reviews = [
  {
    name: 'Danielle M.',
    stars: 5,
    text: 'I brought in a dress that was about two sizes too big and had beautiful beading on a mesh overlay. They got it to fit perfectly for a very reasonable rate.',
  },
  {
    name: 'Local Guide',
    stars: 5,
    text: 'Absolutely the kindest and most professional business owners in town. Been here twice for alterations and the service is excellent.',
  },
  {
    name: 'Unilocal Reviewer',
    stars: 5,
    text: 'My daughter\'s wedding dress was delivered late and a size smaller than expected. What might have been a disaster turned into a fairytale — meticulous detail at a reasonable price.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Lake Oswego, Oregon</p>
            <h1>Every garment, fitted to you.</h1>
            <p className="hero-sub">
              From a simple hem to a full wedding dress transformation, Tailor &amp; Alteration Specialty delivers precise, personal workmanship at prices that make sense.
            </p>
            <div className="hero-actions">
              <a href="tel:5036363454" className="btn-primary">Call (503) 636-3454</a>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
            <div className="hero-meta">
              <span className="stars">★★★★★</span>
              <span>4.5 · 70 reviews on Google</span>
              <span className="dot">·</span>
              <span>Walk-ins welcome</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hours-card">
              <h3>Hours &amp; Location</h3>
              <table className="hours-table">
                <tbody>
                  <tr><td>Tue – Fri</td><td>9:30 AM – 6:00 PM</td></tr>
                  <tr><td>Saturday</td><td>9:30 AM – 5:00 PM</td></tr>
                  <tr><td>Sun – Mon</td><td>Closed</td></tr>
                </tbody>
              </table>
              <div className="hours-divider" />
              <p className="hours-addr">333 S State St, Suite K<br />Lake Place · Lake Oswego, OR 97034</p>
              <a
                href="https://maps.google.com/?q=333+S+State+St+K+Lake+Oswego+OR+97034"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline full-width"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="services-snap section">
        <div className="container">
          <p className="section-label">What we do</p>
          <h2>Alterations for every occasion</h2>
          <div className="service-grid">
            {[
              { icon: '👗', title: 'Wedding Dresses', desc: 'Rush timelines, complex beading, complete resizing — we handle it all with precision.' },
              { icon: '🎩', title: 'Suits & Formal Wear', desc: 'Chest, sleeve, waist, hem — Italian suits to everyday blazers, expertly fitted.' },
              { icon: '👖', title: 'Everyday Clothing', desc: 'Pants, jeans, dresses, and more. Bring anything in; walk-ins always welcome.' },
              { icon: '🪡', title: 'Repairs & Zippers', desc: 'Ripped seams, broken zippers, torn linings — no job is too small.' },
              { icon: '🛋', title: 'Home Furnishings', desc: 'Cushion covers, draperies, and furniture covers made or fitted to order.' },
              { icon: '🧥', title: 'Specialty Garments', desc: 'Shearling coats, leather, vintage — we work with materials others turn away.' },
            ].map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-outline">See full service list</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section section">
        <div className="container">
          <p className="section-label">What people say</p>
          <h2>Trusted by the Lake Oswego community</h2>
          <div className="review-grid">
            {reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">"{r.text}"</p>
                <p className="review-name">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2>Ready for the perfect fit?</h2>
            <p>Walk in during business hours or call ahead — we'll take care of the rest.</p>
          </div>
          <a href="tel:5036363454" className="btn-primary btn-large">Call (503) 636-3454</a>
        </div>
      </section>
    </>
  )
}
