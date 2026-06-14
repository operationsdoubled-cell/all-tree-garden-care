import Link from 'next/link';

export const metadata = {
  title: 'Gallery | All Tree & Garden Care Ltd',
  description: 'Gallery of recent work by All Tree & Garden Care Ltd — patios, lawns, driveways, decking and landscaping across South West London.',
};

/* HOW TO ADD YOUR PHOTOS
   1. Save your images into the /public/images/ folder.
   2. Name them: gallery-1.jpg, gallery-2.jpg … gallery-5.jpg
      (matching the filenames below).
   3. To add more, copy any object in the list and fill in the details.
      Set tall: true on portrait photos to make them span two rows. */
const photos = [
  {
    full: '/images/gallery-1.jpg',
    src: '/images/gallery-1.jpg',
    alt: 'Indian sandstone patio with raised artificial lawn and brick retaining wall',
    label: 'Indian Sandstone Patio & Raised Lawn — Tooting',
    tall: true,
  },
  {
    full: '/images/gallery-2.jpg',
    src: '/images/gallery-2.jpg',
    alt: 'Artificial lawn with sandstone patio and planted borders',
    label: 'Artificial Lawn & Planted Borders',
    tall: true,
  },
  {
    full: '/images/gallery-3.jpg',
    src: '/images/gallery-3.jpg',
    alt: 'Natural stone paving with timber sleeper raised beds and drainage channel',
    label: 'Natural Stone Paving & Sleeper Raised Beds',
    tall: false,
  },
  {
    full: '/images/gallery-4.jpg',
    src: '/images/gallery-4.jpg',
    alt: 'Restored Victorian black and white mosaic front path with rebuilt garden wall',
    label: 'Victorian Mosaic Front Path',
    tall: true,
  },
  {
    full: '/images/gallery-5.jpg',
    src: '/images/gallery-5.jpg',
    alt: 'Raised timber decking and lawn — rear garden transformation',
    label: 'Raised Timber Decking & Lawn',
    tall: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}></div>
        <div className="container">
          <span className="eyebrow center" data-animate>Our Recent Work</span>
          <h1 data-animate data-delay="1">Work we&apos;re proud of</h1>
          <p data-animate data-delay="2">A selection of recent projects across South West London. Click any photo to take a closer look.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div
                key={i}
                className={p.tall ? 'gallery-item tall' : 'gallery-item'}
                data-full={p.full}
                data-animate="scale"
                data-delay={String((i % 3) + 1)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="overlay"><span><i data-lucide="maximize-2"></i> {p.label}</span></div>
              </div>
            ))}
          </div>

          <div className="note-box" data-animate>
            <strong>To add your photos:</strong> save your images into <code>/public/images/</code> named <code>gallery-1.jpg</code> through <code>gallery-5.jpg</code>. They will appear automatically. Add more by editing the <code>photos</code> list at the top of this file.
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <h2 data-animate>Like what you see?</h2>
          <p data-animate data-delay="1">Get in touch to discuss what we can do for your outdoor space.</p>
          <div className="cta-actions" data-animate data-delay="2">
            <a href="tel:07515695202" className="btn btn-brass"><i data-lucide="phone"></i> 07515 695202</a>
            <Link href="/contact" className="btn btn-ghost">Send a Message <i data-lucide="arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}
