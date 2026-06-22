import { useState } from 'react';
import { motion } from 'motion/react';
import { contact, site } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';
import ContactDetails from './ContactDetails.jsx';
import { getIcon } from './iconMap.js';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const ArrowRight = getIcon('arrowRight');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoLink = () => {
    const businessLine = form.business.trim()
      ? `Business: ${form.business.trim()}\n`
      : '';
    const subject = form.business.trim()
      ? `${contact.mailSubjectPrefix} — ${form.name.trim()} (${form.business.trim()})`
      : `${contact.mailSubjectPrefix} — ${form.name.trim()}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      businessLine,
      '---',
      '',
      form.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${site.email}?${params.toString()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailtoLink();
    setSubmitted(true);
  };

  const inputClass =
    'w-full h-11 px-4 rounded-xl border border-black/10 bg-white text-[#0A0A0A] text-[15px] placeholder:text-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#4F7CFF]/30 focus:border-[#4F7CFF]/50 transition-shadow';

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              subtitle={contact.subtitle}
              align="left"
            />
            <ContactDetails className="mt-8" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div
                className="rounded-2xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/5 p-8 text-center"
                role="status"
              >
                <p className="text-[17px] font-medium text-[#0A0A0A]">{contact.successMessage}</p>
                <p className="mt-2 text-[14px] text-[#52525B]">{contact.successHint}</p>
                <p className="mt-4 text-[14px] text-[#52525B]">
                  Didn&apos;t open?{' '}
                  <a href={`mailto:${site.email}`} className="text-[#4F7CFF] hover:underline">
                    Email us
                  </a>{' '}
                  or{' '}
                  <a href={`tel:+1${site.phone}`} className="text-[#4F7CFF] hover:underline">
                    call {site.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-black/5 bg-[#FAFAFA] p-6 sm:p-8 space-y-4"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5">
                      {contact.fields.name.label}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={contact.fields.name.placeholder}
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5">
                      {contact.fields.email.label}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={contact.fields.email.placeholder}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5">
                    {contact.fields.business.label}
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    placeholder={contact.fields.business.placeholder}
                    value={form.business}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-[#0A0A0A] mb-1.5">
                    {contact.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={contact.fields.message.placeholder}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} h-auto py-3 resize-y min-h-[120px]`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto h-12 px-6 rounded-full bg-[#0A0A0A] text-white text-[14px] font-medium hover:bg-[#0A0A0A]/90 transition-colors"
                >
                  {contact.submit}
                  {ArrowRight && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
