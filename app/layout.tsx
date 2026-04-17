import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eva's Salon | Professional Hairstylist",
  description: "Καλωσορίσατε στο Eva's Salon. Επαγγελματικές υπηρεσίες κομμωτικής στη Θεσσαλονίκη με 15 χρόνια εμπειρίας.",
  icons: {
    icon: "/favicon.png", // Εδώ λέμε στο site να χρησιμοποιήσει το logo σου
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
