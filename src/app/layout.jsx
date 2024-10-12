import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["helvetica", "arial", "sans-serif"],
});

export const runtime = "edge";

export const metadata = {
  metadataBase: new URL("https://www.jayeducation.co.uk"),
  title: "Jay Education",
  description:
    "Offering individual tuition and 11+ preparation to primary pupils in Oxfordshire and Buckinghamshire.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} mx-auto w-11/12 overflow-x-hidden bg-brandNeutral xl:w-10/12`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
