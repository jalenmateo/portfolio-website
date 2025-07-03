import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jalenmateo.com | documenting Jalen's journey through code, prototypes and thoughts!",
  description: "jalenmateo.com is a portfolio and personal blog website for Jalen.",
  openGraph: {
    title: "jalenmateo.com | documenting Jalen's journey through code, prototypes and thoughts!",
    description: "jalenmateo.com is a portfolio and personal blog website for Jalen.",
    url: 'https://jalenmateo.com',
    siteName: "Jalen's Portfolio & Blog",
    images: [
      {
        url: '/JalenPhotooo.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "jalenmateo.com | documenting Jalen's journey through code, prototypes and thoughts!",
    description: "jalenmateo.com is a portfolio and personal blog website for Jalen.",
    images: ['/JalenPhotooo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jalenmateo.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`bg-white transition-colors dark:bg-[#0A1512] dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
