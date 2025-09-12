
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import StarCursor from '@/components/star-cursor';
import Preloader from '@/components/preloader';
import NextTopLoader from '@/components/next-top-loader';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Eka Saputra | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Eka Saputra, a passionate Full Stack Developer building modern web applications." />
        <meta name="keywords" content="Eka Saputra, Full Stack Developer, React, Next.js, Portfolio" />
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
        <>
            <NextTopLoader />
            {isClient && isLoading && <Preloader />}
            <div className={cn('flex flex-col min-h-screen w-full', { 'animate__animated animate__fadeIn': !isLoading, 'opacity-0': isLoading })}>
                <StarCursor />
                <Header />
                <main
                className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
                >
                {children}
                </main>
                <Footer />
                <Toaster />
            </div>
        </>
      </body>
    </html>
  );
}
