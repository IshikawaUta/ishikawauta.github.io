
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Me | Eka Saputra",
  description: "Get in touch with Eka Saputra. Have a question or a project in mind? Reach out through the contact form or other channels.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
