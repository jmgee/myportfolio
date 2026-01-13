import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackdrop from "@/components/GradientBackdrop";

export const metadata: Metadata = {
  title: "JmG",
  description: "A clean-room, production-ready Next.js landing page for developers and agencies.",
  metadataBase: new URL("http://jlgunayan.top/"),
  openGraph: {
    title: "JmG",
    description: "Click to view JmG's Website.",
    url: "http://jlgunayan.top/",
    siteName: "Jm Gunayan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JmG",
    description: "A 🇵🇭 Filipino developer studying Computer Science.",
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


