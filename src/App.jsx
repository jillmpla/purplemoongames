import { Route, Routes } from 'react-router-dom';
import GoogleAnalytics from './components/GoogleAnalytics';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import Games from './pages/Games';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
