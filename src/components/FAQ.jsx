import { faq } from '../data/siteContent.js';
import Accordion from './Accordion.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mt-10 sm:mt-12 rounded-2xl bg-white border border-black/5 px-4 sm:px-6">
          <Accordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
