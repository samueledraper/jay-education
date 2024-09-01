import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";

import alphabet from "@/assets/images/student_ordering_alphabet.jpg";
import tuition from "@/assets/images/individual_tuition_session.jpg";

import plant from "@/assets/illustrations/plant.png";
import protractor from "@/assets/illustrations/protractor.png";
import trophy from "@/assets/illustrations/trophy.png";

export default function Home() {
  return (
    <main className="mx-auto xl:w-10/12">
      <Hero />
      <InfoCards />
      <section className="mt-16 flex flex-col gap-4 md:mt-32 md:flex-row">
        <div className="relative h-40 w-full sm:h-64 md:h-80">
          <Image
            className="absolute -left-4 -top-4 z-10 h-16 w-auto rotate-180 md:-left-8 md:-top-8 md:h-32"
            src={protractor}
            alt="Lightbulb illustration"
          ></Image>
          <Image
            className="rounded-xl"
            src={alphabet}
            alt="Jay Education creating number line"
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="relative h-64 w-full md:h-80">
          <Image
            className="rotate-30 absolute -bottom-8 right-2 z-10 h-20 w-auto md:-bottom-16 md:right-1/4 md:h-32"
            src={plant}
            alt="Lightbulb illustration"
          ></Image>
          <Image
            className="absolute -right-2 -top-24 z-10 h-20 w-auto rotate-12 md:h-32"
            src={trophy}
            alt="Lightbulb illustration"
          ></Image>
          <Image
            className="rounded-xl"
            src={tuition}
            alt="Jay Education creating number line"
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </section>
    </main>
  );
}
