import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wealth',
  description: 'Finance platform',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Sai Vivek Vangaveti and Sreeram Bangaru :)</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
