import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
