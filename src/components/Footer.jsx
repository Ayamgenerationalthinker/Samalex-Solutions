export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--button-green)', color: 'var(--white)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora', marginBottom: '1rem', color: 'var(--primary-green)' }}>Samalex Solutions</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '300px' }}>
              Your Lasting Solution. Improving access to safe, affordable, and sustainable sanitation in Ghana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '1.5rem', fontFamily: 'Sora' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Our Solutions</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</a></li>
              <li><a href="/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '1.5rem', fontFamily: 'Sora' }}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="mailto:samalexsolution24@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Email Us</a></li>
              <li><a href="https://web.facebook.com/samalexsolutions1/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Facebook</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Samalex Solutions. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
