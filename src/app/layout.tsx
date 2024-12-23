import type { Metadata } from "next";
import "./globals.css";

//theme provider
import { ThemeProvider } from "@/components/theme-provider"

//components
import Header from "@/components/Header";

//toaster
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className="flex flex-col h-screen antialiased">
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <Header />
               <main className="flex-1 overflow-y-auto">
                  {children}
               </main>
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
