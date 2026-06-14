import './globals.css';

export const metadata = {
  title: 'Samalex Solutions | Sustainable Sanitation',
  description: 'Samalex Solutions is a Ghana-based sanitation and social impact enterprise focused on improving access to safe, affordable, and sustainable sanitation solutions.',
  keywords: 'Biodigester Toilets Ghana, Affordable Toilets Ghana, School Sanitation Ghana, Community Sanitation Ghana, Sustainable Sanitation Ghana, Toilet Ownership Model Ghana',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
