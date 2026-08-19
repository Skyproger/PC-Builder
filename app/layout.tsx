import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";

const nunitoSans = Nunito_Sans({variable:'--font-sans'});

export const metadata: Metadata = {
  title: "ПК Собиратель",
  description: "Собери свой ПК мечты",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans", nunitoSans.variable, 'dark')}>
      <body className="antialiased">
        <Header />
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}