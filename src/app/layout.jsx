import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Public Posts from gorest API',
  description: 'This website using gorest API to handle public posts',
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
