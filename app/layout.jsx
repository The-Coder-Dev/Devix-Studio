import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Devix Studio - Next Gen Studio",
  description: "Next gen modern portfolio created by Dev Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
