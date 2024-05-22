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
    <header className="text-brandTeal-900">
      <div className="flex justify-between items-center w-11/12 mx-auto pt-8 lg:pt-16 pb-8 text-2xl">
        <Link href={"/"}>
          <Image src={logo} alt="JAY Education Logo" width={125} />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <a href={"/#services"}>Services</a>
            </li>
            <li>
              <a href={"/#workshops"}>Workshops</a>
            </li>
            <li className="cursor-pointer px-4 py-1 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <svg
          onClick={toggleMenuOverlay}
          className="lg:hidden"
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
