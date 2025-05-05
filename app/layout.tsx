import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import {Lato} from "next/font/google"
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Angela Bradsky Rafferty",
  description: "Angela Bradsky Rafferty for area 3 Schoolboard",
};

const cooper = localFont({
  src: "./fonts/CooperHewitt-Medium.woff",
  display: "swap",
  variable: "--font-cooper",
});

const lato = Lato({
  subsets: ['latin'],
  weight: ["900","400","100"],
  variable: "--font-lato"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cooper.variable} ${lato.variable}`}>
    <GoogleAnalytics gaId="G-6PECGC3YP8"/>
    <GoogleTagManager gtmId="GTM-TD9B6B5Q" />
    <body>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
