import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chhatrapati Shivaji Maharaj | Founder of the Maratha Empire",
  description:
    "A tribute to Chhatrapati Shivaji I (1630–1680), founder of the Maratha Empire — his early life, the conflicts with Bijapur and the Mughals, his coronation at Raigad Fort in 1674, and his enduring legacy.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${cinzel.variable} min-h-screen bg-night font-sans text-white antialiased`}
      >
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
