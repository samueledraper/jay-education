import Image from "next/image";
import Link from "next/link";

import workshops from "@/json/workshops.json";

import line_02 from "@/assets/illustrations/line_02.png";
import line_03 from "@/assets/illustrations/line_03.png";
import line_04 from "@/assets/illustrations/line_04.png";

export default function Workshops() {
  return (
    <section id="workshops" className="mt-16 md:mt-32">
      <h2 className="mb-2 text-5xl font-bold lg:text-6xl">Workshops</h2>
      <Image
        className="mt-4 w-2/3 sm:w-1/2 md:w-1/3"
        src={line_02}
        alt="Line illustration"
      ></Image>

      <div className="mt-8 flex flex-col gap-16 md:flex-row">
        <div className="flex flex-col gap-8 md:w-1/3">
          {workshops.map((workshop) => {
            return (
              <div key={workshop.id} className="flex items-center gap-6">
                <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-calendar_black bg-contain bg-center bg-no-repeat p-4 font-bold">
                  <p className="text-center text-xs">{workshop.weekday}</p>
                  <p className="text-xl">{workshop.date}</p>
                  <p className="text-xs">{workshop.month}</p>
                </div>
                <div>
                  <p className="font-semibold">{workshop.title}</p>
                  <p className="">{workshop.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto flex flex-col gap-8 md:w-2/3">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">SEN Parents Meet-Up</h2>
            <Image
              className=""
              src={line_03}
              height={5}
              alt="Line illustration"
            ></Image>
            <p className="text-lg font-medium">
              Held in our garden workshop in Chinnor, after school drop off in
              the morning. They are predominantly a network group for parents of
              children with SEN needs.  There is usually a short input and then
              plenty of time to share ideas, successes and resources – with good
              coffee and cake!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Parent Support</h2>
            <Image
              className=""
              src={line_04}
              height={5}
              alt="Line illustration"
            ></Image>
            <p className="text-lg font-medium">
              Workshops held regularly on supporting your child with spelling,
              maths, Dyslexia, Working Memory and Emotional Regulation. Please
              get in touch to find out more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
