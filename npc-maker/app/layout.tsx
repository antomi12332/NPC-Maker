import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { NextFont } from "next/dist/compiled/@next/font";

const roboto: NextFont = Roboto({
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
