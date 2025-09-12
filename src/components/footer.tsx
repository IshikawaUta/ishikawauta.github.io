
import Link from "next/link";
import { Github, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/data";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    href: "https://github.com/IshikawaUta",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ishikawa-uta",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/62895701060973",
    icon: MessageCircle,
    label: "WhatsApp",
  },
];

const quickLinksRaw = navLinks.filter(link => link.href !== '/');

export default function Footer() {
  const { t } = useTranslation();
  const quickLinks = quickLinksRaw.map(link => ({...link, label: t(link.label.toLowerCase())}));

  return (
    <footer className="bg-card text-foreground/80 border-t pb-24 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Eka Saputra</h3>
            <p className="mb-4">
              {t('footer_about')}
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

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                 <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary hover:underline underline-offset-4 transition-colors">
                        {link.label}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t('contact_info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+62 895 7010 60973</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:komikers09@gmail.com" className="hover:text-primary hover:underline underline-offset-4 transition-colors">
                  komikers09@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Eka Saputra. {t('rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
