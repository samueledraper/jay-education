"use client";
import { useState, useEffect } from "react";
import workshops from "@/json/workshops.json";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("tuition");

  useEffect(() => {
    setSuccess(false);
  }, []);

  function handleSubject(e) {
    setSubject(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "0599aef6-e2bd-4284-9c9b-aaf83ac0dd02");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    setName(e.target.first_name.value);

    const result = await response.json();

    if (result.success) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <section className="mx-auto mt-16">
      <div className="text-xl">
        {success ? (
          <div className="flex h-96 flex-col items-center justify-center text-2xl">
            <p>{`Thank you ${name}, we've got your message. We aim to respond within 24 hours.`}</p>
            <button
              className="mt-8 bg-expression_09 bg-contain bg-bottom bg-no-repeat text-xl font-semibold"
              onClick={() => setSuccess(false)}
            >
              Return
            </button>
          </div>
        ) : (
          <div className="gap-16 md:flex">
            <div className="md:w-1/3">
              <p className="mb-4">
                Please provide as much information as possible.
              </p>
            </div>
            <form
              className="mt-8 flex flex-col gap-8 text-lg md:mt-0 md:w-2/3"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="from_name" value="Website"></input>

              <input
                type="hidden"
                name="subject"
                value={`${subject} enquiry`}
              ></input>

              <div>
                <select
                  className="w-full rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  onChange={handleSubject}
                  name="enquiry_subject"
                >
                  <option hidden value="general">
                    Select Enquiry Type
                  </option>
                  <option value="tuition">Tuition</option>
                  <option value="workshop">Workshops</option>
                </select>
              </div>

              <div className="flex w-full gap-4">
                <input
                  className="w-1/2 rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  required
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                />
                <input
                  className="w-1/2 rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <input
                  className="w-full rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  type="tel"
                  maxLength={11}
                  name="phone_number"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  className="w-full rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>

              {subject === "tuition" && (
                <>
                  <div>
                    <select
                      name="type"
                      className="w-full rounded-xl border-2 bg-transparent p-2 font-medium"
                    >
                      <option hidden value="n/a">
                        Select Tuition Type
                      </option>
                      <option value="individual_lessons">
                        Individual Lessons
                      </option>
                      <option value="transfer_tests">
                        Transfer Tests (11+)
                      </option>
                      <option value="sen_support">SEN Support</option>
                      <option value="assessments">Assessments</option>
                    </select>
                  </div>

                  <select
                    name="year_group"
                    className="w-full rounded-xl border-2 bg-transparent p-2 font-medium"
                  >
                    <option hidden value="n/a">
                      Select Age Group
                    </option>
                    <option value="reception">Reception</option>
                    <option value="1">Year 1 (5-6 years old)</option>
                    <option value="2">Year 2 (6-7 years old)</option>
                    <option value="3">Year 3 (7-8 years old)</option>
                    <option value="4">Year 4 (8-9 years old)</option>
                    <option value="5">Year 5 (9-10 years old)</option>
                    <option value="6">Year 6 (10-11 years old)</option>
                    <option value="7">Year 7 (11-12 years old)</option>
                  </select>
                </>
              )}

              {subject === "workshop" && (
                <>
                  <select
                    name="workshop"
                    className="w-full rounded-xl border-2 bg-transparent p-2 font-medium"
                  >
                    <option hidden value="n/a">
                      Select the upcoming workshop you are interested in
                    </option>

                    {workshops.map((workshop) => {
                      return (
                        <option
                          key={workshop.id}
                          value={`${workshop.date} - ${workshop.title}`}
                        >{`${workshop.weekday} ${workshop.date} ${workshop.month} - ${workshop.title}: ${workshop.sub}`}</option>
                      );
                    })}
                  </select>
                </>
              )}

              <div>
                <textarea
                  className="w-full rounded-xl border-2 bg-transparent p-2 font-medium placeholder:text-black"
                  name="message"
                  required
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                className="self-end bg-expression_04 bg-contain bg-center bg-no-repeat p-8 text-3xl font-semibold"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
