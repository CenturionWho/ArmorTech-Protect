import './globals.css';

export const metadata = {
  title: 'ArmorTech Protect | Device Vault, Remote Support & Managed Repair Memberships',
  description:
    'ArmorTech Protect provides Device Vault records, remote-first support, managed dispatch, quote approval, repair discounts, service history, and customer account access for home and property technology.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <address
          itemScope
          itemType="https://schema.org/PostalAddress"
          style={{
            margin: 0,
            padding: '18px 20px',
            textAlign: 'center',
            fontStyle: 'normal',
            lineHeight: 1.65,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            background: '#050505',
            color: '#cfcfcf',
          }}
        >
          <strong style={{ color: '#ff7a1a' }}>ArmorTech Headquarters:</strong>{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=719+Hope+Rd%2C+Stamps%2C+AR+71860"
            style={{ color: 'inherit' }}
          >
            <span itemProp="streetAddress">719 Hope Rd</span>,{' '}
            <span itemProp="addressLocality">Stamps</span>,{' '}
            <span itemProp="addressRegion">AR</span>{' '}
            <span itemProp="postalCode">71860</span>
          </a>
          <br />
          Serving Arkansas, Texas, Louisiana, Oklahoma, and Mississippi.
        </address>
      </body>
    </html>
  );
}
