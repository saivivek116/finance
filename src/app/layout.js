import "./globals.css";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Wealth",
  description: "Finance platform",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >

        {children}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by Sai Vivek Vangaveti</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
