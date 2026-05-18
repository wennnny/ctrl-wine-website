import type { Metadata } from "next";
import "./globals.css";

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6375877304346058"
          crossorigin="anonymous"></script>

        {children}
      </body>
    </html>
  );
}