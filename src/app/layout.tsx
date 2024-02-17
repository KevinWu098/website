import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { AOSInit } from "@/components/aos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kevin Wu",
    description: "Software Keveloper - 💖",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "text-slate-300 max-w-[100vw] overflow-x-hidden",
                )}
            >
                <AOSInit />
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    // disableTransitionOnChange
                > */}
                <Header />
                {children}
                <Footer />
                <GoogleAnalytics gaId="G-4VKZFRYEJK" />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
