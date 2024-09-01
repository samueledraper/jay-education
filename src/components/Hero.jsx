import Link from "next/link";
import Image from "next/image";

import thought from "@/assets/illustrations/thought.png";
import rosette from "@/assets/illustrations/rosette.png";
import lightbulb from "@/assets/illustrations/idea.png";

import reading from "@/assets/images/student_reading_book.jpg";
import computer from "@/assets/images/student_working_at_computer.jpg";
import numberline from "@/assets/images/student_creating_numberline.jpg";

export default function Hero() {
  return (
    <section className="mt-16 flex flex-col items-center gap-16 md:mt-32 md:flex-row">
      <div className="order-2 flex w-full items-center gap-4 md:order-1 md:w-1/3">
        <div className="relative h-72 w-1/2 sm:h-96">
          <Image
            className="rotate-30 absolute -left-8 -top-12 z-10 h-auto w-24"
            src={lightbulb}
            alt="Lightbulb illustration"
          ></Image>
          <Image
            className="rounded-lg"
            src={computer}
            alt="Student during an individual tuition session working at a computer"
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="flex w-1/2 flex-col gap-4">
          <div className="relative h-64 xl:h-72">
            <Image
              className="absolute -right-4 -top-16 z-10 h-auto w-32"
              src={thought}
              alt="Thought bubble illustration"
            ></Image>
            <Image
              className="rounded-lg"
              src={numberline}
              alt="Student during an individual tuition session ordering a numberline"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className="relative h-64 xl:h-72">
            <Image
              className="absolute -bottom-20 right-4 z-10 h-auto w-16"
              src={rosette}
              alt="Rosette illustration"
            ></Image>
            <Image
              className="rounded-lg"
              src={reading}
              alt="Student during an individual tuition session reading"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 md:w-2/3">
        <h2 className="text-4xl font-bold leading-snug sm:text-5xl sm:leading-tight xl:leading-snug">
          Children who are{" "}
          <span className="bg-expression_12 bg-contain bg-center bg-no-repeat px-4">
            happy
          </span>{" "}
          and{" "}
          <span className="bg-expression_09 bg-contain bg-bottom bg-no-repeat py-1">
            comfortable
          </span>{" "}
          learn best.
        </h2>
        <p className="my-8 text-lg font-medium sm:text-xl xl:text-2xl">
          Offering tuition to primary pupils in Oxfordshire and Buckinghamshire.
          We believe that children who have a good attitude to learning become
          resilient, confident and reflective learners, able to achieve their
          potential. Therefore, building an enjoyment for learning underpins all
          our teaching.
        </p>
        <Link
          className="bg-expression_02 bg-contain bg-center bg-no-repeat px-4 py-4 text-xl font-semibold xl:text-2xl"
          href={"/contact"}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
