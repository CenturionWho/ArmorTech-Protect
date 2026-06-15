import './globals.css';

export const metadata = {
  title: 'ArmorTech Protect | Device Vault, Remote Support & Managed Repair Memberships',
  description:
    'ArmorTech Protect provides Device Vault records, remote-first support, managed dispatch, quote approval, repair discounts, service history, and customer account access for home and property technology.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}