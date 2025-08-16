
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
]

export default function SocialLinks() {
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {socialLinks.map(link => (
        <Button key={link.href} variant="outline" size="icon" asChild className="bg-background/50 backdrop-blur-sm">
          <Link href={link.href} target="_blank" aria-label={link.label}>
            <link.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
