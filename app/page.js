import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow" data-animate>Tooting &amp; South West London</span>
            <h1 data-animate data-delay="1">Your outdoor space,<br /><em>transformed properly</em></h1>
            <p className="hero-sub" data-animate data-delay="2">London&apos;s trusted landscaping, tree care and paving specialists — over 10 years of experience. We transform gardens for domestic and commercial customers across South West London.</p>
            <div className="hero-actions" data-animate data-delay="3">
              <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> Call for a Free Quote</a>
              <Link href="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="mouse"></span>
          Scroll
        </div>
      </section>

      {/* ═══════ INTRO + STATS ═══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>Welcome</span>
            <h2 data-animate data-delay="1">A family-run team you can trust</h2>
            <p data-animate data-delay="2">All Tree &amp; Garden Care is a family-run business based in Tooting, SW17. We&apos;ve been working on gardens and outdoor spaces for domestic and commercial customers across London for over 10 years. We care about the details, we use quality materials and we&apos;re happy to take on any size of job.</p>
          </div>
          <div className="tiles tiles-2" style={{ marginTop: '8px', marginBottom: '60px' }}>
            <div className="text-tile feature-tile" data-animate data-delay="1" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="sparkles"></i> Every project is unique</span>
              <h3>Eye-catching, functional and easy to maintain</h3>
              <p>Every job gets its own personal touch. Whether it&apos;s a Victorian mosaic path or a full garden overhaul, we don&apos;t do cookie-cutter. You&apos;ll get something that actually suits you.</p>
            </div>
            <div className="text-tile feature-tile" data-animate data-delay="2" style={{ textAlign: 'center' }}>
              <span className="tile-tag" style={{ justifyContent: 'center' }}><i data-lucide="check-check"></i> Free, no-obligation quotes</span>
              <h3>Straight advice, clear prices, no surprises</h3>
              <p>We come out to you, have a look at what you need and give you a proper price. No hidden costs, no hard sell. Just give us a call and we&apos;ll take it from there.</p>
            </div>
          </div>
        </div>
        <div className="stats section-tight">
          <div className="container">
            <div className="stats-grid">
              <div data-animate data-delay="1">
                <div className="stat-num"><span data-count="10">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Years&apos; Experience</div>
              </div>
              <div data-animate data-delay="2">
                <div className="stat-num"><span data-count="95">0</span><span className="suffix">+</span></div>
                <div className="stat-label">5-Star Reviews</div>
              </div>
              <div data-animate data-delay="3">
                <div className="stat-num"><span data-count="4">0</span><span className="suffix">.95/5</span></div>
                <div className="stat-label">TrustATrader Rating</div>
              </div>
              <div data-animate data-delay="4">
                <div className="stat-num"><span data-count="12">0</span><span className="suffix">+</span></div>
                <div className="stat-label">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES OVERVIEW ═══════ */}
      <section className="section bg-cream-deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>What We Do</span>
            <h2 data-animate data-delay="1">A complete outdoor transformation service</h2>
            <p data-animate data-delay="2">From tree surgery and paving to full landscape design — every job gets the same care and quality finish.</p>
          </div>
          <div className="grid grid-3">
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="shovel"></i></div>
              <h3>Landscaping &amp; Garden Design</h3>
              <p>Full garden transformations — design, build, plant and finish. We make outdoor spaces that look great and work for your lifestyle.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="tree-deciduous"></i></div>
              <h3>Tree Surgery &amp; Removal</h3>
              <p>NPTC-licensed felling, crown reductions, pruning and stump grinding — all carried out safely and cleanly.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="grid-2x2"></i></div>
              <h3>Patios &amp; Natural Stone Paving</h3>
              <p>Indian sandstone, porcelain, Victorian mosaic and more — laid properly to last, with clean, precise finishes.</p>
            </div>
            <div className="card" data-animate data-delay="1">
              <div className="card-icon"><i data-lucide="wheat"></i></div>
              <h3>Artificial &amp; Natural Lawns</h3>
              <p>Premium artificial grass or real turf installed to a perfect, lush finish — low maintenance or the real thing.</p>
            </div>
            <div className="card" data-animate data-delay="2">
              <div className="card-icon"><i data-lucide="layers"></i></div>
              <h3>Block Paving &amp; Driveways</h3>
              <p>Block paving, tarmac, resin and concrete driveways built on solid foundations — built to last and look great.</p>
            </div>
            <div className="card" data-animate data-delay="3">
              <div className="card-icon"><i data-lucide="fence"></i></div>
              <h3>Fencing, Decking &amp; Raised Beds</h3>
              <p>Timber fencing, decking, sleeper retaining walls and raised beds — everything built solidly and to your specification.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '46px' }} data-animate>
            <Link href="/services" className="btn btn-dark">View All 12 Services <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHY US ═══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow center" data-animate>Why All Tree &amp; Garden Care</span>
            <h2 data-animate data-delay="1">The difference is in the details</h2>
          </div>
          <div className="grid grid-4">
            <div className="feature" data-animate data-delay="1">
              <div className="feature-icon"><i data-lucide="award"></i></div>
              <h3>NPTC Licensed</h3>
              <p>Qualified, insured tree surgeons — the industry standard for safe, professional work.</p>
            </div>
            <div className="feature" data-animate data-delay="2">
              <div className="feature-icon"><i data-lucide="users"></i></div>
              <h3>Family-Run</h3>
              <p>A tight-knit team that takes pride in its work — domestic and commercial, big and small.</p>
            </div>
            <div className="feature" data-animate data-delay="3">
              <div className="feature-icon"><i data-lucide="map-pin"></i></div>
              <h3>Based in Tooting</h3>
              <p>Covering all of South West London and surrounding areas from our base in SW17.</p>
            </div>
            <div className="feature" data-animate data-delay="4">
              <div className="feature-icon"><i data-lucide="badge-pound-sterling"></i></div>
              <h3>Free Quotes</h3>
              <p>No-obligation quotes with honest pricing and no hidden extras — always.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta section">
        <div className="container">
          <h2 data-animate>Ready to transform your outdoor space?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — get in touch today.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> 07515 695202</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
