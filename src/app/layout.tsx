import './globals.css';
import LogoNav from '@/components/LogoNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <LogoNav />
      </body>
    </html>
  );
}
