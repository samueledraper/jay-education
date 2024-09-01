import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["helvetica", "arial", "sans-serif"],
});

export const metadata = {
  title: "Jay Education",
  description: "",
};

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} mx-auto w-11/12 xl:w-10/12`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
