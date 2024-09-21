import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/site/navigation";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/global/footer";
import PageTransition from "@/components/global/page-transition";
import StarisEffect from "@/components/global/stairs-effects";
import { Toaster } from "@/components/ui/sonner";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Yousif Aldossary",
  description: "Data is essential function for any living being",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <StarisEffect />
          <PageTransition>    
            {children}
          </PageTransition>
          <Footer /> 
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
