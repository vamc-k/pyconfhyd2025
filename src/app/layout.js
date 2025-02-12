import './globals.css';
import { CONFERENCE, ASSETS } from '@/conference';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';

export const metadata = {
  title: CONFERENCE.title,
  description: CONFERENCE.description,
  icons: {
    icon: [
      { url: ASSETS.navbarLogoUrl },
      { url: ASSETS.navbarLogoUrl, sizes: '16x16', type: 'image/svg+xml' },
      { url: ASSETS.navbarLogoUrl, sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: { url: ASSETS.navbarLogoUrl },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* <Header themeToggle={<ThemeToggle />} /> */}
          <Header themeToggle={<></>} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
