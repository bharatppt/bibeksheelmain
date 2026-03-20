import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: big emerald gradient + dot overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />


      {/* Floating Social Sidebar */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
        {[
          { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/bibeksheelp' },
          { Icon: Twitter, label: 'Twitter', href: 'https://x.com/bibeksheelparty' },
          { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bibeksheelparty/' },
        ].map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-200"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Party Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {language === 'ne' ? 'दल दर्ता नं १७४' : 'Party Reg. No. 174'}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            {t.hero.description}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-300 font-semibold italic mb-6"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Stat / Story */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-emerald-200 text-lg leading-relaxed mb-2"
          >
            {t.hero.stat}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-white font-medium text-lg leading-relaxed mb-10"
          >
            {t.hero.callToAction}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full"
          >
            <Link
              to="/about"
              className="w-full sm:w-auto text-center bg-amber-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg text-base"
            >
              {t.nav.aboutUs}
            </Link>
            <Link
              to="/join"
              className="w-full sm:w-auto text-center bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-lg text-base"
            >
              {t.hero.joinMember}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 800 0 400 40L0 20V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
