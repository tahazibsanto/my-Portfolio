
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


const socialLinks = [
  { href: "https://www.facebook.com/mdtahaziburrahman.santo", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/tahazib_santo/", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/8801774050004", icon: WhatsAppIcon, label: "WhatsApp" },
]

export default function SocialLinks() {
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {socialLinks.map(link => (
        <Button key={link.href} variant="outline" size="icon" asChild className="bg-background/50 backdrop-blur-sm">
          <Link href={link.href} target="_blank" aria-label={link.label}>
            <link.icon />
          </Link>
        </Button>
      ))}
    </div>
  );
}
