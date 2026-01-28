import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jm Gunayan",
  description: "FiveM Developer & Software Engineering Student.",
  metadataBase: new URL("https://jlgunayan.top/"),
  alternates: {
    canonical: "https://jlgunayan.top/",
  },
  openGraph: {
    title: "JmG",
    description: "The Story Behind My Code",
    url: "https://jlgunayan.top/",
    siteName: "Jm Gunayan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JmG",
    description: "The Story Behind My Code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          bg-black text-zinc-100 antialiased
          overflow-x-hidden
          touch-manipulation
        "
      >
        <Navbar />
        <main className="pt-[calc(env(safe-area-inset-top)+64px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}