import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo/logo.png";

export default function MenuOverlay({ toggleMenuOverlay }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-brandNeutral">
      <div className="flex justify-between items-center w-11/12 mx-auto pt-8 lg:pt-16 pb-8 text-2xl">
        <Link onClick={toggleMenuOverlay} href={"/"}>
          <Image src={logo} alt="JAY Education Logo" width={125} />
        </Link>
        <svg
          onClick={toggleMenuOverlay}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.39337"
            y="0.979187"
            width="32"
            height="2"
            transform="rotate(45 2.39337 0.979187)"
            fill="#003C3C"
          />
          <rect
            x="0.979187"
            y="23.6066"
            width="32"
            height="2"
            transform="rotate(-45 0.979187 23.6066)"
            fill="#003C3C"
          />
        </svg>
      </div>

      <nav className="w-11/12 mx-auto text-4xl text-right">
        <ul className="flex flex-col gap-8 mt-64">
          <li>
            <Link onClick={toggleMenuOverlay} href={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <a onClick={toggleMenuOverlay} href={"/#services"}>
              Services
            </a>
          </li>
          <li>
            <a onClick={toggleMenuOverlay} href={"/#workshops"}>
              Workshops
            </a>
          </li>
          <li>
            <Link onClick={toggleMenuOverlay} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
