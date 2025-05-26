import '../app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { robotoCondensed } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased`}>{children}</body>
    </html>
  );
}
