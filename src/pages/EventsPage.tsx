import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  const { t, language } = useLanguage();

  const routeStops = t.events.vivekasheelYatra.route.split(' → ');

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'कार्यक्रम र आन्दोलन' : 'Events & Movements'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.events.title}
          </motion.h1>
          <p className="text-emerald-200 text-lg">{t.events.subtitle}</p>
        </div>
      </div>

      {/* Vivekasheel Yatra Movement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              {t.events.movement}
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-emerald-100 shadow-lg"
          >
            {/* Event Banner */}
            <div className="w-full h-64 md:h-[28rem] bg-emerald-900 border-b border-emerald-100 flex items-center justify-center relative overflow-hidden group/banner">
              <img 
                src="/our goal.png" 
                alt="Our Goal - Vivekasheel Yatra" 
                className="w-full h-full object-cover opacity-90 group-hover/banner:scale-105 group-hover/banner:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-8 md:p-12 bg-white">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {t.events.vivekasheelYatra.title}
                  </h2>
                  <p className="text-emerald-600 font-medium">{t.events.vivekasheelYatra.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full border">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.events.vivekasheelYatra.status}</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t.events.vivekasheelYatra.description}
              </p>

              {/* Route */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-4 text-emerald-700">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-bold text-lg">{language === 'ne' ? 'यात्रा मार्ग' : 'Travel Route'}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {routeStops.map((stop, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="bg-white border border-emerald-200 text-emerald-800 font-medium px-3 py-1.5 rounded-full text-sm shadow-sm">
                        {stop}
                      </span>
                      {index < routeStops.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/join"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  {language === 'ne' ? 'यात्रामा सहभागी हुनुहोस्' : 'Join the Yatra'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Placeholder */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.events.upcoming}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm border-dashed border-gray-300"
              >
                <div className="text-gray-300 text-center text-4xl mb-3">📅</div>
                <p className="text-gray-400 text-center text-sm">
                  {language === 'ne' ? '[आगामी कार्यक्रम यहाँ थप्नुहोस्]' : '[Add upcoming event here]'}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">{t.events.noMoreEvents}</p>
        </div>
      </section>
    </>
  );
}
