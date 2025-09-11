import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-foreground/60 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Eka Saputra. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button key={href} variant="ghost" size="icon" asChild>
              <Link href={href} target="_blank" aria-label={label}>
                <Icon className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
