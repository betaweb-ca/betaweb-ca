/**
 * Central content for BetaWeb.ca — edit text here without touching components.
 */

export const site = {
  name: 'BetaWeb',
  domain: 'betaweb.ca',
  email: 'betaweb.ca@gmail.com',
  location: 'Built in Canada',
  copyrightYear: 2026,
  seo: {
    title: 'BetaWeb | Affordable Website Design for Small Businesses',
    description:
      'BetaWeb designs and builds fast, modern websites for small businesses in Canada — premium quality without agency-level prices. From $299.',
    ogDescription:
      'Premium websites for small businesses. Fast turnaround, mobile-first, SEO-ready — without the agency price tag.',
  },
};

export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Get started',
};

export const hero = {
  badge: 'Now booking projects for Summer 2026',
  title: 'Premium websites.',
  titleAccent: 'Fraction of the price.',
  subtitle:
    'We design and build fast, modern websites for small businesses — without charging agency-level prices.',
  primaryCta: 'Book a free call',
  secondaryCta: 'View demo sites',
  browserUrl: 'northfield-bistro.com',
  mockupBadge: 'Now open for dinner',
};

export const trust = {
  eyebrow: 'Built for startups, local businesses & creators',
  brands: ['Northfield', 'Atlas Gym', 'Ember & Oak', 'Maple Realty', 'Bright Smile', 'Loop'],
  stats: [
    { icon: 'zap', label: 'Fast turnaround', value: '2–3 weeks' },
    { icon: 'smartphone', label: 'Mobile optimized', value: 'Every build' },
    { icon: 'search', label: 'SEO ready', value: 'Out of the box' },
    { icon: 'dollar', label: 'Affordable', value: 'From $299' },
  ],
};

export const services = {
  eyebrow: 'Services',
  title: 'Everything you need to launch.',
  subtitle:
    'From the first sketch to a live, indexed, mobile-ready website — we handle every step.',
  items: [
    {
      icon: 'palette',
      title: 'Website Design',
      desc: 'Bespoke layouts crafted for your brand — not a template anyone else can buy.',
    },
    {
      icon: 'code',
      title: 'Website Development',
      desc: 'Fast, hand-coded sites built on modern tooling. No bloated page builders.',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Optimization',
      desc: 'Pixel-perfect on every device. Your customers are on phones — your site should be too.',
    },
    {
      icon: 'server',
      title: 'Hosting & Maintenance',
      desc: 'Managed hosting, security updates and uptime monitoring on a simple monthly plan.',
    },
    {
      icon: 'search',
      title: 'SEO Setup',
      desc: 'Schema, meta, performance and accessibility baked in so you actually rank.',
    },
    {
      icon: 'rocket',
      title: 'Domain & Launch',
      desc: 'We handle domain config, DNS and the launch checklist. You just go live.',
    },
  ],
};

export const whyUs = {
  eyebrow: 'Why BetaWeb',
  title: 'Your business deserves',
  titleAccent: 'a better website.',
  subtitle:
    'We obsess over the small details that make a website feel premium — and pass the savings on to small businesses that need them most.',
  cta: 'Start your project →',
  points: [
    {
      title: 'Premium quality, not premium pricing',
      desc: 'Agency-grade design and code without the $10K invoice.',
    },
    { title: 'Fast delivery', desc: 'Most sites go live in 2 to 3 weeks, not months.' },
    { title: 'Mobile-first design', desc: 'We design for thumbs first, then scale up to desktop.' },
    { title: 'Ongoing support', desc: 'Optional monthly plans for updates, edits and hosting.' },
    { title: 'Modern SEO-ready builds', desc: 'Performance, schema and accessibility from day one.' },
    { title: 'No complicated process', desc: 'One call, one designer, one clear timeline.' },
  ],
};

