export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--primary-green)', color: 'var(--white)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora', marginBottom: '1rem', color: 'var(--accent-green)' }}>Samalex Solutions</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '300px' }}>
              Your Lasting Solution. Improving access to safe, affordable, and sustainable sanitation in Ghana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--white)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>About Us</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>Our Solutions</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>The ATOM Model</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>Project Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--white)' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
              <li>0243673937</li>
              <li>0244079924</li>
              <li>samalexsolution1@gmail.com</li>
              <li>Pokuase, Ga North, Ghana</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Samalex Solutions. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
