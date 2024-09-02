import Link from "next/link";
import Image from "next/image";

import logo_white from "@/assets/logo/logo_white.png";

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col justify-between gap-8 rounded-lg bg-brandDark p-8 text-brandNeutral sm:flex-row md:mt-32">
      <div>
        <h4 className="mb-1 text-lg font-semibold md:text-xl">Opening Hours</h4>
        <ul>
          <li>Weekdays 8am - 8pm</li>
          <li>Saturdays 8am - 3pm</li>
        </ul>
        <Link href={"/"}>
          <Image
            className="mt-4 hidden sm:block"
            src={logo_white}
            alt="Jay Education logo"
            width={50}
          ></Image>
        </Link>
      </div>

      <div>
        <h4 className="mb-1 text-lg font-semibold md:text-xl">Quick Links</h4>
        <ul>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <a href={"/#tuition"}>Tuition</a>
          </li>
          <li>
            <a href={"/#workshops"}>Workshops</a>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-1 text-lg font-semibold md:text-xl">Downloads</h4>
        <ul className="underline">
          <li>
            <Link
              href={"/downloads/JayEducation_GuidanceForOnlineSessions.pdf"}
              target="_blank"
              download
            >
              Guidance for Online Sessions
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JayEducation_Terms&Conditions.pdf"}
              target="_blank"
              download
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JayEducation_PrivacyPolicy.pdf"}
              target="_blank"
              download
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JayEducation_SafeguardingStatement.pdf"}
              target="_blank"
              download
            >
              Safeguarding Statement
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
