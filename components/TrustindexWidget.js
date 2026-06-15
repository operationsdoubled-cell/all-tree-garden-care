'use client';

import { useEffect, useRef } from 'react';

export default function TrustindexWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject the script inside this container so Trustindex
    // finds and renders into the .trustindex-widget div above it,
    // rather than appending itself at the end of <body>.
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?3fa0d1c74ba3319b71362fd190d';
    script.async = true;
    script.defer = true;
    container.appendChild(script);

    return () => {
      if (container.contains(script)) container.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Trustindex scans for .trustindex-widget and renders into it */}
      <div
        className="trustindex-widget"
        data-widget-url="https://cdn.trustindex.io/api/?3fa0d1c74ba3319b71362fd190d"
      ></div>
    </div>
  );
}
