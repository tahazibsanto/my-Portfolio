import Link from 'next/link';
import { Github, Twitter, Linkedin, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
           <Film className="h-5 w-5 text-primary" />
           <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Tahazib Santo. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
