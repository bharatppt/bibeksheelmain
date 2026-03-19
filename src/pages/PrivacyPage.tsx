import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const title = language === 'ne' ? 'गोपनीयता नीति' : 'Privacy Policy';
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
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information Collection</h2>
                <p>
                  We collect information you provide directly to us when you make a donation, sign up as a member, or fill out a form on our website. This may include your name, email address, phone number, and location details.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of Information</h2>
                <p>
                  The information we collect is used to communicate with you about our campaigns, events, and party updates. We also use your information to process donations securely and manage your membership status.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security and Privacy</h2>
                <p>
                  Nepal Bibeksheel Party is committed to protecting your personal data. We implement reasonable security measures to prevent unauthorized access, disclosure, or alteration of your personal information. We do not sell or rent your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h2>
                <p>
                  If you have any questions or concerns regarding our privacy practices or wish to update your information, please contact us at <strong>bibeksheelparty@gmail.com</strong>.
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
                <h2 className="text-xl font-bold text-gray-900 mb-3">१. जानकारी संकलन</h2>
                <p>
                  तपाईंले आर्थिक सहयोग गर्दा, सदस्यताका लागि फारम भर्दा वा हाम्रो वेबसाइटमा कुनै विवरण दर्ता गर्दा हामी तपाईंले प्रदान गरेको जानकारी संकलन गर्दछौँ। यसमा तपाईंको नाम, इमेल ठेगाना, फोन नम्बर, र स्थान विवरण समावेश हुन सक्छ।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">२. जानकारीको प्रयोग</h2>
                <p>
                  हामीले संकलन गरेका जानकारीहरू हाम्रा अभियानहरू, कार्यक्रमहरू र पार्टीका अपडेटहरूबारे तपाईंसँग कुराकानी गर्न प्रयोग गरिन्छ। तपाईंको आर्थिक सहयोगलाई सुरक्षित रूपमा प्रशोधन गर्न र तपाईंको सदस्यताको व्यवस्थापन गर्न पनि हामी तपाईंको विवरण प्रयोग गर्दछौँ।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">३. डाटा सुरक्षा र गोपनीयता</h2>
                <p>
                  नेपाल विवेकशील पार्टी तपाईंको व्यक्तिगत डाटाको सुरक्षा गर्न प्रतिबद्ध छ। अनाधिकृत पहुँच, प्रकटीकरण वा हेरफेर हुन नदिन हामी उचित सुरक्षा मापदण्डहरू अपनाउँछौँ। हामी तपाईंको व्यक्तिगत जानकारी तेस्रो पक्षलाई बेच्ने वा भाडामा दिने छैनौँ।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">४. सम्पर्क गर्नुहोस्</h2>
                <p>
                  यदि तपाइँसँग हाम्रो गोपनीयता नीतिबारे कुनै प्रश्न वा चिन्ता छ, वा तपाइँ तपाइँको जानकारी अद्यावधिक गर्न चाहनुहुन्छ भने, कृपया हामीलाई <strong>bibeksheelparty@gmail.com</strong> मा सम्पर्क गर्नुहोस्।
                </p>
              </section>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
