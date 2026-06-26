import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCsswizardry,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiReactrouter,
  SiChartdotjs,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { Terminal } from 'lucide-react';

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: SiReact, proficiency: 95, color: '#61dafb' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, proficiency: 95, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, proficiency: 90, color: '#3178c6' },
      { name: 'HTML5', icon: SiHtml5, proficiency: 95, color: '#e34f26' },
      { name: 'CSS3', icon: SiCsswizardry, proficiency: 92, color: '#1572b6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 90, color: '#06b6d4' },
      { name: 'Bootstrap', icon: SiBootstrap, proficiency: 85, color: '#7952b3' },
      { name: 'Material UI', icon: SiMui, proficiency: 85, color: '#007fff' },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Redux', icon: SiRedux, proficiency: 92, color: '#764abc' },
      { name: 'Context API', icon: SiReact, proficiency: 90, color: '#61dafb' },
    ],
  },
  {
    category: 'Libraries',
    items: [
      { name: 'React Router', icon: SiReactrouter, proficiency: 90, color: '#ca4245' },
      { name: 'Chart.js', icon: SiChartdotjs, proficiency: 85, color: '#ff6384' },
    ],
  },
  {
    category: 'Performance',
    items: [
      { name: 'Lazy Loading', icon: SiReact, proficiency: 88, color: '#61dafb' },
      { name: 'Code Splitting', icon: SiReact, proficiency: 88, color: '#61dafb' },
      { name: 'SSR', icon: SiReact, proficiency: 80, color: '#61dafb' },
      { name: 'Performance Optimization', icon: SiReact, proficiency: 92, color: '#61dafb' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit, proficiency: 90, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, proficiency: 90, color: '#ffffff' },
      { name: 'VS Code', icon: Terminal, proficiency: 95, color: '#007acc' },
      { name: 'Figma', icon: SiFigma, proficiency: 85, color: '#f24e1e' },
    ],
  },
];
