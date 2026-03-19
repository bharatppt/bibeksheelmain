import { motion } from 'motion/react';
import { HeartHandshake, FileSearch, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Donate() {
  const { t } = useLanguage();

  return (
    <section id="donate" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.donate.title}</h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            {t.donate.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <FileSearch className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.donate.transparency.title}</h3>
            <p className="text-gray-600">
              {t.donate.transparency.desc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.donate.audit.title}</h3>
            <p className="text-gray-600">
              {t.donate.audit.desc}
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/donate"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-amber-200"
          >
            <HeartHandshake className="w-6 h-6" />
            {t.donate.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
