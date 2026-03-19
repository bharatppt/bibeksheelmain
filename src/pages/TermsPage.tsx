import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function TermsPage() {
  const { language } = useLanguage();

  const title = language === 'ne' ? 'प्रयोगका सर्तहरू' : 'Terms of Use';
  const lastUpdated = language === 'ne' ? 'अन्तिम अद्यावधिक: चैत २०८२' : 'Last Updated: March 2026';

  return (
    <>
      <Helmet>
        <title>{title} | Nepal Bibeksheel Party</title>
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-emerald-50 to-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">{title}</h1>
            <p className="text-gray-500 font-medium">{lastUpdated}</p>
          </motion.div>

          {language === 'en' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="prose prose-emerald lg:prose-lg text-gray-700 max-w-none space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-emerald-100"
            >
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Nepal Bibeksheel Party website, you agree to comply with and be bound by these Terms of Use. If you disagree with any part of these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
                <p>
                  The content, layout, design, data, graphics, and trademarks featured on this website are protected by intellectual property laws and are closely owned by Nepal Bibeksheel Party. Users are permitted to read, print, and download extracts for personal and non-commercial use only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Commitments</h2>
                <p>
                  You agree to use this site only for lawful purposes in a manner that does not infringe the rights, or restrict or inhibit the use and enjoyment of this site by any third party. Harassment, the transmission of offensive content, or the disruption of the normal flow of dialogue within the website is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Limitation of Liability</h2>
                <p>
                  The information on this website is provided free of charge, and while we strive to keep the information up to date and correct, we accept no liability for any loss or damage of any nature arising from the use of this website or the information it contains.
                </p>
              </section>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="prose prose-emerald lg:prose-lg text-gray-700 max-w-none space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-emerald-100"
            >
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">१. सर्तहरूको स्वीकृति</h2>
                <p>
                  नेपाल विवेकशील पार्टीको वेबसाइटमा पहुँच गरेर र प्रयोग गरेर, तपाईं यी प्रयोगका सर्तहरूको पालना गर्न र यसबाट बाँधिन सहमत हुनुहुन्छ। यदि तपाईं यी सर्तहरूको कुनै पनि अङ्गसँग असहमत हुनुहुन्छ भने, कृपया हाम्रो वेबसाइट प्रयोग नगर्नुहोला।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">२. बौद्धिक सम्पत्ति अधिकार</h2>
                <p>
                  यस वेबसाइटमा प्रस्तुत सामग्री, लेआउट, डिजाइन, डाटा, ग्राफिक्स, र ट्रेडमार्कहरू बौद्धिक सम्पत्ति कानूनद्वारा सुरक्षित छन् र नेपाल विवेकशील पार्टीको स्वामित्वमा छन्। प्रयोगकर्ताहरूलाई व्यक्तिगत र गैर-व्यावसायिक प्रयोगको लागि मात्र यसका अंशहरू पढ्न, छाप्न, र डाउनलोड गर्न अनुमति छ।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">३. प्रयोगकर्ताको प्रतिबद्धता</h2>
                <p>
                  तपाईं यस साइटलाई पूर्णतया कानुनी उद्देश्यहरूका लागि र कुनै तेस्रो पक्षको साइट प्रयोग गर्न पाउने अधिकारमा खलल वा अवरोध नपुर्याउने ढङ्गले मात्र प्रयोग गर्न सहमत हुनुहुन्छ। यस वेबसाइटभित्र दुर्व्यवहार, आपत्तिजनक सामग्रीको प्रसारण वा संवादको सामान्य प्रवाहमा बाधा पुर्याउन सख्त निषेध गरिएको छ।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">४. दायित्वको सीमितता</h2>
                <p>
                  यस वेबसाइटमा भएका जानकारीहरू निःशुल्क उपलब्ध गराइएका छन्। हामी जानकारीलाई अद्यावधिक र सही राख्ने प्रयास गर्छौँ, तापनि यस वेबसाइट वा यसमा भएका जानकारीहरूको प्रयोगबाट उत्पन्न हुने कुनै पनि प्रकारको हानि वा नोक्सानीको लागि हामी कुनै दायित्व लिनेछैनौँ।
                </p>
              </section>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
