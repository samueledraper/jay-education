import Image from "next/image";
import Link from "next/link";

import facebook from "@/icons/facebook-logo-primary.png";

export default function Footer() {
  return (
    <footer className="w-screen bg-brandTeal-900 text-white">
      <div className="mx-auto flex w-10/12 flex-col justify-between gap-8 py-16 sm:flex-row">
        <section className="">
          <div>
            <h3 className="mb-2 text-xl">Contact</h3>
            <ul>
              <li className="mb-4">
                <a href="mailto:contact@jayeducation.co.uk">
                  contact@jayeduction.co.uk
                </a>
              </li>
              <li>
                <Image src={facebook} alt="Facebook Logo" width={32} />
              </li>
            </ul>
          </div>
        </section>
        <section className="">
          <h4 className="mb-2 text-xl">Quick Links</h4>
          <ul>
            <li>
              <Link className="underline" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/contact"}>
                Tuition Services
              </Link>
            </li>
            <li>
              <Link className="underline" href={"/contact"}>
                Workshops
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <h4 className="mb-2 text-xl">Downloads</h4>
          <ul>
            <li>
              <Link
                className="underline"
                href={"/downloads/JAYEducation_GuidanceforOnlineSessions.pdf"}
                target="_blank"
                download
              >
                Guidance for Online Sessions
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href={"/downloads/JAYEducation_TermsandConditions.pdf"}
                target="_blank"
                download
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href={"/downloads/JAYEducation_PrivacyPolicy.pdf"}
                target="_blank"
                download
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href={"/downloads/JAYEducation_SafeguardingStatement.pdf"}
                target="_blank"
                download
              >
                Safeguarding Statement
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-black text-center text-white">
        <p className="py-2 text-sm">
          web design by{" "}
          <a className="underline" href="https://samueledraper.com/">
            samuel draper
          </a>
        </p>
      </div>
    </footer>
  );
}
