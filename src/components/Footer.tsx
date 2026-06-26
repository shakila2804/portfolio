import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/shakilasekar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shakilasekar', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shakilass2804@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-semibold text-white">
              Shakila<span className="text-primary-400">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-error-400 fill-error-400" />
            <span>by Shakila Sekar</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Shakila Sekar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
