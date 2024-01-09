import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Izzan Test',
  description: 'Synapsis Front End Developer Challenge Test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mb-20`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
