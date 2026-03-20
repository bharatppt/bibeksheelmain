import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Heart, Megaphone, HandCoins, CheckCircle } from 'lucide-react';

export default function JoinPage() {
  const { t, language } = useLanguage();

  const tracks = [
    {
      icon: Users,
      color: 'bg-emerald-600',
      lightColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      ...t.join.member,
    },
    {
      icon: Heart,
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      ...t.join.volunteer,
    },
    {
      icon: Megaphone,
      color: 'bg-teal-600',
      lightColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      ...t.join.campaigner,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'संलग्न हुनुहोस्' : 'Join Us'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.join.title}
          </motion.h1>
          <p className="text-emerald-200 text-lg">{t.join.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">{t.join.description}</p>
        </div>
      </section>

      {/* Join Tracks */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border ${track.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 bg-white`}
              >
                <div className={`${track.color} p-6 text-white`}>
                  <track.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">{track.title}</h3>
                </div>
                <div className={`p-6 ${track.lightColor}`}>
                  <p className="text-gray-700 mb-4 leading-relaxed">{track.description}</p>
                  <div className="flex items-start gap-2 mb-6 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{track.benefit}</p>
                  </div>
                  <a
                    href="https://forms.gle/dCWbD2YN2m5CuLAu6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 px-6 rounded-full font-bold text-white ${track.color} hover:opacity-90 transition-opacity`}
                  >
                    {track.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{t.join.eligibility.title}</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <ul className="space-y-4">
              {t.join.eligibility.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Support */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <HandCoins className="w-12 h-12 text-amber-400 mx-auto mb-5" />
          <h2 className="text-2xl font-bold mb-4">{t.join.support.title}</h2>
          <p className="text-emerald-200 mb-8 leading-relaxed">{t.join.support.description}</p>
          <Link
            to="/donate"
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors inline-block"
          >
            {t.join.support.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
