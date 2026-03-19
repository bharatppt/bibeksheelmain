import { MapPin, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const aboutLinks = [
    { name: language === 'ne' ? 'इतिहास' : 'History', href: '/about' },
    { name: language === 'ne' ? 'नेतृत्व टोली' : 'Leadership Team', href: '/about' },
    { name: language === 'ne' ? 'हाम्रो लक्ष्य' : 'Mission', href: '/mission' },
    { name: language === 'ne' ? 'मूल्य-मान्यता' : 'Core Values', href: '/values' },
    { name: language === 'ne' ? 'एजेन्डा' : 'Agenda', href: '/agenda' },
    { name: language === 'ne' ? 'दर्शन' : 'Ideology', href: '/ideology' },
  ];

  const actionLinks = [
    { name: language === 'ne' ? 'कार्यक्रमहरू' : 'Events', href: '/events' },
    { name: language === 'ne' ? 'अभियानहरू' : 'Campaigns', href: '/campaigns' },
    { name: language === 'ne' ? 'ग्यालरी' : 'Gallery', href: '/gallery' },
    { name: language === 'ne' ? 'संलग्न हुनुहोस्' : 'Join Us', href: '/join' },
    { name: language === 'ne' ? 'आर्थिक सहयोग' : 'Donate', href: '/donate' },
  ];

  return (
    <footer className="bg-emerald-950 text-emerald-50 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-600" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Intro (Larger Span) */}
          <div className="lg:col-span-5 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex max-w-max">
              <img 
                src="/logo.png" 
                alt="Nepal Bibeksheel Party Logo" 
                className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white block">
                  {t.nav.brand}
                </span>
                <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                  {t.footer.registration}
                </span>
              </div>
            </Link>

            <p className="text-emerald-200/90 text-base md:text-lg mb-8 leading-relaxed max-w-md font-medium">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links Grouping */}
          <div className="lg:col-span-3 lg:col-start-7 lg:pl-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {t.nav.aboutUs}
            </h4>
            <ul className="space-y-3.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-emerald-200/90 hover:text-white hover:translate-x-1 inline-flex transition-all duration-200 text-[15px] font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {language === 'ne' ? 'संलग्न हुनुहोस्' : 'Get Involved'}
            </h4>
            <ul className="space-y-3.5">
              {actionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-emerald-200/90 hover:text-white hover:translate-x-1 inline-flex transition-all duration-200 text-[15px] font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact info & Social Grid row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-emerald-800/60 mb-8">
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-amber-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1">
                  {language === 'ne' ? 'स्थान' : 'Location'}
                </p>
                <p className="text-emerald-100 font-medium">
                  {language === 'ne' ? 'नक्साल, काठमाडौँ' : 'Naxal, Kathmandu'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1">
                  {language === 'ne' ? 'इमेल' : 'Email'}
                </p>
                <a
                  href="mailto:bibeksheelparty@gmail.com"
                  className="text-emerald-100 font-medium hover:text-amber-400 transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex lg:justify-end items-center gap-4">
            <span className="text-sm font-bold text-emerald-400 mr-2 hidden sm:block uppercase tracking-wide">
              {language === 'ne' ? 'हामीलाई पछ्याउनुहोस्' : 'Follow Us'}
            </span>
            {[
              { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/bibeksheelp' },
              { Icon: Twitter, label: 'Twitter', href: 'https://x.com/bibeksheelparty' },
              { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bibeksheelparty/' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full bg-emerald-900/80 border border-emerald-800 flex items-center justify-center text-emerald-300 hover:bg-emerald-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-500/80 text-sm font-medium">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-emerald-300 transition-colors">
              {language === 'ne' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="hover:text-emerald-300 transition-colors">
              {language === 'ne' ? 'प्रयोगका सर्तहरू' : 'Terms of Use'}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-emerald-800/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
