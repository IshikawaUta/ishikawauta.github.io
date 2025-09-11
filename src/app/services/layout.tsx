
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Services | Eka Saputra",
  description: "Explore the web development, UI/UX design, and deployment services offered by Eka Saputra.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
