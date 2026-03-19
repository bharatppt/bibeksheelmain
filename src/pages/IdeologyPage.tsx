import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Section,
  POLITICAL_INTRO,
  FOUR_PILLARS,
  SOCIAL_PRINCIPLES,
  ECONOMIC_SECTIONS,
  PERSONAL_VALUES,
  INSTITUTIONAL_VALUES,
} from './ideologyData';

/* ─── TABS ─── */
const TABS = [
  { id: 'political', labelEn: 'Political Philosophy', labelNe: 'राजनीतिक दर्शन', emoji: '🏛️' },
  { id: 'social',    labelEn: 'Social Philosophy',    labelNe: 'सामाजिक दर्शन',   emoji: '🤝' },
  { id: 'economic',  labelEn: 'Economic Philosophy',  labelNe: 'आर्थिक दर्शन',    emoji: '💼' },
  { id: 'values',    labelEn: 'Our Values',            labelNe: 'मूल्य-मान्यता',    emoji: '⭐' },
] as const;
type TabId = typeof TABS[number]['id'];

/* ─── ACCORDION ─── */
function Accordion({ sections, accent = false }: { sections: Section[]; accent?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {sections.map((sec, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
              isOpen
                ? accent ? 'border-amber-400 shadow-md shadow-amber-50' : 'border-emerald-400 shadow-md shadow-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors duration-200 ${
                isOpen
                  ? accent ? 'bg-amber-500 text-white' : 'bg-emerald-700 text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span className={`flex-1 font-bold text-base md:text-lg ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                {sec.title}
              </span>
              {isOpen
                ? <ChevronUp className="w-5 h-5 flex-shrink-0 opacity-80" />
                : <ChevronDown className="w-5 h-5 flex-shrink-0 text-emerald-400" />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-white px-6 py-5 border-t border-gray-100">
                    {Array.isArray(sec.content) ? (
                      <ul className="space-y-3">
                        {sec.content.map((para, pi) => (
                          <li key={pi} className="flex items-start gap-2">
                            <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{para}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{sec.content}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function SectionHeading({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">{label}</h2>
      {sub && <p className="text-emerald-600 font-medium italic text-sm md:text-base">{sub}</p>}
      <div className="mt-3 w-14 h-1 bg-amber-500 rounded-full" />
    </div>
  );
}

/* ─── PAGE ─── */
export default function IdeologyPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('political');
  const lang = language === 'ne' ? 'ne' : 'en';

  return (
    <>
      <Helmet>
        <title>
          {language === 'ne' ? 'दर्शन-सिद्धान्त' : 'Philosophy & Ideology'} | Nepal Bibeksheel Party
        </title>
      </Helmet>

      {/* Header + Tab bar */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
          >
            {language === 'ne' ? 'दर्शन र विचारधारा' : 'Philosophy & Ideology'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-amber-300 italic text-lg font-medium"
          >
            {language === 'ne' ? 'हाम्रो मार्गदर्शक दर्शन — Radical Centrism' : 'Our Guiding Philosophy — Radical Centrism'}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-bold transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-white text-emerald-800 shadow-sm'
                      : 'bg-emerald-800 text-emerald-200 hover:bg-emerald-700 hover:text-white'
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span>{language === 'ne' ? tab.labelNe : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatePresence mode="wait">

            {/* ── POLITICAL ── */}
            {activeTab === 'political' && (
              <motion.div key="political" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <SectionHeading
                  label={language === 'ne' ? 'राजनीतिक दर्शन — Radical Centrism' : 'Political Philosophy — Radical Centrism'}
                  sub={language === 'ne'
                    ? '"नेपालमा नै आत्मसम्मानपूर्ण जीवन जिउने वातावरण बनाउनेछौँ।"'
                    : '"We shall create an environment to live a dignified life in Nepal."'}
                />
                <div className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-sm mb-8">
                  {POLITICAL_INTRO[lang].split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0 text-sm md:text-base">{para}</p>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  {language === 'ne' ? 'सन्तुलित राज्यका चार आधार स्तम्भ' : 'The 4 Pillars of a Balanced State'}
                </h3>
                <Accordion sections={FOUR_PILLARS[lang]} />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  className="mt-10 bg-emerald-700 rounded-2xl p-6 text-white text-center">
                  <p className="text-emerald-100 leading-relaxed text-sm md:text-base">
                    {language === 'ne'
                      ? 'यी सम्पूर्ण नीतिहरू अपनाएर हामी एउटा सेवक सरकार निर्माण गर्नेछौँ जहाँ नागरिकको सेवा गरिनेछ र तिनीहरूलाई व्यक्तिगत जिम्मेवारीको पनि स्मरण गराइनेछ। हामी सामाजिक न्याय सुनिश्चित गर्न विभिन्न नीतिहरू कार्यान्वयन गर्नेछौँ — एउटा सन्तुलित राज्य जहाँ अतिवादी गतिविधिलाई अनुमति दिइनेछैन।'
                      : 'By adopting all these policies, we shall build a servant government where citizens are served but also reminded of their individual responsibilities. We are committed to our goal — a balanced state where extremist activities shall not be allowed.'}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* ── SOCIAL ── */}
            {activeTab === 'social' && (
              <motion.div key="social" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <SectionHeading
                  label={language === 'ne' ? 'सामाजिक दर्शन — मानवता, समानता, स्वतन्त्रता, गरिमा' : 'Social Philosophy — Humanity, Equality, Liberty, Dignity'}
                  sub={language === 'ne'
                    ? '"सार्वभौम नेपाल, स्वाभिमानी नेपाली, समान र मानवीय नेपाली समाज"'
                    : '"Sovereign Nepal, dignified Nepali, equal and humane Nepali society"'}
                />
                <Accordion sections={SOCIAL_PRINCIPLES[lang]} />
              </motion.div>
            )}

            {/* ── ECONOMIC ── */}
            {activeTab === 'economic' && (
              <motion.div key="economic" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <SectionHeading
                  label={language === 'ne' ? 'आर्थिक दर्शन — समन्वित पुँजीवाद' : 'Economic Philosophy — Coordinated Capitalism'}
                  sub={language === 'ne'
                    ? '"देशले आफ्नै माटोमा पसिना माग्छ।"'
                    : '"The country asks for sweat on its own soil."'}
                />
                <Accordion sections={ECONOMIC_SECTIONS[lang]} />
              </motion.div>
            )}

            {/* ── VALUES ── */}
            {activeTab === 'values' && (
              <motion.div key="values" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <SectionHeading
                  label={language === 'ne' ? 'हाम्रा मूल्य-मान्यता' : 'Our Values'}
                  sub={language === 'ne'
                    ? '"जे रोपिन्छ, त्यही फल्छ। कागतीको बोटमा आँप फल्दैन।"'
                    : '"You reap what you sow. Mangoes do not grow on a lemon tree."'}
                />
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-center">
                  <p className="text-amber-800 font-semibold italic">
                    {language === 'ne' ? '"एकता नै सफलता हो।"' : '"Together We Succeed"'}
                  </p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">P</span>
                  {language === 'ne' ? 'व्यवहारसम्बन्धी व्यक्तिगत मूल्यहरू' : 'Behaviour-Related Personal Values'}
                </h3>
                <Accordion sections={PERSONAL_VALUES[lang]} />

                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-10 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">I</span>
                  {language === 'ne' ? 'प्रक्रियासम्बन्धी संस्थागत मूल्यहरू' : 'Process-Related Institutional Values'}
                </h3>
                <Accordion sections={INSTITUTIONAL_VALUES[lang]} accent />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
