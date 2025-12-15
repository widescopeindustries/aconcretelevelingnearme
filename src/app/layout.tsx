import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Concrete Leveling Near Me",
  description: "Professional concrete leveling services",
  metadataBase: new URL('https://aconcretelevelingnearme.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Concrete Leveling Near Me",
              "description": "Professional concrete leveling and repair services",
              "url": "https://aconcretelevelingnearme.vercel.app",
              "telephone": "1-800-CONCRETE",
              "priceRange": "$$",
              "areaServed": "United States",
              "serviceType": ["Concrete Leveling", "Mudjacking", "Polyurethane Foam Injection", "Slab Jacking"]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
