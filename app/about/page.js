import Link from 'next/link';

export const metadata = {
  title: 'About | All Tree & Garden Care Ltd',
  description: 'Family-run landscaping and tree care company based in Tooting, SW17. Over 10 years transforming gardens and outdoor spaces across London.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>About Us</span>
          <h1 data-animate data-delay="1">A little about who we are</h1>
          <p data-animate data-delay="2">The story, the values and the people behind every project we take on.</p>
        </div>
      </section>

      {/* ═══════ STORY ═══════ */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media placeholder" data-animate="left">
              {/* PHOTO: replace this block with a real team photo —
                  put your image in /public/images and use:
                  <div className="split-media" data-animate="left"><img src="/images/team.jpg" alt="The All Tree & Garden Care team" /></div> */}
              <i data-lucide="tree-deciduous"></i>
              <div className="badge"><strong>10+ yrs</strong><span>transforming London gardens</span></div>
            </div>
            <div data-animate="right">
              <span className="eyebrow">Our Story</span>
              <h2 style={{ marginBottom: '24px' }}>Family-run, London-based, proud of every job</h2>
              <div className="tiles">
                <div className="text-tile" data-animate data-delay="1">
                  <span className="tile-tag"><i data-lucide="sprout"></i> Who we are</span>
                  <p>All Tree &amp; Garden Care Ltd is a family-run landscaping and tree care company based in Tooting, South West London, with more than 10 years of experience. We transform outdoor spaces for both domestic and commercial customers across London and the surrounding areas.</p>
                </div>
                <div className="text-tile" data-animate data-delay="2">
                  <span className="tile-tag"><i data-lucide="sparkles"></i> How we work</span>
                  <p>Our team takes pride in attention to detail, high-quality materials and a friendly, no-job-too-big-or-too-small attitude. Every project gets its own unique twist — eye-catching, functional and easy to maintain.</p>
                </div>
                <div className="text-tile feature-tile" data-animate data-delay="3">
                  <span className="tile-tag"><i data-lucide="heart-handshake"></i> Our promise</span>
                  <p>We offer free, no-obligation quotes and honest advice on every enquiry. We come to you, take a proper look at your space, and give you a clear price with no hidden extras.</p>
                  <p style={{ marginTop: '12px' }}><strong>— Tyrone Brown, Owner</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VALUES ═══════ */}
      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>What We Stand For</span>
            <h2 data-animate data-delay="1">Values that guide every job</h2>
          </div>
          <div className="grid grid-4">
            <div className="value-card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="shield-check"></i></div>
              <h3>Safety First</h3>
              <p>All our tree surgeons are NPTC Chainsaw Licensed and fully insured. We work to the highest safety standards on every job.</p>
            </div>
            <div className="value-card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="handshake"></i></div>
              <h3>Honest &amp; Transparent</h3>
              <p>Straightforward quotes, no surprise charges, and honest advice about what your project actually needs.</p>
            </div>
            <div className="value-card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="clock"></i></div>
              <h3>Reliable &amp; Punctual</h3>
              <p>We respect your time. We turn up when we say we will, and keep you in the loop throughout.</p>
            </div>
            <div className="value-card" data-animate data-delay="4">
              <div className="card-icon"><i data-lucide="award"></i></div>
              <h3>Quality Materials</h3>
              <p>We only use high-quality materials on every job — because the right materials are what make the result last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ COVERAGE ═══════ */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <span className="eyebrow center" data-animate>Where We Work</span>
          <h2 data-animate data-delay="1">Tooting &amp; all of South West London</h2>
          <p className="lead" data-animate data-delay="2">We&apos;re based in <strong>Tooting, London SW17</strong> and serve customers across South West London and surrounding areas — including Wandsworth, Streatham, Balham, Clapham, Morden, Wimbledon and beyond. Not sure if we cover your area? Just give us a call.</p>
          <div data-animate data-delay="3" style={{ marginTop: '24px' }}>
            <a href="tel:07515695202" className="btn btn-dark"><i data-lucide="phone"></i> 07515 695202</a>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Let&apos;s work on your project together</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch for a friendly chat about what you need.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> 07515 695202</a>
            <Link href="/contact" className="btn btn-ghost">Contact Us <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
