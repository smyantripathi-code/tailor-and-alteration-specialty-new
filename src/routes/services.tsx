import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

const serviceCategories = [
  {
    heading: 'Wedding & Formal',
    items: [
      { name: 'Wedding dress alteration', detail: 'Full resizing, taking in or letting out, adding structure, bustle installation' },
      { name: 'Bridesmaid dresses', detail: 'Hemming, waist adjustment, strap shortening' },
      { name: 'Suits & tuxedos', detail: 'Sleeve length, trouser break, waist suppression, shoulder adjustment' },
      { name: 'Formal gowns & evening wear', detail: 'Complex beading and overlay preservation, shape fitting' },
    ],
  },
  {
    heading: 'Everyday Clothing',
    items: [
      { name: 'Pants & jeans hemming', detail: 'Standard, cuffed, and tapered hems' },
      { name: 'Waist & seat adjustment', detail: 'Taking in or letting out at the waist and seat' },
      { name: 'Dress & skirt alterations', detail: 'Hemming, dart adjustment, side seam resizing' },
      { name: 'Shirts & blouses', detail: 'Side seams, sleeve length, collar adjustments' },
    ],
  },
  {
    heading: 'Repairs & Fixes',
    items: [
      { name: 'Zipper replacement', detail: 'Pants, dresses, jackets, bags' },
      { name: 'Seam repair', detail: 'Ripped seams, lining tears, stress point reinforcement' },
      { name: 'Patch & invisible mend', detail: 'Inside-out patching on suits, trousers, and outerwear' },
      { name: 'Button & closure replacement', detail: 'Buttons, snaps, hooks & eyes' },
    ],
  },
  {
    heading: 'Specialty & Home',
    items: [
      { name: 'Leather & shearling', detail: 'Heavy coats and specialty materials handled with care' },
      { name: 'Cushion covers', detail: 'Custom covers for furniture cushions' },
      { name: 'Draperies', detail: 'Hemming, lining, and fitting curtains and drapes' },
      { name: 'Furniture covers', detail: 'Fitted slipcovers and protective covers' },
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow"><Link to="/">Home</Link> / Services</p>
          <h1>Our Services</h1>
          <p className="page-hero-sub">
            We work on anything that wears — from intricate wedding gowns to worn-in jeans. Every quote is given before we start, and every job is done right.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-full">
            {serviceCategories.map((cat) => (
              <div key={cat.heading} className="service-category">
                <h2 className="cat-heading">{cat.heading}</h2>
                <div className="cat-items">
                  {cat.items.map((item) => (
                    <div key={item.name} className="cat-item">
                      <div className="cat-item-name">{item.name}</div>
                      <div className="cat-item-detail">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <h3>Pricing</h3>
            <p>We provide a quote before any work begins — no surprises. Pricing reflects the complexity of the job and materials involved. Customers consistently call our rates <em>reasonable</em> and <em>fair</em>.</p>
            <a href="tel:5036363454" className="btn-primary">Call for a quote: (503) 636-3454</a>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2>Walk-ins are always welcome.</h2>
            <p>Tue – Fri 9:30–6, Sat 9:30–5. No appointment needed for most jobs.</p>
          </div>
          <a href="https://maps.google.com/?q=333+S+State+St+K+Lake+Oswego+OR+97034" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">Get Directions</a>
        </div>
      </section>
    </>
  )
}
