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
    // Keyword Utama Joki Tugas
    "joki tugas",
    "jasa joki tugas",
    "joki tugas kuliah",
    "jasa pengerjaan tugas",
    "joki tugas online",
    "jasa tugas kuliah",
    "pengerjaan tugas kuliah",
    "jasa tugas online",
    "joki tugas terpercaya",
    
    // Keyword Skripsi & Akademik
    "jasa pengerjaan skripsi",
    "joki skripsi",
    "jasa skripsi",
    "bimbingan skripsi online",
    "joki tugas akhir",
    "jasa tugas akhir",
    "pengerjaan ta",
    "jasa pengerjaan proposal",
    
    // Keyword Programming & Coding
    "joki ngoding",
    "jasa joki coding",
    "joki pemrograman",
    "jasa pembuatan program",
    "joki tugas programming",
    "jasa pembuatan website",
    "joki tugas coding",
    "jasa pembuatan aplikasi",
    
    // Keyword Bahasa Pemrograman
    "joki tugas python",
    "joki tugas java",
    "joki tugas javascript",
    "joki tugas php",
    "joki tugas c++",
    "joki tugas golang",
    "joki tugas kotlin",
    "joki tugas swift",
    "joki tugas react",
    "joki tugas laravel",
    
    // Keyword Framework & Database
    "jasa pemrograman web",
    "joki database mysql",
    "joki database postgresql",
    "joki mongodb",
    "joki firebase",
    "joki react native",
    "joki flutter",
    "joki nodejs",
    
    // Keyword Project Spesifik
    "joki project web",
    "joki project android",
    "joki project ios",
    "joki project machine learning",
    "joki project data science",
    "joki project ai",
    
    // Keyword Mata Kuliah
    "joki tugas algoritma",
    "joki tugas struktur data",
    "joki tugas basis data",
    "joki tugas pbo",
    "joki tugas mobile programming",
    "joki tugas web programming",
    "joki tugas data mining",
    "joki tugas kecerdasan buatan",
    
    // Keyword Lokasi
    "joki tugas jakarta",
    "joki tugas bandung",
    "joki tugas surabaya",
    "joki tugas yogyakarta",
    "joki tugas semarang",
    "joki tugas malang",
    "joki tugas medan",
    "joki tugas makassar",
    
    // Keyword Universitas
    "joki tugas ui",
    "joki tugas ugm",
    "joki tugas itb",
    "joki tugas its",
    "joki tugas unpad",
    "joki tugas undip",
    "joki tugas unair",
    "joki tugas ub",
    
    // Keyword Trust & Quality
    "jasa coding terpercaya",
    "joki program komputer",
    "jasa programming murah",
    "joki tugas berkualitas",
    "jasa tugas tepat waktu",
    "joki tugas dijamin acc",
    "jasa tugas anti plagiat",
    "joki tugas garansi",
    
    // Long-tail Keywords
    "jasa pengerjaan tugas kuliah programming",
    "joki tugas pemrograman terpercaya",
    "jasa pembuatan website profesional",
    "joki tugas coding dijamin acc",
    "jasa pengerjaan skripsi informatika",
    "joki tugas programming murah berkualitas"
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
    google: "google8366d1a87ce1c8d2",
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

