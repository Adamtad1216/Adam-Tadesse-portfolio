import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adamtadesse.dev'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  title: {
    default: 'Adam Tadesse — Full-Stack Developer',
    template: '%s | Adam Tadesse',
  },
  description:
    'Full-stack developer focused on backend systems, databases, architecture, and building complete digital products from idea to deployment. Based in Addis Ababa, Ethiopia.',
  keywords: [
    'Adam Tadesse',
    'full-stack developer',
    'backend engineer',
    'software engineer',
    'Addis Ababa',
    'Ethiopia',
    'MERN stack',
    'system architecture',
  ],
  authors: [{ name: 'Adam Tadesse' }],
  creator: 'Adam Tadesse',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Adam Tadesse — Full-Stack Developer',
    description:
      'Full-stack developer focused on backend systems, databases, architecture, and building complete digital products from idea to deployment.',
    siteName: 'Adam Tadesse',
    images: [
      {
        url: '/images/adam.jpg',
        alt: 'Adam Tadesse — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Tadesse — Full-Stack Developer',
    description:
      'Full-stack developer focused on backend systems, databases, architecture, and building complete digital products from idea to deployment.',
    images: ['/images/adam.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-base text-text-primary">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-text-inverse focus:rounded-lg focus:font-medium"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
