import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "500",
});

export const metadata: Metadata = {
  title: "NPC Maker",
  description: "A tool to build worlds with NPC dialogues.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>
        {children}
      </body>
    </html>
  );
}
