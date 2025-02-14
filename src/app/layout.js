import './globals.css';
import { Montserrat, Space_Grotesk, Poppins } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "JogasTI - Jasa Joki Tugas #1 Terpercaya | Joki Tugas Kuliah & Pemrograman",
  description: "JogasTI adalah layanan jasa joki tugas kuliah & pemrograman terpercaya dengan hasil berkualitas dan tepat waktu. ✓ Harga Terjangkau ✓ Revisi Gratis ✓ Privasi Terjamin ✓ Support 24/7",
  keywords: [
    "joki tugas",
    "jasa joki tugas",
    "joki tugas kuliah",
    "jasa pengerjaan tugas",
    "joki tugas online",
    "jasa tugas kuliah",
    "pengerjaan tugas kuliah",
    "jasa tugas online",
    "joki tugas terpercaya",
    "jasa pengerjaan skripsi",
    "joki ngoding",
    "jasa joki coding",
    "joki pemrograman",
    "jasa pembuatan program",
    "joki tugas programming",
    "jasa pembuatan website",
    "joki tugas coding",
    "jasa pembuatan aplikasi",
    "joki tugas python",
    "joki tugas java",
    "joki tugas javascript",
    "joki tugas php",
    "jasa pemrograman web",
    "jasa coding terpercaya",
    "joki program komputer"
  ],
  authors: [{ name: "JogasTI" }],
  creator: "JogasTI",
  publisher: "JogasTI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google-site-verification=YOUR_CODE", // Ganti dengan kode verifikasi Google Search Console
  },
  openGraph: {
    title: "JogasTI - Jasa Joki Tugas #1 Terpercaya | Joki Tugas Kuliah",
    description: "JogasTI adalah layanan jasa joki tugas kuliah terpercaya dengan hasil berkualitas dan tepat waktu. ✓ Harga Terjangkau ✓ Revisi Gratis ✓ Privasi Terjamin",
    url: "https://jogasti.vercel.app",
    siteName: "JogasTI",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Pastikan untuk membuat gambar OG yang menarik
        width: 1200,
        height: 630,
        alt: "JogasTI - Jasa Joki Tugas Terpercaya",
      },
    ],
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
    canonical: "https://jogasti.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JogasTI",
              "url": "https://jogasti.vercel.app",
              "logo": "https://jogasti.vercel.app/logo.png",
              "description": "Layanan jasa joki tugas kuliah terpercaya dengan hasil berkualitas dan tepat waktu.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-895-3298-24943",
                "contactType": "customer service",
                "availableLanguage": "Indonesian"
              },
              "sameAs": [
                "https://wa.me/+62895329824943"
              ]
            })
          }}
        />
        
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Jasa Joki Tugas Kuliah",
              "provider": {
                "@type": "Organization",
                "name": "JogasTI"
              },
              "serviceType": "Educational Service",
              "description": "Layanan pengerjaan tugas kuliah dengan kualitas terbaik dan tepat waktu",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "IDR"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${spaceGrotesk.variable} ${poppins.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

