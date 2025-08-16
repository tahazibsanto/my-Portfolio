import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} Tahazib Santo. All rights reserved.</p>
      </div>
    </footer>
  );
}
