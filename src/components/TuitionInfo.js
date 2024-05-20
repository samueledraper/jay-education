"use client";

import { useState } from "react";

export default function TuitionInfo() {
  const [userChoice, setUserChoice] = useState("individualLessons");

  function handleUserChoice(e) {
    setUserChoice(e.target.value);
  }
  return (
    <section>
      <div>
        <h2>Tuition</h2>
        <p>
          We all have a wide range of experience across KS1 & KS2, including
          working with children with various Special Education Needs. We offer
          individual and group sessions which can be delivered in Chinnor,
          Longwick, in your own home or via Zoom. We have enhanced DBS checks
          and are fully insured. Prices from £45 an hour for 1-1 lessons.
        </p>
      </div>
      <div>
        <button onClick={handleUserChoice} value={"individualLessons"}>
          Individual Lessons
        </button>
        <button onClick={handleUserChoice} value={"transferTests"}>
          Transfer Tests (11+)
        </button>
        <button onClick={handleUserChoice} value={"senSupport"}>
          SEN Support
        </button>
        <button onClick={handleUserChoice} value={"assessments"}>
          Assessments
        </button>
        <button onClick={handleUserChoice} value={"parentWorkshops"}>
          Parent Workshops
        </button>
      </div>
      <div>
        {userChoice === "individualLessons" && (
          <div>
            <h3>Individual Lessons</h3>
            <p>
              Our individual lessons will enable your child to learn at their
              own pace and grow in confidence. They will be planned to meet your
              child’s specific needs. They may be struggling in some areas of
              the curriculum, not reaching their full potential or lack
              confidence in larger teaching groups, so would benefit from a
              relaxed learning environment with personalised and engaging
              lessons.
            </p>
            <p>From £45 per hour</p>
          </div>
        )}
        {userChoice === "transferTests" && (
          <div>
            <h3>Transfer Tests (11+)</h3>
            <p>
              If your child has the aptitude to perform well above average in
              the subjects tested, then we can help prepare them to sit the
              test. Initial assessment is carried out to identify any weaker
              areas. Individual or group sessions will be weekly, with homework
              being set. Closer to the test additional sessions or short,
              intensive courses will be offered.
            </p>
            <p>
              We can also help prepare your child for entrance exams. Having
              worked in the independent sector, we know their high expectations
              and have helped past pupils gain places in many schools in both
              Buckinghamshire and Oxfordshire.
            </p>
            <p>From £45 per hour</p>
          </div>
        )}
        {userChoice === "senSupport" && (
          <div>
            <h3>SEN Support</h3>
            <p>
              We have experience of teaching children with a wide range of
              special educational needs including dyslexia, dyscalculia,
              dyspraxia, ASD and ADHD. Working one-to-one with children with
              such needs can help them overcome frustration they may be feeling
              and reignite an enthusiasm for learning, whilst building
              confidence. All lessons are planned for the individual child and
              use multi-sensory approaches.
            </p>
            <p>From £45 per hour</p>
          </div>
        )}
        {userChoice === "assessments" && (
          <div>
            <h3>Assessments</h3>
            <p>
              We offer informal assessment sessions to help you find out exactly
              how your child is doing, including standardised results in reading
              and spelling. The assessments include comprehensive feedback and
              areas to work on, alongside strategies on how to support your
              child at home. Contact jane@jayeducation.co.uk for more
              information.
            </p>
            <p>From £90</p>
          </div>
        )}
        {userChoice === "parentWorkshops" && (
          <div>
            <h3>Parent Workshops</h3>
            <p>
              We hold a monthly meet-up for parents of children with SEN needs.
              This is predominantly a network group with a short input from us
              and then plenty of time to share ideas and resources, successes
              and advice, with plenty of coffee and cake!
            </p>
            <p>
              We also run regular workshops, which aim to give you information
              and strategies on various useful topics. So far these have been on
              Dyslexia; Helping your child with spelling; Emotional regulation
              and Working memory.
            </p>
            <p>Follow us on Facebook to see forthcoming dates for workshops.</p>
            <p>From £10 per Workshop</p>
          </div>
        )}
      </div>
    </section>
  );
}
