
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard | Eka Saputra",
  description: "Manage your portfolio content.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
