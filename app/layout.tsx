import { ThemeProvider } from 'next-themes'
import './globals.css';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme='system' attribute="class" >
          <div className="mx-[10px]">
            <Header />
              <div className="max-w-[1260px] mx-auto mt-[20px] shadow-[0_4px_20px_rgba(158,158,158,0.5)] transition-colors duration-300 rounded-2xl px-[30px] py-[10px]">
                {children}
              </div>
              <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
