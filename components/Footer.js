import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="nav-logo-mark"><i data-lucide="leaf"></i></span>
              <strong>All Tree &amp; Garden Care Ltd</strong>
            </div>
            <p>London&apos;s trusted landscaping, tree care and paving specialists — over 10 years of experience.</p>
            <div className="footer-social">
              {/* INSTAGRAM: replace # with your Instagram profile URL */}
              <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              {/* FACEBOOK: replace # with your Facebook page URL */}
              <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <ul>
              <li>Mon – Sat: 7am – 8pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><i data-lucide="phone"></i> <a href="tel:07515695202">07515 695202</a></li>
              {/* EMAIL: replace with your real email address */}
              <li><i data-lucide="mail"></i> <a href="mailto:info@alltreeandgardencare.co.uk">info@alltreeandgardencare.co.uk</a></li>
              <li><i data-lucide="map-pin"></i> 1 Foss Rd, Tooting, London SW17 0TX</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 All Tree &amp; Garden Care Ltd &middot; 1 Foss Rd, Tooting, London SW17 0TX</p>
        </div>
      </div>
    </footer>
  );
}
