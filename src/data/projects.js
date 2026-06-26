import { SiReact, SiTypescript, SiRedux, SiChartdotjs } from 'react-icons/si';

export const projects = [
  {
    id: 1,
    title: 'Chola One MIS',
    description: 'Enterprise MIS dashboard for loan management. A comprehensive management information system for tracking and analyzing loan portfolios.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    responsibilities: [
      'React + TypeScript Development',
      'Charts and Maps integration',
      'Responsive UI design',
      'Cross-browser support',
      'Reusable Components creation',
      'Performance Optimization',
    ],
    tech: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux', icon: SiRedux },
      { name: 'Chart.js', icon: SiChartdotjs },
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'Dashboard',
  },
  {
    id: 2,
    title: 'Click To Borrow (C2B)',
    description: 'Loan Against Shares platform. A digital lending platform enabling users to pledge their securities for quick loans.',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    responsibilities: [
      'eMandate Integration',
      'UPI Mandate implementation',
      'Aadhaar eSign integration',
      'Bank Verification system',
      'Responsive UI design',
    ],
    tech: [
      { name: 'React', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'FinTech',
  },
  {
    id: 3,
    title: 'Chola One CFA',
    description: 'Vehicle and Home Loan Dashboard. A comprehensive dashboard for customer-facing agents to manage loan applications.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    responsibilities: [
      'Role Based Access Control',
      'User Dashboard development',
      'Responsive Components creation',
      'Performance Optimization',
    ],
    tech: [
      { name: 'React', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'Dashboard',
  },
];
