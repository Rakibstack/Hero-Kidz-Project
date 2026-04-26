import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layout/Navber";
import Footer from "@/components/layout/Footer";
import localFont from 'next/font/local'
import NextAuthProvider from "@/provider/NextAuthProvider";


const poppins = Poppins({

  weight: ["100",'200','400','500','600','700','800','900'],
})

export const FontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
})

export const metadata = {
  metadataBase: new URL("https://hero-kidz-pearl.vercel.app/"),

  title: {
    default: "Hero-kids | Educational Toys For Smart Kids",
    template: "%s | Hero-kids",
  },

  description:
    "Discover educational toys, learning boards, puzzles and fun products designed to help children learn through play.",

  keywords: [
    "educational toys",
    "kids toys",
    "learning board",
    "montessori toys",
    "children toys Bangladesh",
    "toy shop online"
  ],

  applicationName: "Hero-kids",

  authors: [
    {
      name: "Rakib",
      url: "https://hero-kidz-pearl.vercel.app/",
    },
  ],

  creator: "Rakib",
  publisher: "Hero-kids",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hero-kids | Educational Toys For Smart Kids",
    description:
      "Shop safe, fun and educational toys designed for growing minds.",

    url: "https://hero-kidz-pearl.vercel.app/",

    siteName: "Hero-kids",

    images: [
      {
        url: "https://i.ibb.co.com/6RbwJG7D/Screenshot-2026-04-24-180051.png",
        width: 1200,
        height: 630,
        alt: "Hero-kids Home Preview",
      }
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero-kids | Educational Toys For Smart Kids",
    description:
      "Shop educational toys and learning products for children.",

    images: [
      "https://i.ibb.co.com/6RbwJG7D/Screenshot-2026-04-24-180051.png"
    ],
  },

  icons: {
    icon: "https://i.ibb.co.com/dwZ0rzT5/logo.webp",
    shortcut: "https://i.ibb.co.com/dwZ0rzT5/logo.webp",
    apple: "https://i.ibb.co.com/dwZ0rzT5/logo.webp",
  },
};  

export default function RootLayout({ children }) {
  return (
   <NextAuthProvider>
     <html
      lang="en"
      className={`${poppins.className} antialiased`} 
    >
      <body className="">
        
        <header className="py-2 md:max-w-11/12 mx-auto">
          <Navber />
        </header>

        <main className="md:max-w-11/12 mx-auto min-h-[calc(100vh-335px)]">
          {children}
        </main>

        <footer className="py-2">
          <Footer />
        </footer>

      </body>
    </html>
   </NextAuthProvider>
  );
}
