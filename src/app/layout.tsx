import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { NotesProvider } from '@/context/NotesContext';
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotesProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            {children}
          </div>
        </NotesProvider>
      </body>
    </html>
  );
}