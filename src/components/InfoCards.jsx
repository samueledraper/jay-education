import Image from "next/image";
import line_01 from "@/assets/illustrations/line_01.png";
import line_03 from "@/assets/illustrations/line_03.png";
import line_04 from "@/assets/illustrations/line_04.png";

export default function InfoCards() {
  return (
    <section className="mt-32 flex flex-col gap-16 text-lg font-medium md:flex-row">
      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold">Individual & Groups</h2>
        <Image
          className="mt-2 w-2/3 md:w-full"
          src={line_01}
          alt="Line illustration"
        ></Image>
        <p className="mt-4">
          We offer individual and group sessions which can be delivered in
          Chinnor, Longwick, in your own home or via Zoom.
        </p>
      </div>

      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold">Key Stages 1 & 2</h2>

        <Image
          className="mt-2 w-2/3 md:w-full"
          src={line_03}
          alt="Line illustration"
        ></Image>
        <p className="mt-4">
          We are experienced in working with both KS1 and KS2 pupils, including
          those with SEN needs. We also prepare children for the 11+ and common
          entrance exams.
        </p>
      </div>
      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold">Enhanced DBS</h2>

        <Image
          className="mt-2 w-2/3 md:w-full"
          src={line_04}
          alt="Line illustration"
        ></Image>
        <p className="mt-4">
          We have enhanced DBS and are registered with the online DBS Update
          Service. Registered with the ICO and are fully insured.
        </p>
      </div>
    </section>
  );
}