export const portfolio = {
  eyebrow: 'Demo work',
  title: 'Built to convert. Designed to impress.',
  subtitle:
    'A glimpse of what your business could look like online — all built and designed in-house.',
  demos: [
    {
      category: 'Restaurant',
      name: 'Northfield Bistro',
      url: 'northfield-bistro.com',
      tagline: 'Seasonal. Local. Modern.',
      palette: { bg: '#0E1014', fg: '#FFFFFF', accent: '#E8B86B' },
    },
    {
      category: 'Gym',
      name: 'Atlas Strength',
      url: 'atlas-strength.co',
      tagline: 'Train harder. Live stronger.',
      palette: { bg: '#111111', fg: '#FFFFFF', accent: '#4F7CFF' },
    },
    {
      category: 'Barber',
      name: 'Ember & Oak',
      url: 'emberandoak.co',
      tagline: 'Classic cuts. Modern shop.',
      palette: { bg: '#1A1410', fg: '#F5E6D3', accent: '#C97B3D' },
    },
    {
      category: 'Real Estate',
      name: 'Maple Realty',
      url: 'mapleproperty.ca',
      tagline: 'Find your next chapter.',
      palette: { bg: '#FFFFFF', fg: '#0A0A0A', accent: '#2E7D5B' },
    },
    {
      category: 'Dental',
      name: 'Bright Smile Co.',
      url: 'brightsmile.dental',
      tagline: 'Healthy smiles, every visit.',
      palette: { bg: '#F4F8FC', fg: '#0A2540', accent: '#4F7CFF' },
    },
    {
      category: 'Clothing',
      name: 'Loop Apparel',
      url: 'shoploop.com',
      tagline: 'Essentials, reimagined.',
      palette: { bg: '#FAFAF7', fg: '#0A0A0A', accent: '#0A0A0A' },
    },
  ],
};

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Simple, honest pricing.',
  subtitle: 'No hidden fees. No long contracts. Monthly support plans available.',
  footnote: 'Monthly support & hosting plans start at',
  footnotePrice: '$29/mo',
  tiers: [
    {
      name: 'Starter',
      price: '$299',
      priceNote: 'starting at',
      desc: 'A polished single-page site for a clean online presence.',
      features: [
        'Single-page application',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Domain & launch support',
      ],
      cta: 'Get started',
      highlighted: false,
    },
    {
      name: 'Business',
      price: '$499',
      priceNote: 'starting at',
      desc: 'Everything most small businesses need.',
      features: [
        'Multi-page full business website',
        'Premium custom design',
        'SEO setup & schema',
        'Lead capture forms',
        '30 days post-launch support',
      ],
      cta: 'Most popular',
      highlighted: true,
      badge: 'Most popular',
    },
    {
      name: 'Premium',
      price: 'Custom',
      priceNote: 'tailored quote',
      desc: 'Booking, e-commerce, or something custom.',
      features: [
        'Everything in Business',
        'Booking or e-commerce',
        'Custom integrations',
        'Advanced animations',
        'Priority support',
        'Performance tuning',
      ],
      cta: 'Get a quote',
      highlighted: false,
    },
  ],
};

export const process = {
  eyebrow: 'Process',
  title: 'From idea to live in 4 simple steps.',
  steps: [
    {
      n: '01',
      title: 'Discovery call',
      desc: 'We learn about your business, goals and brand on a quick 30-minute call.',
    },
    {
      n: '02',
      title: 'Design & build',
      desc: 'We design a custom mockup, then build it as a fast, modern website.',
    },
    {
      n: '03',
      title: 'Revisions',
      desc: 'Two rounds of revisions to make sure everything feels exactly right.',
    },
    {
      n: '04',
      title: 'Launch',
      desc: 'We handle the domain, DNS and go-live checklist. You just hit publish.',
    },
  ],
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions.',
  items: [
    {
      q: 'How long does a website take?',
      a: 'Most projects launch within 2–3 weeks of our discovery call. Larger Premium builds may take 4–6 weeks. We will discuss the timeline during the discovery call.',
    },
    {
      q: 'Do you provide hosting?',
      a: 'Yes — we offer managed hosting plans starting at $19/mo, including SSL, backups and uptime monitoring. You\'re also free to host elsewhere.',
    },
    {
      q: 'Can I request changes later?',
      a: 'Absolutely. You can request small edits anytime on a monthly plan, or buy additional design hours as needed.',
    },
    {
      q: 'Do you build e-commerce websites?',
      a: 'Yes. E-commerce and booking sites fall under our Premium tier — we\'ll quote based on your specific needs and availability.',
    },
    {
      q: 'Is there a monthly fee?',
      a: 'Only if you\'d like one. Hosting and support plans are optional. You own your site outright.',
    },
    {
      q: 'What if I don\'t have content or photos yet?',
      a: 'We help with stock images that fits your brand.',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Tell us about your project.',
  subtitle:
    'Fill out the form — we\'ll open your email app with a pre-filled message to us. Hit send when you\'re ready.',
  fields: {
    name: { label: 'Name', placeholder: 'Jane Smith' },
    email: { label: 'Email', placeholder: 'you@business.com' },
    business: { label: 'Business name', placeholder: 'Your company' },
    message: { label: 'What do you need?', placeholder: 'Tell us about your business and goals…' },
  },
  submit: 'Open in email app',
  mailSubjectPrefix: 'BetaWeb inquiry',
  successMessage: 'Your email app should be open with your message ready to send.',
  successHint: 'Send the email when you\'re ready — we\'ll reply within one business day.',
};

export const finalCta = {
  title: 'Let\'s build your business online.',
  subtitle: 'Get a modern, fast, professional website — without spending thousands.',
  primaryCta: 'Start your website',
  secondaryCta: 'betaweb.ca@gmail.com',
};

export const footer = {
  tagline: 'Premium websites for modern businesses. Built in Canada.',
  status: 'All systems operational',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo work', href: '#work' },
        { label: 'Process', href: '#process' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#top' },
        { label: 'Contact', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Careers', href: 'mailto:hello@betaweb.ca' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ],
  social: [
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: '#', icon: 'github' },
  ],
};
