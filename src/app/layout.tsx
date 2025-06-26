import type { Metadata } from "next";
import { Italiana, Alata, Montserrat } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Specify the weight(s) needed (e.g., '400' for regular)
});

const alata = Alata({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Specify the weight(s) needed (e.g., '400' for regular)
});

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subsets you need
  weight: "300", // Specify the weight(s) needed (e.g., '400' for regular)
});

export const metadata: Metadata = {
  title: "Joseph Deng",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.className} lg:overflow-y-hidden`}>
        <div className="fixed inset-0 background-image -z-10" />
        {children}
      </body>
      <div className={`${alata.className} ${montserrat.className}`}></div>
    </html>
  );
}
