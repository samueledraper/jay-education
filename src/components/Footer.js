import Image from "next/image";
import Link from "next/link";

import facebook from "@/icons/facebook-logo-primary.png";

export default function Footer() {
  return (
    <footer>
      <section>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <Link href={"mailto:contact@jayeducation.co.uk"}>
                contact@jayeduction.co.uk
              </Link>
            </li>
            <li>
              <Image src={facebook} alt="Facebook Logo" width={32} />
            </li>
          </ul>
        </div>
        <div>
          <h4>Opening Hours</h4>
          <ul>
            <li>
              <p>Weekdays, 8am - 8pm</p>
            </li>
            <li>
              <p>Saturdays, 8am - 3pm</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h4>Downloads</h4>
        <ul>
          <li>
            <Link
              href={"/downloads/JAYEducation_GuidanceforOnlineSessions.pdf"}
              target="_blank"
              download
            >
              Guidance for Online Sessions
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JAYEducation_TermsandConditions.pdf"}
              target="_blank"
              download
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JAYEducation_PrivacyPolicy.pdf"}
              target="_blank"
              download
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href={"/downloads/JAYEducation_SafeguardingStatement.pdf"}
              target="_blank"
              download
            >
              Safeguarding Statement
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
