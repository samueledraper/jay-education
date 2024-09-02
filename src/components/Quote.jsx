import Image from "next/image";

import speach_01 from "@/assets/illustrations/speach_01.png";
import speach_02 from "@/assets/illustrations/speach_02.png";

export default function Quote({ quote }) {
  return (
    <section className="mt-16 flex flex-col text-3xl font-semibold md:mt-32">
      <Image
        className="w-16 self-start md:w-24"
        src={speach_01}
        alt="Speach mark illustration"
      ></Image>
      <p className="px-8 py-2 leading-tight md:px-8 md:text-center md:text-5xl md:leading-tight">
        {quote}
      </p>
      <Image
        className="w-16 self-end md:w-24"
        src={speach_02}
        alt="Speach mark illustration"
      ></Image>
    </section>
  );
}
