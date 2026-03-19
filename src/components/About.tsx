import { motion } from 'motion/react';
import { Flag, Stamp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.about.title}</h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t.about.description1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.about.description2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.about.flagTitle}</h3>
            </div>
            <p className="text-gray-700 mb-6">
              {t.about.flagDesc}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>{t.about.flagDogTitle}</strong> {t.about.flagDogDesc}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>{t.about.flagCircleTitle}</strong> {t.about.flagCircleDesc}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <Stamp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.about.stampTitle}</h3>
            </div>
            <p className="text-gray-700">
              {t.about.stampDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
