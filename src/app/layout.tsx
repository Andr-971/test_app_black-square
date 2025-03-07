import type { Metadata } from "next";
import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Чёрный квадрат xудожника Малевича К.С.",
    description: "Чёрный квадрат xудожника Малевича К.С.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
          <Head>
              <link
                  rel="icon"
                  href="/static/favicon.ico"
                  type="image/favicon.ico"
              />
          </Head>
          <body>
              <div className="wrapper">
                  <Header />
                  <main className="main">{children}</main>
                  <Footer />
              </div>
          </body>
      </html>
  );
}
