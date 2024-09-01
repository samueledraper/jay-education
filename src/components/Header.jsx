"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";

import wordmark_black from "@/assets/logo/wordmark_black.png";
import logo_black from "@/assets/logo/logo_black.png";

export default function Header() {
  const path = usePathname();

  const [menu, setMenu] = useState();

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <header className="mt-8 flex items-center justify-between text-2xl font-medium lg:mt-10 lg:items-baseline">
      {menu && <Menu toggleMenu={toggleMenu} />}
      <Link href={"/"}>
        <Image
          className="hidden h-16 w-auto lg:block"
          src={wordmark_black}
          alt="Jay Education Logo"
        ></Image>
        <Image
          className="h-12 w-auto sm:h-16 lg:hidden"
          src={logo_black}
          alt="Jay Education Logo"
        ></Image>
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4">
          <li>
            <a
              className="hover:bg-expression_03 bg-contain bg-center bg-no-repeat px-6 py-2"
              href={"/#tuition"}
            >
              Tuition
            </a>
          </li>
          <li>
            <a
              className="hover:bg-expression_11 bg-contain bg-center bg-no-repeat px-6 py-2"
              href={"/#workshops"}
            >
              Workshops
            </a>
          </li>
          <li>
            <Link
              className="hover:bg-expression_05 bg-contain bg-center bg-no-repeat px-6 py-2"
              href={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-expression_02 bg-contain bg-center bg-no-repeat px-6 py-2"
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <svg
        onClick={toggleMenu}
        className="h-10 w-10 cursor-pointer sm:h-16 sm:w-16 lg:hidden"
        viewBox="0 0 250 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M240.196 19.5682H9.72486C4.34851 19.5682 0 15.2109 0 9.82372C0 4.43652 4.34851 0 9.72486 0H240.196C245.572 0 249.921 4.35729 249.921 9.74449C249.921 15.1317 245.572 19.489 240.196 19.489V19.5682Z"
          fill="#0A0203"
        />
        <path
          d="M240.196 85.3237H9.72486C4.34851 85.3237 0 80.9664 0 75.5792C0 70.192 4.34851 65.8347 9.72486 65.8347H240.196C245.572 65.8347 249.921 70.192 249.921 75.5792C249.921 80.9664 245.572 85.3237 240.196 85.3237Z"
          fill="#0A0203"
        />
        <path
          d="M240.196 151H9.72486C4.34851 151 0 146.643 0 141.256C0 135.868 4.34851 131.511 9.72486 131.511H240.196C245.572 131.511 249.921 135.868 249.921 141.256C249.921 146.643 245.572 151 240.196 151Z"
          fill="#0A0203"
        />
      </svg>
    </header>
  );
}
