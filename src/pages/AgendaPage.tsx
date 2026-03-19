import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface AgendaItem {
  icon: string;
  title: string;
  points: string[];
}

export default function AgendaPage() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t.agenda.items as AgendaItem[];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <Helmet>
        <title>
          {language === 'ne' ? 'हाम्रो एजेन्डा' : 'Our Agenda'} | Nepal Bibeksheel Party
        </title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.agenda.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-amber-300 text-lg md:text-xl italic font-medium"
          >
            {t.agenda.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Intro bar */}
      <div className="bg-emerald-800 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-100 text-base leading-relaxed">{t.agenda.description}</p>
        </div>
      </div>

      {/* Agenda Accordion */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className={`rounded-2xl border overflow-hidden shadow-sm transition-all duration-200 ${
                    isOpen
                      ? 'border-emerald-400 shadow-emerald-100 shadow-md'
                      : 'border-emerald-100 hover:border-emerald-300 hover:shadow-md'
                  }`}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                      isOpen ? 'bg-emerald-700' : 'bg-white hover:bg-emerald-50'
                    }`}
                  >
                    {/* Number + icon */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold shadow-sm
                        ${isOpen ? 'bg-amber-400 text-emerald-900' : 'bg-emerald-100 text-emerald-700'}`}
                    >
                      {index + 1}
                    </div>

                    <span
                      className={`text-2xl leading-none select-none`}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <span
                      className={`flex-1 text-base md:text-lg font-bold leading-snug ${
                        isOpen ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </span>

                    <span
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'text-amber-300' : 'text-emerald-500'
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {/* Accordion body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white px-6 py-5 border-t border-emerald-100">
                          <ul className="space-y-3">
                            {item.points.map((point, pi) => (
                              <motion.li
                                key={pi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pi * 0.04 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 leading-relaxed text-sm md:text-base">
                                  {point}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Closing note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center text-emerald-700 font-semibold text-lg italic"
          >
            {language === 'ne' ? 'सबैको मंगल होस्! 🙏' : 'May all be blessed! 🙏'}
          </motion.p>
        </div>
      </section>
    </>
  );
}
