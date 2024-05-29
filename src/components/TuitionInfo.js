"use client";

import { useState } from "react";

export default function TuitionInfo() {
  const [userChoice, setUserChoice] = useState("individualLessons");

  function handleUserChoice(e) {
    setUserChoice(e.target.value);
  }
  return (
    <section id="services" className="py-32 text-brandTeal-900">
      <div className="w-10/12 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold">Tuition Services</h2>
          <p className="text-xl mt-8">
            We all have a wide range of experience across KS1 & KS2, including
            working with children with various Special Education Needs. We offer
            individual and group sessions which can be delivered in Chinnor,
            Longwick, in your own home or via Zoom. We have enhanced DBS checks
            and are fully insured.
          </p>
        </div>

        <div className="mt-8 lg:mt-16 justify-start">
          <div className="flex flex-wrap lg:justify-center gap-4 text-sm lg:text-lg">
            <button
              className={`px-4 py-2 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600 ${
                userChoice === "individualLessons" && "bg-brandTeal-500"
              }`}
              onClick={handleUserChoice}
              value={"individualLessons"}
            >
              Individual Lessons
            </button>
            <button
              className={`px-4 py-2 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600 ${
                userChoice === "transferTests" && "bg-brandTeal-500"
              }`}
              onClick={handleUserChoice}
              value={"transferTests"}
            >
              Transfer Tests (11+)
            </button>
            <button
              className={`px-4 py-2 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600 ${
                userChoice === "senSupport" && "bg-brandTeal-500"
              }`}
              onClick={handleUserChoice}
              value={"senSupport"}
            >
              SEN Support
            </button>
            <button
              className={`px-4 py-2 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600 ${
                userChoice === "assessments" && "bg-brandTeal-500"
              }`}
              onClick={handleUserChoice}
              value={"assessments"}
            >
              Assessments
            </button>
            <button
              className={`px-4 py-2 rounded-lg border-2 border-brandTeal-900 hover:bg-brandTeal-500 active:bg-brandTeal-600 ${
                userChoice === "workshops" && "bg-brandTeal-500"
              }`}
              onClick={handleUserChoice}
              value={"workshops"}
            >
              Workshops
            </button>
          </div>

          <div className="max-w-4xl mx-auto mt-8 flex flex-col text-xl">
            {userChoice === "individualLessons" && (
              <div className="text-base md:text-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Individual Tuition
                </h3>
                <p>
                  Our individual lessons will enable your child to learn at
                  their own pace and grow in confidence. They will be planned to
                  meet your child’s specific needs. They may be struggling in
                  some areas of the curriculum, not reaching their full
                  potential or lack confidence in larger teaching groups, so
                  would benefit from a relaxed learning environment with
                  personalised and engaging lessons.
                </p>
                <p className="mt-8 italic">Sessions from £45 per hour</p>
              </div>
            )}

            {userChoice === "transferTests" && (
              <div className="text-base md:text-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Transfer Tests (11+)
                </h3>

                <p>
                  If your child has the aptitude to perform well above average
                  in the subjects tested, then we can help prepare them to sit
                  the test. Initial assessment is carried out to identify any
                  weaker areas. Individual or group sessions will be weekly,
                  with homework being set. Closer to the test additional
                  sessions or short, intensive courses will be offered. We can
                  also help prepare your child for entrance exams. Having worked
                  in the independent sector, we know their high expectations and
                  have helped past pupils gain places in many schools in both
                  Buckinghamshire and Oxfordshire.
                </p>

                <p className="mt-8 italic">Sessions from £45 per hour</p>
              </div>
            )}
            {userChoice === "senSupport" && (
              <div className="text-base md:text-lg">
                <h3 className="text-2xl font-semibold mb-4">SEN Support</h3>

                <p>
                  We have experience of teaching children with a wide range of
                  special educational needs including dyslexia, dyscalculia,
                  dyspraxia, ASD and ADHD. Working one-to-one with children with
                  such needs can help them overcome frustration they may be
                  feeling and reignite an enthusiasm for learning, whilst
                  building confidence. All lessons are planned for the
                  individual child and use multi-sensory approaches.
                </p>
                <p className="mt-8 italic">Sessions from £45 per hour</p>
              </div>
            )}
            {userChoice === "assessments" && (
              <div className="text-base md:text-lg">
                <h3 className="text-2xl font-semibold mb-4">Assessments</h3>

                <p>
                  We offer informal assessment sessions to help you find out
                  exactly how your child is doing, including standardised
                  results in reading and spelling. The assessments include
                  comprehensive feedback and areas to work on, alongside
                  strategies on how to support your child at home.
                </p>
                <p className="mt-8 italic">Assessments from £90</p>
              </div>
            )}
            {userChoice === "workshops" && (
              <div className="text-base md:text-lg">
                <h3 className="text-2xl font-semibold mb-4">Workshops</h3>

                <p>
                  We hold a monthly meet-up for parents of children with SEN
                  needs. This is predominantly a network group with a short
                  input from us and then plenty of time to share ideas and
                  resources, successes and advice, with plenty of coffee and
                  cake! We also run regular workshops, which aim to give you
                  information and strategies on various useful topics. So far
                  these have been on Dyslexia; Helping your child with spelling;
                  Emotional regulation and Working memory.
                </p>
                <p className="mt-8 italic">Places from £10 per Workshop</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
