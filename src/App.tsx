/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonatePage from './pages/DonatePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import ValuesPage from './pages/ValuesPage';
import AgendaPage from './pages/AgendaPage';
import IdeologyPage from './pages/IdeologyPage';
import EventsPage from './pages/EventsPage';
import CampaignsPage from './pages/CampaignsPage';
import GalleryPage from './pages/GalleryPage';
import JoinPage from './pages/JoinPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/values" element={<ValuesPage />} />
              <Route path="/agenda" element={<AgendaPage />} />
              <Route path="/ideology" element={<IdeologyPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}
