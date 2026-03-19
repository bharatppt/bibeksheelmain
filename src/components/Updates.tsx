import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Updates() {
  const { t, language } = useLanguage();

  const committee = [
    { sn: '1', role: 'Chairperson', name: 'Singh Bahadur Moktan', district: 'Kathmandu' },
    { sn: '2', role: 'Vice Chairperson', name: 'Sangita Bataju', district: 'Lalitpur' },
    { sn: '3', role: 'Secretary (Training & Capacity Building)', name: 'Ritesh Malla', district: 'Kathmandu' },
    { sn: '4', role: 'Secretary (Campaign & Network)', name: 'Sita Kumari Mainali', district: 'Kathmandu' },
    { sn: '5', role: 'Secretary (Policy & Training)', name: 'Binita Kumari Sharma Chaulagain', district: 'Kathmandu' },
    { sn: '6', role: 'Spokesperson', name: 'Krishna Dev Bhandari', district: 'Makwanpur' },
  ];

  const committeeNe = [
    { sn: '१', role: 'अध्यक्ष', name: 'सिंह बहादुर मोक्तान', district: 'काठमाडौँ' },
    { sn: '२', role: 'उपाध्यक्ष', name: 'संगीता बाटाजु', district: 'ललितपुर' },
    { sn: '३', role: 'सचिव (प्रशिक्षण तथा क्षमता विकास)', name: 'रितेश मल्ल', district: 'काठमाडौँ' },
    { sn: '४', role: 'सचिव (अभियान र सञ्जाल)', name: 'सिता कुमारी मैनाली', district: 'काठमाडौँ' },
    { sn: '५', role: 'सचिव (नीति तथा प्रशिक्षण)', name: 'बिनिता कुमारी शर्मा चौलागाई', district: 'काठमाडौँ' },
    { sn: '६', role: 'प्रवक्ता', name: 'कृष्ण देव भण्डारी', district: 'मकवानपुर' },
  ];

  const currentCommittee = language === 'en' ? committee : committeeNe;

  return (
    <section id="updates" className="py-20 bg-emerald-50">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.updates.title}</h2>
          <div className="mt-3 w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Vivekasheel Yatra Movement Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-emerald-800 rounded-3xl p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-6 shadow-lg"
        >
          <div className="text-5xl">🚶</div>
          <div className="flex-1">
            <span className="text-amber-300 text-sm font-bold uppercase tracking-wider">
              {language === 'ne' ? 'राष्ट्रिय आन्दोलन' : 'National Movement'}
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-2">{t.updates.vivekasheelYatra}</h3>
            <p className="text-emerald-200 text-sm">
              {language === 'ne'
                ? 'काठमाडौं → बर्दिवास → इटहरी → हेटौंडा → चितवन → बर्दघाट → बुटवल → दाङ → लुम्बिनी → काठमाडौं'
                : 'Kathmandu → Bardiwas → Itahari → Hetauda → Chitwan → Bardaghat → Butwal → Dang → Lumbini → Kathmandu'}
            </p>
          </div>
          <Link
            to="/events"
            className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center gap-2 flex-shrink-0"
          >
            {t.updates.viewEvents}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Convention Results Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                {t.updates.badge}
              </span>
            </div>

            <p className="text-gray-600 font-medium mb-6">{t.updates.intro}</p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.updates.heading1}</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">{t.updates.para1}</p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.updates.heading2}</h4>
            <p className="text-gray-700 mb-8 leading-relaxed">{t.updates.para2}</p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.updates.heading3}</h4>
            <p className="text-gray-700 mb-6">{t.updates.para3}</p>

            <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    <th className="p-4 font-semibold">{t.updates.table.sn}</th>
                    <th className="p-4 font-semibold">{t.updates.table.role}</th>
                    <th className="p-4 font-semibold">{t.updates.table.name}</th>
                    <th className="p-4 font-semibold">{t.updates.table.district}</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentCommittee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="p-4 text-gray-500">{member.sn}</td>
                      <td className="p-4 font-semibold text-emerald-800">{member.role}</td>
                      <td className="p-4 text-gray-800">{member.name}</td>
                      <td className="p-4 text-gray-600">{member.district}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 rounded-xl p-5 text-gray-700 border border-emerald-100">
              <p>{t.updates.additionalMembers}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
