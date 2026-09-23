import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discover Our Products | Metta Muse",
  description:
    "Explore our curated collection of products across fashion, jewelry, electronics and more.",
  keywords: [
    "products",
    "online shopping",
    "fashion",
    "jewelry",
    "electronics",
    "Metta Muse",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}