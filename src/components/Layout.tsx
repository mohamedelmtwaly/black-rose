import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MapSection from './MapSection';
import FloatingWhatsApp from './FloatingWhatsApp';
import { usePageTitle, useScrollToTop } from '@/hooks/usePage';

export default function Layout() {
  usePageTitle();
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-petal">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
