import Image from "next/image";

import UpcomingWorkshops from "@/components/UpcomingWorkshops";
import TuitionInfo from "@/components/TuitionInfo";
import Testimonials from "@/components/Testimonials";

import hero from "../../public/images/tuition-session-reading.jpg";

export default function Home() {
  return (
    <main>
      <section>
        <div className="mx-auto my-16 w-10/12 max-w-4xl text-xl md:text-2xl lg:my-32 lg:text-3xl">
          <h2 className="mb-8 leading-relaxed">
            Our strong belief has always been that children who are happy and
            comfortable learn best.
          </h2>
          <h2 className="mb-8 leading-relaxed">
            Children who have a good attitude to learning, are resilient and
            reflective learners, achieve well and therefore building confidence
            for learning underpins all our teaching.
          </h2>
        </div>

        <div className="relative mx-auto h-96 md:h-128">
          <Image
            priority
            quality={20}
            src={hero}
            alt={""}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <UpcomingWorkshops />

      <TuitionInfo />
      <Testimonials />
    </main>
  );
}
