import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const valueColors = [
  'from-emerald-500 to-emerald-700',
  'from-amber-500 to-amber-700',
  'from-emerald-600 to-teal-700',
  'from-amber-600 to-orange-600',
  'from-teal-500 to-emerald-600',
  'from-green-500 to-emerald-700',
];

const valueNumbers = ['१', '२', '३', '४', '५', '६'];
const valueNumbersEn = ['1', '2', '3', '4', '5', '6'];

export default function ValuesPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'मूल्य-मान्यता' : 'Core Values'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.values.title}
          </motion.h1>
        </div>
      </div>

      {/* Quote */}
      <section className="py-14 bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-amber-700 italic leading-relaxed">
            {t.values.quote}
          </blockquote>
          <p className="mt-6 text-gray-600 text-lg">{t.values.intro}</p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${valueColors[index]} p-6 text-white`}>
                  <div className="text-5xl font-extrabold opacity-30 mb-2">
                    {language === 'ne' ? valueNumbers[index] : valueNumbersEn[index]}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">
            {language === 'ne' ? 'यी मूल्यहरूसँग सहमत हुनुहुन्छ?' : 'Do you agree with these values?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'ne'
              ? 'हामीसँग जोडिनुहोस् र परिवर्तनको अभियानको अंश बन्नुहोस्।'
              : 'Join us and be part of the movement for change.'}
          </p>
          <a
            href="/join"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors inline-block"
          >
            {language === 'ne' ? 'संलग्न हुनुहोस्' : 'Join Us'}
          </a>
        </div>
      </section>
    </>
  );
}
