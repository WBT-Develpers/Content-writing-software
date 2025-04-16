import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "ContentCraft AI - Generate Content Effortlessly",
  description: "AI-powered content generation platform using Google Gemini.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head /> 
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable 
        )}
      >
        <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-6xl"> 
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
