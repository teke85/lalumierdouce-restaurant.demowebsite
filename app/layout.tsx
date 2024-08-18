import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Montserrat,
  Lora,
  Poppins,
  Ubuntu,
  Ibarra_Real_Nova,
  Aboreto,
  Antonio,
  Jost,
} from 'next/font/google';
import './globals.css';
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import WelcomeModal from "@/components/WelcomeModal";
import Menu from "@/components/Menu/Menu";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  variable: '--font-antonio',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  variable: '--font-jost',
  display: 'swap',
});

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aboreto',
  display: 'swap',
});

const ibarra = Ibarra_Real_Nova({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibarra',
  display: 'swap',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: '500',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'La Lumiere douce Restaurant',
  description: 'Fine dining experience at La Lumiere douce Restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${jost.variable} ${antonio.variable} ${aboreto.variable} ${ibarra.variable} ${ubuntu.variable} ${poppins.variable} ${lora.variable}`}>
        <main>
        <Header />
        <WelcomeModal />
        <Menu />
        {children}
        <ScrollToTopBtn />
        <Footer />
        </main>
      </body>
    </html>
  );
}