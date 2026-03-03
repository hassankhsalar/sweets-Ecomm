"use client"
import React from 'react';

/**
 * Footer component for Next.js (JavaScript) with a demo image background and red tint.
 * Replace the placeholder image URL with your own.
 */
const Footer = () => {
  return (
    <footer
      style={{
        // Relative positioning to allow the overlay to cover the background
        position: 'relative',
        width: '100%',
        // Background image: demo image — replace with your actual image path/URL
        backgroundImage: 'url("/bg.png")',
        backgroundSize: '600px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
        // Ensure content is readable and footer has enough height
        color: '#fff',
        padding: '3rem 1.5rem',
        // Margin top just for spacing in demo (remove or adjust as needed)
        marginTop: 'auto',
      }}
    >
      {/* Red tint overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(77, 4, 6, 0.95)', // Red with 60% opacity — adjust to taste
          zIndex: 1,
        }}
      ></div>

      {/* Footer content - sits above the overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem',
        }}
      >
        {/* Column 1: Logo / Brand */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Your Brand
          </h3>
          <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
            Crafting digital experiences with a touch of red.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ flex: '1 1 160px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/" style={{ color: '#fff', textDecoration: 'none', opacity: 0.9, hover: { opacity: 1 } }}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/about" style={{ color: '#fff', textDecoration: 'none', opacity: 0.9 }}>
                About
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/services" style={{ color: '#fff', textDecoration: 'none', opacity: 0.9 }}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/contact" style={{ color: '#fff', textDecoration: 'none', opacity: 0.9 }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social / Contact */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Connect</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>📧 hello@example.com</li>
            <li style={{ marginBottom: '0.5rem' }}>📞 +1 (555) 123-4567</li>
            <li style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {/* Replace with your actual social links */}
              <a href="#" aria-label="Twitter" style={{ color: '#fff', fontSize: '1.5rem' }}>𝕏</a>
              <a href="#" aria-label="LinkedIn" style={{ color: '#fff', fontSize: '1.5rem' }}>in</a>
              <a href="#" aria-label="GitHub" style={{ color: '#fff', fontSize: '1.5rem' }}>⌨️</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Space for your custom link — just replace the href and text */}
        <div style={{ flex: '1 1 160px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Your Link</h4>
          <p style={{ marginBottom: '0.5rem' }}>
            <a
              href="https://example.com/your-demo"  // <--- REPLACE WITH YOUR LINK
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                fontWeight: 500,
              }}
            >
              → Add your demo link here
            </a>
          </p>
          {/* Optional additional description */}
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            This space is reserved for your custom link or message.
          </p>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '2rem auto 0',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center',
          fontSize: '0.9rem',
          opacity: 0.9,
        }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;