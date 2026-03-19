import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Network, Megaphone, BookOpen, ArrowRight } from 'lucide-react';

export default function CampaignsPage() {
  const { t, language } = useLanguage();

  const sections = [
    {
      icon: Network,
      title: t.campaigns.networkTitle,
      desc: t.campaigns.networkDesc,
      color: 'bg-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Megaphone,
      title: t.campaigns.runningTitle,
      desc: t.campaigns.runningDesc,
      color: 'bg-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: BookOpen,
      title: t.campaigns.programsTitle,
      desc: t.campaigns.programsDesc,
      color: 'bg-teal-600',
      bg: 'bg-teal-50',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'अभियान र कार्यक्रमहरू' : 'Campaigns & Programs'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.campaigns.title}
          </motion.h1>
        </div>
      </div>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${section.bg} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}
              >
                <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center mb-5`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Campaign Placeholder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center bg-gray-50"
              >
                <Megaphone className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">{t.campaigns.placeholderCampaign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Network CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.campaigns.joinNetwork}</h2>
          <p className="text-emerald-200 mb-8">
            {language === 'ne'
              ? 'आफ्नो जिल्लामा हाम्रो अभियान संजालमा सहभागी हुनुहोस्।'
              : 'Join our campaign network in your district.'}
          </p>
          <Link
            to="/join"
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors inline-flex items-center gap-2"
          >
            {language === 'ne' ? 'सहभागी हुनुहोस्' : 'Get Involved'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
