import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web & Agentic AI Developer | Muhammad Tasleem",
  description: "I specialize in building responsive web apps with Next.js and crafting intelligent, agentic AI solutions. Explore my portfolio to see how I merge web technologies with AI-driven innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
       
        </ThemeProvider>
      </body>
    </html>
  );
}
