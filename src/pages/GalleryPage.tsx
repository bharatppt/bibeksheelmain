import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

// All images from the public folder
const galleryImages = [
  '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg',
  '/9.jpg', '/10.jpg', '/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg', '/16.jpg',
  '/hero image.png', '/our goal.png', '/information.png', '/travel.png', '/helpus.png', '/logo.png'
];

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>{language === 'ne' ? 'फोटो ग्यालरी' : 'Photo Gallery'} | Nepal Bibeksheel Party</title>
      </Helmet>

      {/* Page Header */}
      <div className="pt-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.gallery.title}
          </motion.h1>
          <p className="text-emerald-200 text-lg">{t.gallery.subtitle}</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-10 text-lg max-w-3xl mx-auto">
            {t.gallery.description}
          </p>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (index % 10) * 0.05, duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid bg-gray-100 shadow-sm"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white w-10 h-10 drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 cursor-zoom-out"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 max-w-full max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
