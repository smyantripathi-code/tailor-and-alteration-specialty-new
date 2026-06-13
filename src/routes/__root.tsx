import { HeadContent, Link, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Tailor & Alteration Specialty — Lake Oswego, OR' },
      { name: 'description', content: 'Expert tailoring, alterations, and wedding dress fitting in Lake Oswego, Oregon. Walk-ins welcome.' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  ),
  component: () => <Outlet />,
})

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-brand">
          <span className="brand-icon">✂</span>
          <span>Tailor &amp; Alteration Specialty</span>
        </Link>
        <nav className="nav-links">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="tel:5036363454" className="btn-primary nav-cta">Call Us</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <p className="footer-brand">✂ Tailor &amp; Alteration Specialty</p>
          <p className="footer-tagline">Expert alterations in the heart of Lake Oswego since the early 2000s.</p>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <p>Tue – Fri: 9:30 AM – 6:00 PM</p>
          <p>Saturday: 9:30 AM – 5:00 PM</p>
          <p>Sun – Mon: Closed</p>
        </div>
        <div className="footer-col">
          <h4>Find Us</h4>
          <p>333 S State St, Suite K</p>
          <p>Lake Oswego, OR 97034</p>
          <p><a href="tel:5036363454">(503) 636-3454</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tailor &amp; Alteration Specialty. All rights reserved.</p>
      </div>
    </footer>
  )
}
