import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JAY Education",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-brandNeutral-100 text-brandTeal-900 ${poppins.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
