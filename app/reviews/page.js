import Link from 'next/link';
import TrustindexWidget from '@/components/TrustindexWidget';

export const metadata = {
  title: 'Reviews | All Tree & Garden Care Ltd',
  description: 'Customer reviews for All Tree & Garden Care Ltd — see what South London homeowners say about our landscaping, tree surgery and paving work.',
};

const reviews = [
  {
    initial: 'M',
    name: 'Mark Evans',
    meta: 'Google Review',
    text: 'Tyrone and his team have been amazing over the years on many of our projects — garden, landscaping, fencing and paving all done to a high standard and in a good timeframe. Years of experience between them and a no-problem attitude.',
  },
  {
    initial: 'T',
    name: 'Verified Customer',
    meta: 'TrustATrader Review',
    text: "The team have been excellent, both with communication and getting the job done in the garden. I've been really impressed and will definitely be using them again.",
  },
  {
    initial: 'V',
    name: 'Verified Customer',
    meta: 'TrustATrader Review',
    text: 'Great communication from start to finish. Friendly and professional team — all-round great service.',
  },
  {
    initial: 'V',
    name: 'Verified Customer',
    meta: 'TrustATrader Review',
    text: "The team working on the job were the nicest guys and hardest workers I've come across, and I honestly couldn't be happier with the result.",
  },
  {
    initial: 'E',
    name: 'Emma S.',
    meta: 'TrustATrader Review',
    text: 'The crew were friendly, and so fast! They always clarified things and amended their quote when needed. The work was done to a very high standard and they left everything spotless. Highly recommend.',
  },
  {
    initial: 'A',
    name: 'Avril',
    meta: 'TrustATrader Review',
    text: "Very efficient, tidy and polite. They kept to the estimate they quoted me and the whole team was professional from start to finish. I was really impressed and would use them again without hesitation.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* ① WHAT OUR CUSTOMERS SAY — written testimonials */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Testimonials</span>
          <h1 data-animate data-delay="1">What our customers say</h1>
          <p data-animate data-delay="2">Don&apos;t just take our word for it — here&apos;s what homeowners and businesses across South London think of our work.</p>
        </div>
      </section>

      <section className="section bg-cream-deep">
        <div className="container">
          <div className="grid grid-3">
            {reviews.map((r, i) => (
              <div className="review-card" key={i} data-animate data-delay={String((i % 3) + 1)}>
                <div className="quote-mark">&ldquo;</div>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <span className="review-avatar">{r.initial}</span>
                  <span className="meta"><strong>{r.name}</strong><span>{r.meta}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ② GOOGLE REVIEWS — intro heading before the live feed */}
      <section className="section" style={{ background: 'var(--cream-deep)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '0' }}>
            <span className="eyebrow center" data-animate>Google Reviews</span>
            <h2 data-animate data-delay="1">Rated 5 stars on Google</h2>
            <p data-animate data-delay="2">Read our latest verified Google reviews below — straight from the people we&apos;ve worked with across South West London.</p>
          </div>
        </div>
      </section>

      {/* ③ LIVE GOOGLE REVIEWS — Trustindex live widget */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <TrustindexWidget />
        </div>
      </section>

      {/* ④ JOIN OUR HAPPY CUSTOMERS — CTA band above footer */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Join our happy customers</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> 07515 695202</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* ⑤ FOOTER — rendered by the root layout, always last */}
    </>
  );
}
