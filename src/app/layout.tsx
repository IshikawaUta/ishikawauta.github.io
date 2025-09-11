
import type { Metadata } from "next";
import './globals.css';
import ClientLayout from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Eka Saputra | Full Stack Developer",
  description: "Portfolio of Eka Saputra, a passionate Full Stack Developer building modern web applications.",
  keywords: "Eka Saputra, Full Stack Developer, React, Next.js, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={'font-body antialiased min-h-screen flex flex-col'}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
