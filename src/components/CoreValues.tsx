import { motion } from 'motion/react';
import { Award, ShieldCheck, Eye, Zap, Heart, UserMinus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CoreValues() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.values.items[0].title,
      description: t.values.items[0].description,
      icon: <Award className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.values.items[1].title,
      description: t.values.items[1].description,
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.values.items[2].title,
      description: t.values.items[2].description,
      icon: <Eye className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.values.items[3].title,
      description: t.values.items[3].description,
      icon: <Zap className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.values.items[4].title,
      description: t.values.items[4].description,
      icon: <Heart className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.values.items[5].title,
      description: t.values.items[5].description,
      icon: <UserMinus className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <section id="values" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.values.title}</h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
