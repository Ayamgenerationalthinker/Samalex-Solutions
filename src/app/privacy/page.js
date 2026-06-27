import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Samalex Solutions',
  description: 'Privacy Policy for Samalex Solutions',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 className="section-title" style={{ color: 'var(--primary-green)', marginBottom: '2rem' }}>Privacy Policy</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-dark)', lineHeight: 1.8 }}>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginTop: '1rem' }}>1. Information We Collect</h2>
              <p>
                When you contact us through our website, we may collect personal information such as your name, email address, phone number, and organization details. This information is collected solely to respond to your inquiries and facilitate partnerships or projects.
              </p>

              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginTop: '1rem' }}>2. How We Use Your Information</h2>
              <p>
                The information collected is used to:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Respond to your partnership or service inquiries.</li>
                <li>Improve our website and services.</li>
                <li>Communicate with you regarding ongoing or prospective projects (e.g., ATOM program).</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginTop: '1rem' }}>3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our contact forms are protected by reCAPTCHA to prevent spam and abuse.
              </p>

              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginTop: '1rem' }}>4. Third-Party Services</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>

              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginTop: '1rem' }}>5. Contact Us</h2>
              <p>
                If you have any questions regarding this privacy policy, you may contact us at:
                <br /><br />
                <strong>Email:</strong> samalexsolution24@gmail.com<br />
                <strong>Phone:</strong> 0557952992<br />
                <strong>Address:</strong> Presby Road, Pokuase, Ga North, Ghana
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
