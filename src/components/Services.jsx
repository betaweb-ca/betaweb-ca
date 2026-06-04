import { motion } from 'motion/react';
import { services } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';
import { getIcon } from './iconMap.js';

export default function Services() {
  const ArrowUpRight = getIcon('arrowUpRight');

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative rounded-2xl border border-black/5 bg-white p-6 sm:p-7 hover:border-black/15 hover:shadow-[0_10px_40px_-12px_rgba(10,10,10,0.15)] transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] grid place-items-center group-hover:bg-[#4F7CFF] transition-colors">
                    {Icon && <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2} />}
                  </div>
                  {ArrowUpRight && (
                    <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#0A0A0A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
                <h3 className="mt-6">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#52525B] leading-relaxed">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
