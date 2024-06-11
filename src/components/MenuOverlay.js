import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
export default function MenuOverlay({ toggleMenuOverlay }) {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-brandNeutral-100">
      <div className="mx-auto flex w-10/12 items-center justify-between pb-8 pt-8 text-2xl lg:pt-16">
        <Link onClick={toggleMenuOverlay} href={"/"}>
          <Image src={logo} alt="JAY Education Logo" height={60} />
        </Link>
        <svg
          className="cursor-pointer"
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
      <nav className="mx-auto w-10/12 text-right text-4xl">
        <ul className="mt-64 flex flex-col gap-8">
          <li className="hover:text-brandTeal-800">
            <Link onClick={toggleMenuOverlay} href={"/about"}>
              About Us
            </Link>
          </li>
          <li className="hover:text-brandTeal-800">
            <a onClick={toggleMenuOverlay} href={"/#services"}>
              Services
            </a>
          </li>
          <li className="hover:text-brandTeal-800">
            <a onClick={toggleMenuOverlay} href={"/#workshops"}>
              Workshops
            </a>
          </li>
          <li className="hover:text-brandTeal-800">
            <Link onClick={toggleMenuOverlay} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
