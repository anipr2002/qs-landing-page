import type { Metadata } from "next";
import {
  anthro,
  anthroBold,
  anthroBook,
  anthroSemibold,
  anthroItalic,
  anthroSemiboldItalic,
  aber,
} from "../app/_fonts/font";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Surf",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${aber.variable} ${anthro.variable} ${anthroBold.variable} ${anthroBook.variable} ${anthroSemibold.variable} ${anthroItalic.variable} ${anthroSemiboldItalic.variable}`}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
