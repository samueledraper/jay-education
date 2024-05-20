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
      5000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setDisplay(testimonials[index]);
  }, [index]);

  return (
    <section>
      <h2>What people are saying...</h2>
      <p>{display.quote}</p>
      <p>{display.author}</p>
    </section>
  );
}
