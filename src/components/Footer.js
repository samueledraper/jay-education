import Image from "next/image";
import Link from "next/link";

import facebook from "@/icons/facebook-logo-primary.png";

export default function Footer() {
  return (
    <footer className="w-screen bg-brandTeal-900 text-white ">
      <div className="flex justify-between flex-col sm:flex-row gap-8 w-10/12 mx-auto py-16">
        <section className="">
          <div>
            <h4 className="text-xl mb-2">Contact</h4>
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
          <h4 className="text-xl mb-2">Quick Links</h4>
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
          <h4 className="text-xl mb-2">Downloads</h4>
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
      <div className="text-center bg-black text-white">
        <p className="text-sm py-2">
          web design by{" "}
          <a className="underline" href="https://samueledraper.com/">
            samuel draper
          </a>
        </p>
      </div>
    </footer>
  );
}
