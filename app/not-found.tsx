import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-md">
        {/* Visual */}
        <div className="relative">
          <p className="font-display text-[120px] sm:text-[160px] font-bold text-text-primary/5 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2 text-center">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                System Not Found
              </p>
              <p className="font-display text-2xl font-bold text-text-primary">
                This route doesn&apos;t exist
              </p>
            </div>
          </div>
        </div>

        <p className="text-text-muted">
          The page you&apos;re looking for might have been moved, deleted, or
          never existed in the first place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-accent text-text-inverse rounded-xl font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center px-6 py-3 border border-border text-text-secondary rounded-xl font-medium text-sm hover:border-accent/40 hover:text-accent transition-all"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
