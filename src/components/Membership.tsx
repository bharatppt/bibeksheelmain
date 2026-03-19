import { motion } from 'motion/react';
import { UserPlus, UserCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Membership() {
  const { t } = useLanguage();

  return (
    <section id="membership" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.membership.title}</h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <UserPlus className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.membership.basic.title}</h3>
            <p className="text-gray-600 mb-4">
              {t.membership.basic.desc}
            </p>
            <div className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p>{t.membership.basic.benefit}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-amber-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              {t.membership.active.badge}
            </div>
            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.membership.active.title}</h3>
            <p className="text-gray-600 mb-4">
              {t.membership.active.desc}
            </p>
            <div className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p>{t.membership.active.benefit}</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-emerald-900 text-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">{t.membership.eligibility.title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-emerald-800/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <p className="font-medium">{t.membership.eligibility.req1}</p>
            </div>
            <div className="flex items-center gap-4 bg-emerald-800/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <p className="font-medium">{t.membership.eligibility.req2}</p>
            </div>
            <div className="flex items-center gap-4 bg-emerald-800/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <p className="font-medium">{t.membership.eligibility.req3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
