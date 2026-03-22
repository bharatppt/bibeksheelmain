import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Updates from '../components/Updates';
import Membership from '../components/Membership';
import Donate from '../components/Donate';
import { useLanguage } from '../contexts/LanguageContext';

const VIDEO_BASE = 'https://www.youtube.com/embed/7rCNMW_UxPs';
const VIDEO_AUTOPLAY = `${VIDEO_BASE}?autoplay=1&mute=1&rel=0`;

export default function Home() {
  const { language } = useLanguage();
  const isNe = language === 'ne';

  const sectionRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState(VIDEO_BASE);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(VIDEO_AUTOPLAY);
        } else {
          // Reset src to stop playback when scrolled away
          setVideoSrc(VIDEO_BASE);
        }
      },
      { threshold: 0.5 } // trigger when 50% of section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>नेपाल विवेकशील पार्टी | Nepal Bibeksheel Party</title>
        <meta name="description" content="नेपाल विवेकशील पार्टीको आधिकारिक वेबसाइट। सुसंस्कृत राजनीति र समृद्ध राष्ट्र निर्माणको अभियानमा हामीसँग जोडिनुहोस्।" />
        <meta name="keywords" content="Nepal Bibeksheel Party, Bibeksheel, Politics Nepal, Nepali Politics, Youth Politics Nepal, विवेकशील पार्टी, नेपाल राजनीति" />
        <meta property="og:title" content="नेपाल विवेकशील पार्टी | Nepal Bibeksheel Party" />
        <meta property="og:description" content="सुसंस्कृत राजनीति र समृद्ध राष्ट्र निर्माणको अभियानमा हामीसँग जोडिनुहोस्।" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero />

        {/* ── Founder Section ── */}
        <section className="border-t-4 border-amber-500" style={{ background: 'linear-gradient(135deg, #f0faf4 0%, #fefce8 100%)' }}>
          <div className="max-w-5xl mx-auto px-5 py-16 sm:py-20">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

              {/* Photo column */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full p-[5px] shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #d97706)' }}>
                  <img
                    src="/Ujjwal.jpeg"
                    alt="Ujwal Thapa – Founder of Bibeksheel Party"
                    className="w-full h-full rounded-full object-cover object-top border-4 border-white"
                  />
                </div>
                {/* Tribute badge */}
                <span className="mt-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-amber-300 bg-amber-50 text-amber-800">
                  १९७७ – २०२१
                </span>
              </div>

              {/* Content column */}
              <div className="flex-1 text-center md:text-left">

                {/* Label */}
                <p className="text-xs font-black tracking-[0.18em] uppercase text-amber-600 mb-2">
                  {isNe ? 'संस्थापक' : 'Founder'}
                </p>

                {/* Name */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 leading-tight mb-1">
                  {isNe ? 'उज्वल थापा' : 'Ujwal Thapa'}
                </h2>
                <p className="text-base font-medium text-emerald-600 italic mb-5">
                  {isNe ? 'Ujwal Thapa' : 'उज्वल थापा'}
                </p>

                {/* Divider */}
                <div className="w-14 h-1 rounded-full mb-6 mx-auto md:mx-0"
                  style={{ background: 'linear-gradient(90deg,#16a34a,#d97706)' }} />

                {/* Vision */}
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
                    {isNe ? '🌟 दृष्टिकोण' : '🌟 Vision'}
                  </p>
                  <p className="text-base sm:text-lg text-emerald-900 font-semibold leading-relaxed italic">
                    {isNe
                      ? '"नेपालमा नै हरेक नागरिकले स्वाभिमानसहितको जीवन जिउन सक्ने वातावरण बनाउनेछौं।"'
                      : '"We will build an environment in Nepal where every citizen can live a life of dignity, without being forced to leave their homeland."'}
                  </p>
                </div>

                {/* Mission */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
                    {isNe ? '🎯 अभियान' : '🎯 Mission'}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {(isNe ? [
                      'सुसंस्कृत राजनीतिमार्फत सत्ताको संस्कार बदल्ने।',
                      'युवा नेतृत्व र पारदर्शी शासन स्थापना गर्ने।',
                      'भ्रष्टाचारमा शून्य सहनशीलता, नेपाललाई जवाफदेही राज्य बनाउने।',
                      'नेपाल नेपालीले नै बनाउने, प्रतिभा फर्काउने, देश बनाउने।',
                    ] : [
                      'Change the culture of power through ethical, cultured politics.',
                      'Establish transparent governance led by youth.',
                      'Zero tolerance for corruption, building an accountable Nepal.',
                      'Nepal built by Nepalis: bring talent home, build the nation.',
                    ]).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legacy line */}
                <p className="text-sm text-emerald-700 font-semibold border-l-4 border-amber-400 pl-4 italic">
                  {isNe
                    ? 'उहाँ गइसके, तर उहाँको सपना हामीमा जीवित छ। हामी त्यो सपना पूरा गर्दै अघि बढिरहेका छौं।'
                    : 'He is gone, but his dream lives within us and we carry it forward every day.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <CoreValues />

        {/* YouTube Video Section – autoplays (muted) when scrolled into view */}
        <section ref={sectionRef} style={{ background: '#f5f5f0', padding: '3rem 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#2d5a27', marginBottom: '0.5rem' }}>
            नेपाल हाम्रो घर हो, डेरा होईन !
          </h2>
          <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Nepal hamro ghar ho ! Must watch Nepal Video clip !
          </p>
          {/* Outer div constrains max-width; inner div enforces 16:9 ratio */}
          <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
            }}>
              <iframe
                key={videoSrc}
                src={videoSrc}
                title="नेपाल हाम्रो घर हो, डेरा होईन ! Nepal hamro ghar ho ! Must watch Nepal Video clip !"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>
          </div>
        </section>

        <Updates />
        <Membership />
        <Donate />
      </main>
    </>
  );
}
