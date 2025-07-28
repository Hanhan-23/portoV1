import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhan Ramadhan",
  description: "This is portofolio by Farhan Ramadhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
