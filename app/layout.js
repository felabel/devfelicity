import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Felicity Essien - Software Engineer",
  description: "Solving problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/js/bundle.js" type="text/javascript" defer />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Add Navbar */}
        <main>{children}</main> {/* Wrap children in a main tag */}
        <Footer /> {/* Add Footer */}
        <BackToTop />
      </body>
    </html>
  );
}
