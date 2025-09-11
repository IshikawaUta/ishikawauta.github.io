
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Portfolio | Eka Saputra",
  description: "A collection of web development, mobile, and design projects by Eka Saputra.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
