"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import services from "@/json/services.json";

import line_01 from "@/assets/illustrations/line_01.png";

export default function TuitionInfo() {
  const [type, setType] = useState(services[0].type);
  const [description, setDescription] = useState(services[0].description);
  const [price, setPrice] = useState(services[0].price);

  function handleDisplay(e) {
    setType(e.target.value);
  }

  useEffect(() => {
    const display = services.find((service) => service.type === type);
    setDescription(display.description);
    setPrice(display.price);
  }, [type]);

  return (
    <section id="tuition" className="mt-16 md:my-32">
      <h2 className="mb-2 text-5xl font-bold lg:text-6xl">Tuition</h2>

      <Image
        className="mt-4 w-2/3 sm:w-1/2 md:w-1/3"
        src={line_01}
        alt="Line illustration"
      ></Image>

      <div className="mt-8 flex flex-col gap-10">
        <div className="flex flex-wrap gap-4 text-lg font-semibold md:text-xl">
          {services.map((service, i) => {
            return (
              <button
                className={`${type === service.type ? "bg-expression_01" : ""} bg-contain bg-center bg-no-repeat p-3 hover:bg-expression_01`}
                key={i}
                value={service.type}
                onClick={handleDisplay}
              >
                {service.type}
              </button>
            );
          })}
        </div>

        <div className="text-xl md:text-2xl">
          <p>{description}</p>
          <p className="mt-4 text-base font-semibold md:text-lg">{price}</p>
        </div>
      </div>
    </section>
  );
}
