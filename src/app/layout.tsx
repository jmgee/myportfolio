import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackdrop from "@/components/GradientBackdrop";

export const metadata: Metadata = {
  title: "JmG",
  description: "A clean-room, production-ready Next.js landing page for developers and agencies.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Jm Gunayan",
    description: "Modern developer/agency landing page template.",
    url: "https://example.com",
    siteName: "Jm Gunayan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jm Gunayan",
    description: "Modern developer/agency landing page template.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
