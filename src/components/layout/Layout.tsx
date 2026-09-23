import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { TopBar } from '../ui/TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Cursor } from '../ui/Cursor';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <div className="min-h-screen flex flex-col bg-ivory">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
