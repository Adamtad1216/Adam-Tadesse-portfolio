import Image from 'next/image';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle bg-base" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border-subtle bg-surface flex items-center justify-center p-1 shrink-0">
                <Image
                  src={siteConfig.logo || '/images/logo.png'}
                  alt={`${siteConfig.name} logo`}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h2 className="font-display text-xl font-bold text-text-primary">
                {siteConfig.name}
              </h2>
            </div>
            <p className="text-sm text-text-muted">{siteConfig.title}</p>
            <p className="text-sm text-text-muted">{siteConfig.location}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Adamtad1216"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/40 transition-all duration-300 text-text-muted hover:text-accent"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              <span className="text-sm">GitHub</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-tadesse-23b4b1368"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/40 transition-all duration-300 text-text-muted hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
              <span className="text-sm">LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:adamtadesse9@gmail.com"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/40 transition-all duration-300 text-text-muted hover:text-accent"
              aria-label="Send email"
            >
              <Mail size={16} />
              <span className="text-sm">Email</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted italic font-mono">
            Built with curiosity, systems thinking, and a lot of iteration.
          </p>
        </div>
      </div>
    </footer>
  );
}
