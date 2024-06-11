"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  let testimonials = [
    {
      quote:
        "“A wonderful tool kit of techniques, tips and ideas to build support for my child. Positive and practical. Thank you!”",
      author: "On our Parent Workshops",
    },
    {
      quote:
        "“A fantastic opportunity to meet other parents in a similar situation and sharing thoughts and ideas.”",
      author: "On our SEN Meet Ups",
    },
    {
      quote:
        "“The first time our son has ever been enthusiastic about learning. Thank you so much. Highly recommend.”",
      author: "From a parent",
    },
  ];

  const [display, setDisplay] = useState(testimonials[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      8000,
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setDisplay(testimonials[index]);
  }, [index]);

  return (
    <section className="text-brandDarkTeal-900 w-full bg-brandTeal-500 p-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 py-16 leading-relaxed">
        <h2>What people are saying...</h2>
        <p className="text-4xl font-semibold">{display.quote}</p>
        <p>{display.author}</p>
      </div>
    </section>
  );
}
