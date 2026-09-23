import type { Service } from '../types';
import { projects } from './projects';

export const services: Service[] = [
  {
    id: 's1',
    number: '01',
    name: 'Design',
    description: 'We craft beautiful, intuitive digital experiences that capture your brand\'s essence and engage your audience from the first click. Every pixel serves a strategic purpose to guide users toward conversion.',
    included: [
      'UI/UX Design & Prototyping',
      'Brand Identity & Logo Design',
      'Design Systems & Style Guides',
      'Web & App Interface Design',
      'Marketing Collateral & Print',
      'Pitch Decks & Presentations'
    ],
    projects: projects.filter(p => p.category === 'Design')
  },
  {
    id: 's2',
    number: '02',
    name: 'Develop',
    description: 'Robust, scalable, and lightning-fast web applications built on modern technology stacks. We turn complex requirements into seamless, secure, and easily maintainable digital products.',
    included: [
      'Custom Website Development',
      'E-Commerce (Shopify / WooCommerce)',
      'Web App & SaaS Development',
      'CMS Integration (WordPress / Webflow)',
      'API Development & Integration',
      'Performance Optimisation & Core Web Vitals'
    ],
    projects: projects.filter(p => p.category === 'Develop')
  },
  {
    id: 's3',
    number: '03',
    name: 'Market',
    description: 'Data-driven marketing campaigns that cut through the noise. We identify where your audience lives online and build targeted strategies to bring them directly to your digital doorstep.',
    included: [
      'SEO',
      'Google & Meta Paid Advertising',
      'Email Marketing & Automation',
      'Content Strategy & Creation',
      'Social Media Management',
      'Conversion Rate Optimisation (CRO)'
    ],
    projects: projects.filter(p => p.category === 'Market')
  },
  {
    id: 's4',
    number: '04',
    name: 'Scale',
    description: 'Once you have traction, we help you multiply it. By optimising systems, automating workflows, and refining sales funnels, we turn steady growth into exponential, sustainable scale.',
    included: [
      'CRM Setup & Configuration (GHL / HubSpot)',
      'Marketing Automation & Workflows',
      'Lead Generation Funnels',
      'Email Nurture Sequences',
      'Sales Pipeline Optimisation',
      'Analytics & Growth Reviews'
    ],
    projects: projects.filter(p => p.category === 'Scale')
  }
];
