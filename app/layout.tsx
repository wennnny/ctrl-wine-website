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
      <body>{children}</body>
    </html>
  );
}