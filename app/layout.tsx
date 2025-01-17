import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import { Roboto } from "next/font/google";
import Footer from "../components/footer";
import type { Metadata } from "next";
import Providers from "./_apollo/provider";
import { Toaster } from "@/components/ui/toaster";

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "NPC Maker",
  description: "A tool to build worlds with NPC dialogues.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${roboto} overflow-y-auto container mx-auto px-4`}>
        <Providers>{children}</Providers>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
