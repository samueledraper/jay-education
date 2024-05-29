"use client";

import { useState } from "react";

import workshops from "@/json/workshops.json";

export default function UpcomingWorkshops() {
  const [toggle, setToggle] = useState(-1);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0599aef6-e2bd-4284-9c9b-aaf83ac0dd02",
        name: e.target.name.value,
        email: e.target.email.value,
        workshop: e.target.workshop.value,
        date: e.target.date.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section id="workshops" className="bg-brandNeutral-200">
      <div className="w-10/12 mx-auto py-16 lg:py-32">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">
          Upcoming Workshops
        </h2>

        <div className="flex flex-col lg:flex-row gap-4">
          {workshops.map((workshop, index) => {
            return (
              <div
                key={workshop._id}
                className="h-fit flex flex-col justify-between border-2 border-brandTeal-900 rounded-lg text-sm lg:w-1/4"
              >
                <div className="flex flex-col p-4">
                  <p>{workshop.date}</p>
                  <div className="my-4">
                    <p className="mb-2 text-2xl font-semibold ">
                      {workshop.title}
                    </p>
                    <p className="font-semibold">{workshop.sub}</p>
                  </div>
                  <p className="hidden sm:block text-sm">
                    {workshop.description}
                  </p>
                  {toggle === index ? (
                    <>
                      <div className="flex justify-between mt-4 items-center">
                        <p className="font-semibold">Register Interest</p>
                        <svg
                          className="cursor-pointer"
                          onClick={() => setToggle(-1)}
                          width="16"
                          height="16"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2.39337"
                            y="0.979187"
                            width="32"
                            height="2"
                            transform="rotate(45 2.39337 0.979187)"
                            fill="#003C3C"
                          />
                          <rect
                            x="0.979187"
                            y="23.6066"
                            width="32"
                            height="2"
                            transform="rotate(-45 0.979187 23.6066)"
                            fill="#003C3C"
                          />
                        </svg>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2 mt-4"
                      >
                        <input
                          type="hidden"
                          name="workshop"
                          value={`${workshop.title}`}
                        />
                        <input
                          type="hidden"
                          name="date"
                          value={`${workshop.date}`}
                        />
                        <div>
                          <input
                            className="w-full bg-brandNeutral-100 border-2 border-brandTeal-900 rounded px-2 py-1"
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                          />
                        </div>
                        <div>
                          <input
                            className="w-full bg-brandNeutral-100 border-2 border-brandTeal-900 rounded px-2 py-1"
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                          />
                        </div>
                        <button
                          className="w-full cursor-pointer px-2 py-1 rounded border-2 border-brandTeal-900 bg-brandTeal-500 hover:bg-brandTeal-600 font-semibold"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </>
                  ) : (
                    <p
                      onClick={() => setToggle(index)}
                      className="cursor-pointer font-semibold mt-4 hover:text-brandTeal-800 w-fit"
                    >
                      Register Interest
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
