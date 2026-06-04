import { motion } from 'motion/react';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white text-[12px] text-[#0A0A0A]/70 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
          {eyebrow}
        </div>
      )}
      <h2>{title}</h2>
      {subtitle && (
        <p className="mt-4 text-[#52525B] text-[15px] sm:text-[17px] leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
