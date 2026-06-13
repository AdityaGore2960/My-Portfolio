import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venissa — Designer & Creative",
  description:
    "Personal portfolio of Venissa — a creative designer working at the intersection of branding, editorial design, and digital experiences.",
  keywords: ["designer", "portfolio", "creative", "branding", "editorial"],
  authors: [{ name: "Venissa" }],
  openGraph: {
    title: "Venissa — Designer & Creative",
    description:
      "Personal portfolio of Venissa — a creative designer working at the intersection of branding, editorial design, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
