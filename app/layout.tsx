import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ctrl + Wine｜Hsinchu Late Night Wine Bar",
  description:
    "Ctrl + Wine is a late-night wine space in Hsinchu. Reset your day. Debug your stress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6375877304346058"
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}