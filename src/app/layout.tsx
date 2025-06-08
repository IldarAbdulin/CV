import Header from '@/components/screens/Header';
import Footer from '@/components/screens/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

import { Share_Tech } from 'next/font/google';

const shareTech = Share_Tech({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'WhoAmI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={shareTech.className}>
      <body>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-1 bg-gray-100">
              <div className="w-[95%] m-auto">{children}</div>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
