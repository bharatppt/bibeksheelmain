import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Eye, ChevronRight, X } from 'lucide-react';
import { timelineData, TimelineItem } from '../data/timelineData';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  
  // Auto-scrolling state and refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const infiniteTimelineData = [...timelineData, ...timelineData];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const scrollSpeed = 0.6; // Speed adjustments

    const scroll = () => {
      if (!isHovering) {
        el.scrollLeft += scrollSpeed;
        
        // When we have scrolled exactly half the width (the first full set of items),
        // reset to 0 to create an infinite, seamless loop.
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'हाम्रो बारेमा' : 'About Us'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.about.title}
          </motion.h1>
          <p className="text-emerald-200 text-lg">{t.about.registrationNo}</p>
        </div>
      </div>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.about.description1}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.about.description2}</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-wider">
              {language === 'ne' ? 'हाम्रो यात्रा' : 'Our Journey'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {language === 'ne' ? 'इतिहासको झलक' : 'A Glimpse of History'}
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl text-center">
              {language === 'ne' 
                ? 'विवरण हेर्नका लागि तलका कुनै पनि घटनामा क्लिक गर्नुहोस् वा दायाँ-बायाँ सार्नुहोस्।' 
                : 'Swipe left or right and click on any event below to see full details.'}
            </p>
          </motion.div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden relative border-l-4 border-emerald-100 ml-4 space-y-10 pb-12 mt-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                onClick={() => setSelectedItem(item)}
                className="relative pl-8 cursor-pointer group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm group-hover:border-amber-500 transition-colors" />
                
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-emerald-50 flex flex-col hover:shadow-md transition-shadow">
                  {/* Circle Image (Small thumbnail for mobile) */}
                  {item.imageUrl && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 mb-3 shadow-sm group-hover:border-amber-400 transition-colors flex-shrink-0">
                      <img src={item.imageUrl} className="w-full h-full object-cover" alt="" />
                    </div>
                  )}
                  
                  {/* Year Badge */}
                  <span className="inline-block text-emerald-600 text-xs font-extrabold mb-1">
                    {language === 'ne' ? item.yearNe : item.year}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {language === 'ne' ? item.titleNe : item.titleEn}
                  </h3>
                  
                  {/* Description snippet */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {language === 'ne' ? item.descNe : item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Horizontal Alternating Timeline */}
          <div className="hidden md:block relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden group/timeline">
            {/* The scroll container */}
            <div 
              ref={scrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex overflow-x-auto pb-12 pt-8 relative hide-scrollbar cursor-pointer" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              
              {/* Inner container with min width to hold the continuous line */}
              <div className="flex relative min-w-max gap-0 h-[32rem] items-center">
                
                {/* The continuous center line */}
                <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-300 -translate-y-1/2 rounded-full z-0" />

                {infiniteTimelineData.map((item, index) => {
                  const isTop = index % 2 === 0;
                  return (
                    <motion.div
                      key={`${item.id}-${index}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                      onClick={() => setSelectedItem(item)}
                      className="w-[22rem] h-full relative flex-shrink-0 snap-center cursor-pointer group"
                    >
                      {/* Interactive hover overlay (optional background highlight) */}
                      <div className="absolute inset-x-2 inset-y-6 rounded-3xl transition-colors group-hover:bg-emerald-50/50 -z-10" />

                      {isTop ? (
                        // --- TOP ITEM ---
                        <div className="absolute top-0 left-0 w-full bottom-[50%] pb-4 flex flex-col pt-4">
                          {/* Image Circle */}
                          <div className="px-8 z-10 relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-[6px] border-white shadow-md bg-gray-100 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300">
                              <img src={item.imageUrl || '/logo.png'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                            </div>
                          </div>
                          
                          {/* Vertical Line Connector */}
                          <div className="absolute left-[4.8rem] top-24 bottom-0 w-[2px] bg-gray-300 z-0 group-hover:bg-amber-400 transition-colors" />

                          {/* Content */}
                          <div className="pl-24 pr-6 mt-4 relative z-10 flex flex-col justify-end h-full">
                            <h3 className="text-xl font-light text-gray-500 mb-2 group-hover:text-emerald-700 transition-colors">
                              {language === 'ne' ? item.yearNe : item.year}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                              {language === 'ne' ? item.descNe : item.descEn}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // --- BOTTOM ITEM ---
                        <div className="absolute top-[50%] left-0 w-full bottom-0 pt-4 flex flex-col pb-4">
                          {/* Vertical Line Connector */}
                          <div className="absolute left-[4.8rem] top-0 bottom-24 w-[2px] bg-gray-300 z-0 group-hover:bg-amber-400 transition-colors" />

                          {/* Content */}
                          <div className="pl-24 pr-6 mb-4 relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-light text-gray-500 mb-2 group-hover:text-emerald-700 transition-colors">
                              {language === 'ne' ? item.yearNe : item.year}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                              {language === 'ne' ? item.descNe : item.descEn}
                            </p>
                          </div>

                          {/* Image Circle */}
                          <div className="px-8 mt-auto z-10 relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-[6px] border-white shadow-md bg-gray-100 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300">
                              <img src={item.imageUrl || '/logo.png'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Custom scrollbar hiding styles for horizontal scroll */}
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ne' ? 'पारदर्शिता' : 'Transparency'}
          </h2>
          <p className="text-emerald-200 mb-8 text-lg">
            {language === 'ne'
              ? 'हाम्रो वार्षिक लेखा परीक्षण प्रतिवेदन सार्वजनिक गरिन्छ। आर्थिक वर्ष २०७८/७९ को लेखा परीक्षण प्रतिवेदन उपलब्ध छ।'
              : 'Our annual audit reports are made public. The audit report for fiscal year 2078/79 is available.'}
          </p>
          <Link
            to="/donate"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors"
          >
            {language === 'ne' ? 'आर्थिक सहयोग' : 'Financial Support'}
          </Link>
        </div>
      </section>

      {/* Modal for Timeline Event */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-emerald-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl relative z-10 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Header */}
              {selectedItem.imageUrl ? (
                <div className="w-full h-56 sm:h-72 bg-gradient-to-br from-emerald-950 to-gray-900 flex flex-col items-center justify-center relative border-b border-gray-100 flex-shrink-0 overflow-hidden">
                  <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.titleEn} 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-emerald-100 to-amber-50 flex flex-col items-center justify-center relative border-b border-gray-100 flex-shrink-0">
                  <div className="text-5xl sm:text-6xl mb-3">🖼️</div>
                  <p className="text-sm font-medium text-emerald-700 px-6 text-center">
                    {language === 'ne' ? '[पछि यहाँ तस्बिर अपलोड गरिनेछ]' : '[Image placeholder to be uploaded later]'}
                  </p>
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <span className="inline-block bg-amber-100 text-amber-800 text-sm font-extrabold px-4 py-1.5 rounded-full mb-4">
                   {language === 'ne' ? selectedItem.yearNe : selectedItem.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-950 mb-4 leading-tight">
                  {language === 'ne' ? selectedItem.titleNe : selectedItem.titleEn}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {language === 'ne' ? selectedItem.descNe : selectedItem.descEn}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
