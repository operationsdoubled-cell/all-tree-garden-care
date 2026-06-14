import Link from 'next/link';

export const metadata = {
  title: 'Services | All Tree & Garden Care Ltd',
  description: 'Full range of landscaping, tree surgery, paving, driveways, fencing and garden services in Tooting and South West London. Call 07515 695202.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595351298020-038700609878?auto=format&fit=crop&w=1800&q=80')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Services</span>
          <h1 data-animate data-delay="1">Everything your outdoor space needs</h1>
          <p data-animate data-delay="2">From tree surgery to Victorian mosaic paths — no job too big or too small.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-row" data-animate>
            <div className="num">01</div>
            <div>
              <h3>Landscape Gardening &amp; Garden Design</h3>
              <p>We design and build complete outdoor spaces from scratch — combining planting, hard landscaping, lawns, raised beds and features. We work with your space, your budget and how you want to use your garden. Every project gets its own unique twist, whether it&apos;s a low-maintenance retreat or a bold statement garden. We take you from the first conversation right through to the finished result.</p>
            </div>
            <div className="chev"><i data-lucide="shovel"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">02</div>
            <div>
              <h3>Tree Surgery &amp; Tree Removal</h3>
              <p>Our NPTC Chainsaw Licensed surgeons carry out all aspects of tree work safely and professionally — felling, crown reductions and lifts, selective pruning, deadwooding, hedge removal and stump grinding. From a small garden tree to a large mature specimen, we advise on the best course of action and leave the site completely clear. We are fully insured for all tree work.</p>
            </div>
            <div className="chev"><i data-lucide="tree-deciduous"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">03</div>
            <div>
              <h3>Patios &amp; Natural Stone Paving</h3>
              <p>We specialise in Indian sandstone, porcelain, limestone and natural stone patio installation — laid on a proper mortar bed with precise pointing for a finish that lasts. Whether you want a contemporary clean-line patio or a more traditional look, we&apos;ll help you choose the right stone for your garden and budget. Existing paving repointing and restoration also available.</p>
            </div>
            <div className="chev"><i data-lucide="grid-2x2"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">04</div>
            <div>
              <h3>Artificial &amp; Natural Lawns / Turfing</h3>
              <p>Whether you want the look and feel of real grass or a low-maintenance artificial alternative, we deliver both to an excellent standard. We prepare the ground properly — removing old growth, levelling, and laying a quality sub-base — then install premium artificial grass or real turf to a neat, professional finish. We also remove invasive species such as Japanese knotweed and bamboo before laying.</p>
            </div>
            <div className="chev"><i data-lucide="wheat"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">05</div>
            <div>
              <h3>Block Paving &amp; Driveways</h3>
              <p>A new driveway adds real kerb appeal and long-term value. We install block paving, tarmac, concrete, resin-bound and gravel driveways, as well as driveway gates and edging. Every job starts with proper excavation and sub-base preparation — the foundation that makes the real difference. We talk you through your options and give you a clear, honest price from the outset.</p>
            </div>
            <div className="chev"><i data-lucide="layers"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">06</div>
            <div>
              <h3>Tarmacing</h3>
              <p>Tarmac is a durable, cost-effective and smart-looking surface for driveways, paths and commercial areas. We lay tarmac to a proper depth with appropriate edging and falls for drainage — whether you need a fresh tarmac surface or a patch repair on an existing one. Available in standard black or coloured tarmac finishes.</p>
            </div>
            <div className="chev"><i data-lucide="construction"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">07</div>
            <div>
              <h3>Fencing</h3>
              <p>We supply and install a full range of fencing — close-board, trellis, featherboard, picket and decorative panel styles — in timber or low-maintenance composite. Posts are set properly in concrete so the fence stands firm for years. We&apos;ll advise on the right style and height to suit your garden, your neighbours and your budget. Old fence removal and disposal included.</p>
            </div>
            <div className="chev"><i data-lucide="fence"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">08</div>
            <div>
              <h3>Raised Beds, Retaining Walls &amp; Sleeper Work</h3>
              <p>Timber sleepers, brick and stone retaining walls, raised planters and garden steps all add structure, interest and usable space to a garden. We design and build these features to complement your overall garden design — from simple sleeper edging to multi-level terraced gardens with steps and planting. All work is properly supported and drained.</p>
            </div>
            <div className="chev"><i data-lucide="square-stack"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">09</div>
            <div>
              <h3>Decking</h3>
              <p>A well-built deck transforms the way you use your garden. We install timber and composite decking — from simple ground-level platforms to raised multi-level structures with steps and balustrades. All joinery is treated and fixed properly, with hidden fixings where possible for a clean finish. We also carry out repairs and re-oiling of existing decks.</p>
            </div>
            <div className="chev"><i data-lucide="layout-panel-top"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">10</div>
            <div>
              <h3>Victorian Mosaic &amp; Period Tile Front Paths</h3>
              <p>We specialise in the restoration and installation of traditional Victorian black and white mosaic tile paths — a distinctive feature of many period homes across South West London. We source authentic-style tiles and lay them on a proper mortar bed with precision pointing. We also rebuild garden walls and piers to complement the path. A service few landscapers offer — and one we take real pride in.</p>
            </div>
            <div className="chev"><i data-lucide="gem"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">11</div>
            <div>
              <h3>Garden Maintenance &amp; Clearance</h3>
              <p>Regular or one-off garden maintenance including lawn mowing and edging, hedge trimming, weeding, shrub pruning, leaf clearance and full garden clearances. We work around your schedule and always leave everything spotless. Pressure washing of patios, paths and driveways also available — quick results, huge difference.</p>
            </div>
            <div className="chev"><i data-lucide="sprout"></i></div>
          </div>

          <div className="service-row" data-animate>
            <div className="num">12</div>
            <div>
              <h3>Drainage</h3>
              <p>Poor drainage causes waterlogging, paving subsidence and damp problems. We install French drains, soakaways, channel drainage, linear drainage and ACO drainage systems to solve waterlogging issues in gardens and driveways. All drainage work is designed to comply with local regulations and is installed with the correct falls and outlets.</p>
            </div>
            <div className="chev"><i data-lucide="droplets"></i></div>
          </div>

        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Not sure what you need?</h2>
          <p data-animate data-delay="1">Free, no-obligation quotes — give us a call and we&apos;ll recommend the best approach for your project.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> 07515 695202</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
