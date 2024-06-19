import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title:
    'Alagappaa Engineering | Tata Authorized Service Center | 60+ Years of Excellence',
  description:
    'Alagappaa Engineering is a trusted Tata-authorized service center with over 60 years of expertise in providing exceptional service and maintenance solutions. Our experienced team and state-of-the-art facilities ensure top-quality care for your vehicle.',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
