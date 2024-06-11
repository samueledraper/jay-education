"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import logo from "../../public/logo/logo.png";
export default function Header() {
  const [menuOverlay, setMenuOverlay] = useState(false);
  function toggleMenuOverlay() {
    setMenuOverlay(!menuOverlay);
  }
  return (
    <header>
      <div className="mx-auto flex w-10/12 items-center justify-between pb-8 pt-8 text-xl lg:w-11/12 lg:pt-16">
        <Link href={"/"}>
          <Image src={logo} alt="JAY Education Logo" height={60} />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            <li className="hover:text-brandTeal-800">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-brandTeal-800">
              <a href={"/#services"}>Services</a>
            </li>
            <li className="hover:text-brandTeal-800">
              <a href={"/#workshops"}>Workshops</a>
            </li>
            <li className="cursor-pointer rounded-xl border-2 border-brandTeal-900 bg-brandTeal-500 px-4 py-2 hover:bg-brandTeal-600">
              <Link href={"/contact"}>Get in Touch</Link>
            </li>
          </ul>
        </nav>
        <svg
          onClick={toggleMenuOverlay}
          className="cursor-pointer lg:hidden"
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="2" fill="#003C3C" />
          <rect y="10" width="32" height="2" fill="#003C3C" />
          <rect y="20" width="32" height="2" fill="#003C3C" />
        </svg>
      </div>
      {menuOverlay && <MenuOverlay toggleMenuOverlay={toggleMenuOverlay} />}
    </header>
  );
}
