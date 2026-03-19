import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Building2, Smartphone, QrCode, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.donatePage.pageTitle}</title>
        <meta name="description" content={t.donatePage.pageDesc} />
        <meta name="keywords" content="Donate Bibeksheel, Fund Bibeksheel, Nepal Bibeksheel Party Donation, विवेकशील पार्टी सहयोग" />
        <meta property="og:title" content={t.donatePage.pageTitle} />
        <meta property="og:description" content={t.donatePage.pageDesc} />
      </Helmet>

      <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HeartHandshake className="w-8 h-8 text-amber-500" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.donatePage.pageTitle}</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t.donatePage.pageDesc}
            </p>
          </div>

          <div className="space-y-8">
            {/* Bank Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.donatePage.bankDetails}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
                <div className="text-gray-500">{t.donatePage.bankName}:</div>
                <div className="sm:col-span-2 font-semibold text-gray-900">[Bank Name Here]</div>
                
                <div className="text-gray-500">{t.donatePage.accountName}:</div>
                <div className="sm:col-span-2 font-semibold text-gray-900">नेपाल विवेकशील पार्टी</div>
                
                <div className="text-gray-500">{t.donatePage.accountNumber}:</div>
                <div className="sm:col-span-2 font-semibold text-gray-900 font-mono text-xl tracking-wider text-amber-600">[Account Number Here]</div>
                
                <div className="text-gray-500">{t.donatePage.branch}:</div>
                <div className="sm:col-span-2 font-semibold text-gray-900">[Branch Name Here]</div>
              </div>
            </motion.div>

            {/* Digital Wallets */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.donatePage.digitalWallets}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
                <div className="text-gray-500 flex items-center gap-2">
                  <span className="font-bold text-green-600">eSewa</span> ID:
                </div>
                <div className="sm:col-span-2 font-semibold text-gray-900 font-mono text-xl tracking-wider">[eSewa Number Here]</div>
                
                <div className="text-gray-500 flex items-center gap-2">
                  <span className="font-bold text-purple-600">Khalti</span> ID:
                </div>
                <div className="sm:col-span-2 font-semibold text-gray-900 font-mono text-xl tracking-wider">[Khalti Number Here]</div>
              </div>
            </motion.div>

            {/* QR Codes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.donatePage.scanQr}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="w-64 h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                    <span className="text-gray-400 text-sm text-center px-4">Fonepay QR Code<br/>(Replace with Image tag)</span>
                    {/* <img src="/fonepay-qr.png" alt="Fonepay QR" className="absolute inset-0 w-full h-full object-contain p-2" /> */}
                  </div>
                  <span className="font-bold text-xl text-gray-900">Fonepay</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="w-64 h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                    <span className="text-gray-400 text-sm text-center px-4">eSewa QR Code<br/>(Replace with Image tag)</span>
                    {/* <img src="/esewa-qr.png" alt="eSewa QR" className="absolute inset-0 w-full h-full object-contain p-2" /> */}
                  </div>
                  <span className="font-bold text-xl text-gray-900">eSewa</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-amber-50 text-amber-800 p-6 rounded-xl text-center font-medium border border-amber-100"
            >
              {t.donatePage.instruction}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
