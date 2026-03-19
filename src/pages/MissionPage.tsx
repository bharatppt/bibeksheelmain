import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function MissionPage() {
  const { t, language } = useLanguage();

  const stats = [
    { value: t.mission.stat1, label: t.mission.stat1Label, icon: TrendingUp },
    { value: t.mission.stat2, label: t.mission.stat2Label, icon: Users },
    { value: t.mission.stat3, label: t.mission.stat3Label, icon: Target },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'हाम्रो लक्ष्य' : 'Our Mission'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.mission.title}
          </motion.h1>
          <p className="text-emerald-200 text-lg">{t.mission.subtitle}</p>
        </div>
      </div>

      {/* Vision Quote */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-emerald-800 leading-relaxed italic mb-8"
          >
            {t.mission.vision}
          </motion.blockquote>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-emerald-700/50 rounded-2xl border border-emerald-600"
              >
                <stat.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                <div className="text-4xl font-extrabold text-amber-400 mb-2">{stat.value}</div>
                <p className="text-emerald-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100"
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">{t.mission.missionTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.mission.missionText}</p>
            <p className="text-gray-700 leading-relaxed">{t.mission.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
              {language === 'ne' ? 'हाम्रो लक्ष्य' : 'Our Goal'}
            </span>
            <blockquote className="text-2xl md:text-3xl font-extrabold text-emerald-800 leading-snug italic mb-4">
              {t.mission.goal}
            </blockquote>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">{t.mission.goalContext}</p>
          </motion.div>
        </div>
      </section>

      {/* Why Bibeksheel — 10 Principles */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {t.mission.principlesTitle}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
            <p className="text-gray-600 text-lg">{t.mission.principlesSubtitle}</p>
          </motion.div>

          <div className="space-y-4">
            {(t.mission.principles as string[]).map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                {/* Number badge */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {index + 1}
                </span>
                <div className="flex items-start gap-3 flex-1">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 leading-relaxed">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Context */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              {language === 'ne'
                ? 'हरेक दिन करिब १,००० नेपाली आत्मसम्मानको खोजीमा वैदेशिक रोजगारको सहारा लिएर नेपाल छोड्छन्। त्यो दौरानमा धेरै जना बाकसमा फर्कन बाध्य छन्।'
                : 'Every day, about 1,000 Nepalis leave Nepal in search of self-respect through foreign employment. During that journey, many are forced to return in coffins.'}
            </p>
            <h3 className="text-xl font-bold text-emerald-800 mb-4">{t.mission.callTitle}</h3>
            <p className="text-gray-700 leading-relaxed mb-8">{t.mission.callText}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/join"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors"
              >
                {language === 'ne' ? 'संलग्न हुनुहोस्' : 'Join Us'}
              </Link>
              <Link
                to="/values"
                className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors"
              >
                {language === 'ne' ? 'मूल्य-मान्यता' : 'Our Values'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
