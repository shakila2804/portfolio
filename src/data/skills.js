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
      { name: 'React.js', icon: SiReact, proficiency: 95, color: '#61dafb', keywords: ['Hooks', 'Context API', 'State', 'VDOM', 'Suspense'] },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, proficiency: 95, color: '#f7df1e', keywords: ['Promises', 'Async/Await', 'DOM', 'Closures', 'OOP'] },
      { name: 'TypeScript', icon: SiTypescript, proficiency: 90, color: '#3178c6', keywords: ['Generics', 'Interfaces', 'Types', 'Utility Types'] },
      { name: 'HTML5', icon: SiHtml5, proficiency: 95, color: '#e34f26', keywords: ['Semantic Tags', 'Accessibility', 'SEO', 'Web Storage'] },
      { name: 'CSS3', icon: SiCsswizardry, proficiency: 92, color: '#1572b6', keywords: ['Flexbox', 'Grid', 'Animations', 'Variables'] },
      { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 90, color: '#06b6d4', keywords: ['Utility-First', 'Responsive', 'JIT', 'Themes'] },
      { name: 'Bootstrap', icon: SiBootstrap, proficiency: 85, color: '#7952b3', keywords: ['Grid System', 'Components', 'Utilities'] },
      { name: 'Material UI', icon: SiMui, proficiency: 85, color: '#007fff', keywords: ['Theming', 'Grid', 'Customization', 'Icons'] },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Redux', icon: SiRedux, proficiency: 92, color: '#764abc', keywords: ['Toolkit', 'Actions', 'Reducers', 'Slices', 'RTK Query'] },
      { name: 'Context API', icon: SiReact, proficiency: 90, color: '#61dafb', keywords: ['Providers', 'Consumers', 'Global State'] },
    ],
  },
  {
    category: 'Libraries',
    items: [
      { name: 'React Router', icon: SiReactrouter, proficiency: 90, color: '#ca4245', keywords: ['Dynamic Routing', 'Hooks', 'Guards', 'Loaders'] },
      { name: 'Chart.js', icon: SiChartdotjs, proficiency: 85, color: '#ff6384', keywords: ['Data Viz', 'Custom Tooltips', 'Animations'] },
    ],
  },
  {
    category: 'Performance',
    items: [
      { name: 'Lazy Loading', icon: SiReact, proficiency: 88, color: '#61dafb', keywords: ['Suspense', 'Code Splitting', 'Performance'] },
      { name: 'Code Splitting', icon: SiReact, proficiency: 88, color: '#61dafb', keywords: ['Dynamic Imports', 'Bundler Config'] },
      { name: 'SSR', icon: SiReact, proficiency: 80, color: '#61dafb', keywords: ['Next.js', 'SEO', 'Initial Load', 'Hydration'] },
      { name: 'Performance Optimization', icon: SiReact, proficiency: 92, color: '#61dafb', keywords: ['Memoization', 'Lighthouse', 'Virtualization'] },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit, proficiency: 90, color: '#f05032', keywords: ['Branching', 'Merging', 'Rebasing', 'Conflicts'] },
      { name: 'GitHub', icon: SiGithub, proficiency: 90, color: '#ffffff', keywords: ['PRs', 'Actions (CI/CD)', 'Pages', 'Issues'] },
      { name: 'VS Code', icon: Terminal, proficiency: 95, color: '#007acc', keywords: ['Extensions', 'Debugging', 'Snippets', 'Git'] },
      { name: 'Figma', icon: SiFigma, proficiency: 85, color: '#f24e1e', keywords: ['Prototyping', 'Design Systems', 'Assets Export'] },
    ],
  },
];
