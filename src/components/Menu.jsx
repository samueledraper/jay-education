import Link from "next/link";
import Image from "next/image";

import logo_white from "@/assets/logo/logo_white.png";

export default function Menu({ toggleMenu }) {
  return (
    <section className="bg-brandDark text-brandNeutral fixed left-0 top-0 z-50 h-screen w-screen">
      <div className="mx-auto mt-8 flex w-11/12 items-center justify-between">
        <Link href={"/"}>
          <Image
            onClick={toggleMenu}
            className="h-12 w-auto sm:h-16"
            src={logo_white}
            alt="Jay Education Logo"
          ></Image>
        </Link>
        <svg
          onClick={toggleMenu}
          className="h-10 w-10 cursor-pointer sm:h-14 sm:w-14"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M125.029 143.961L227.233 246.116H227.341C232.52 251.295 241.044 251.295 246.224 246.116C251.403 240.937 251.403 232.413 246.224 227.234L143.99 125L246.116 22.8744V22.7665C251.295 17.5874 251.295 9.06345 246.116 3.88434C240.937 -1.29477 232.413 -1.29477 227.234 3.88434L125.079 106.089L22.8744 3.88462C17.5874 -1.29449 9.06344 -1.40239 3.88433 3.88462C-1.29478 9.17163 -1.29478 17.5877 3.88433 22.8747L106.118 125.059L3.99224 227.233C-1.18687 232.413 -1.18687 240.937 3.99224 246.116C9.17135 251.295 17.6953 251.295 22.8744 246.116L125.029 143.961Z"
            fill="white"
          />
        </svg>
      </div>
      <nav className="mx-auto w-11/12">
        <ul className="mt-32 flex flex-col justify-between gap-16 text-4xl font-medium sm:text-6xl">
          <li>
            <a onClick={toggleMenu} href={"/#tuition"}>
              Tuition
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href={"/#workshops"}>
              Workshops
            </a>
          </li>
          <li>
            <Link onClick={toggleMenu} href={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
