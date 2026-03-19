import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ne' : 'en');

  const workLinks = [
    { name: t.nav.mission, href: '/mission' },
    { name: t.nav.values, href: '/values' },
    { name: t.nav.agenda, href: '/agenda' },
    { name: t.nav.ideology, href: '/ideology' },
  ];

  const directLinks = [
    { name: t.nav.events, href: '/events' },
    { name: t.nav.campaigns, href: '/campaigns' },
    { name: t.nav.gallery, href: '/gallery' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[4.5rem] md:h-20">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img 
                src="/logo.png" 
                alt="Nepal Bibeksheel Party Logo" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-bold text-lg md:text-xl text-emerald-900 leading-tight">
                {t.nav.brand}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-gray-700 hover:text-emerald-700 transition-colors rounded-full hover:bg-emerald-50 whitespace-nowrap"
              >
                {t.nav.home}
              </Link>

              <Link
                to="/about"
                className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-gray-700 hover:text-emerald-700 transition-colors rounded-full hover:bg-emerald-50 whitespace-nowrap"
              >
                {t.nav.aboutUs}
              </Link>

              {/* Our Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('work')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-[14px] xl:text-[15px] font-bold transition-colors rounded-full whitespace-nowrap ${
                    activeDropdown === 'work'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {t.nav.ourWork}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'work' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'work' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-3 z-50 overflow-hidden"
                    >
                      {workLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="flex items-center gap-2 mx-2 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-gray-700 hover:text-emerald-700 transition-colors rounded-full hover:bg-emerald-50 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 pl-2 border-l border-gray-100 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-[14px] xl:text-[15px] font-bold text-gray-700 hover:text-emerald-700 transition-all duration-300 border-2 border-gray-200 rounded-full hover:border-emerald-400 hover:bg-emerald-50 whitespace-nowrap"
              >
                <Globe className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" />
                {language === 'en' ? 'नेपाली' : 'English'}
              </button>
              <div className="flex items-center gap-1.5 xl:gap-2">
                <Link
                  to="/join"
                  className="bg-emerald-600 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-[14px] xl:text-[15px] font-bold hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  {t.nav.join}
                </Link>
                <Link
                  to="/donate"
                  className="bg-amber-500 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-[14px] xl:text-[15px] font-bold hover:bg-amber-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  {t.nav.donate}
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 text-emerald-800 bg-emerald-50 rounded-full font-bold text-sm border border-emerald-100 active:scale-95 transition-transform"
                aria-label={language === 'en' ? 'Switch to Nepali' : 'Switch to English'}
              >
                <Globe className="w-4 h-4 mr-1 hidden sm:block" />
                {language === 'en' ? 'ने' : 'En'}
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:text-emerald-700 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%', borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}
              animate={{ x: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              exit={{ x: '100%', borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.4,
              }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-extrabold text-xl text-emerald-900">{t.nav.brand}</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                {/* Main Links */}
                <div className="space-y-4">
                  <Link
                    to="/"
                    className="flex justify-between items-center text-lg font-bold text-gray-800 hover:text-emerald-600"
                  >
                    {t.nav.home}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                  <div className="h-px bg-gray-100" />
                  <Link
                    to="/about"
                    className="flex justify-between items-center text-lg font-bold text-gray-800 hover:text-emerald-600"
                  >
                    {t.nav.aboutUs}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                </div>

                {/* Our Work Section */}
                <div>
                  <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wider mb-4">
                    {t.nav.ourWork}
                  </h3>
                  <div className="bg-emerald-50 rounded-2xl p-4 space-y-3">
                    {workLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center gap-3 text-base font-bold text-emerald-900 hover:text-emerald-600 group"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-amber-400 transition-colors" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Links Section */}
                <div>
                  <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wider mb-4">
                    {language === 'ne' ? 'थप' : 'More'}
                  </h3>
                  <div className="space-y-4">
                    {directLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center justify-between text-base font-bold text-gray-800 hover:text-emerald-600"
                      >
                        {link.name}
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer Buttons */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/join"
                    className="flex items-center justify-center bg-emerald-600 text-white py-3.5 rounded-xl text-base font-extrabold active:scale-95 transition-transform"
                  >
                    {t.nav.join}
                  </Link>
                  <Link
                    to="/donate"
                    className="flex items-center justify-center bg-amber-500 text-white py-3.5 rounded-xl text-base font-extrabold active:scale-95 transition-transform shadow-lg shadow-amber-500/20"
                  >
                    {t.nav.donate}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
