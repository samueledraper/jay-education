"use client";

import { useState } from "react";

import Image from "next/image";

import jane from "@/assets/images/jane.jpg";
import yasmin from "@/assets/images/yasmin.jpg";

import line_01 from "@/assets/illustrations/line_01.png";
import line_02 from "@/assets/illustrations/line_02.png";
import speach_01 from "@/assets/illustrations/speach_01.png";
import speach_02 from "@/assets/illustrations/speach_02.png";

export default function About() {
  const [readMoreJane, setReadMoreJane] = useState(false);
  const [readMoreYasmin, setReadMoreYasmin] = useState(false);

  function handleReadMoreJane() {
    setReadMoreJane(!readMoreJane);
  }

  function handleReadMoreYasmin() {
    setReadMoreYasmin(!readMoreYasmin);
  }

  return (
    <main>
      <div className="mt-16">
        <div>
          <h2 className="mb-2 text-5xl font-bold lg:text-6xl">Jane</h2>
          <Image
            className="mt-4 w-2/3 sm:w-1/2 md:w-1/3"
            src={line_01}
            alt="Line illustration"
          ></Image>
        </div>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex items-center gap-8 md:w-1/3 md:flex-col">
            <div className="relative min-[360px]:max-w-64 md:mx-auto">
              <Image
                className="rounded-xl"
                src={jane}
                alt="Jay Education tutor Jane"
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="mt-8 hidden flex-col font-semibold sm:flex">
              <Image
                className="self-start"
                width={50}
                src={speach_01}
                alt="Speach mark illustration"
              ></Image>
              <p className="px-4 py-2">
                Jane is adept at identifying a pupil’s individual needs. She
                maximises their potential using a positive and creative learning
                environment.
              </p>
              <Image
                className="self-end"
                width={50}
                src={speach_02}
                alt="Speach mark illustration"
              ></Image>
            </div>
          </div>
          <div className="hidden w-2/3 flex-col gap-4 text-xl md:flex">
            <p>
              I have taught for over 25 enjoyable years, working in both the
              state and independent sectors in many different roles. These have
              included leading English (including phonics) and assessment across
              the school; teaching in mainly Key Stage One and Lower Key Stage
              Two classes; supporting children one-to-one and in small 'booster'
              groups and as Joint Head Teacher.
            </p>
            <p>
              I graduated with a BEd (Hons) in teaching and have continued to
              study, completing courses on dyslexia, phonics teaching,
              multi-sensory maths, ADHD, sensory processing, ASD, improving
              children's writing and dyscalculia. I have recently completed my
              Level 3 Certificate in Practical Solutions for Dyslexia, with the
              British Dyslexia Association. I ensure I keep up to date with the
              latest research by attending conferences, webinars and
              exhibitions.
            </p>
            <p>
              Since beginning tutoring, I have had the opportunity to follow my
              interest in SEN and work with children in small groups and
              one-to-one. This enables strong working relationships to be built
              quickly and the child’s own interests incorporated into the
              teaching, increasing the child's confidence which, in turn,
              enables them to make rapid progress and become a more independent
              learner. It has enabled me to achieve what I set out to do when
              starting teaching initially - to make a difference to individual
              children and see their confidence and independence grow!
            </p>
          </div>
          <div className="w-full flex-col text-xl md:hidden">
            <p>
              I have taught for over 25 enjoyable years, working in both the
              state and independent sectors in many different roles. These have
              included leading English (including phonics) and assessment across
              the school; teaching in mainly Key Stage One and Lower Key Stage
              Two classes; supporting children one-to-one and in small 'booster'
              groups and as Joint Head Teacher.
            </p>
            {readMoreJane && (
              <>
                <p className="mt-4">
                  I graduated with a BEd (Hons) in teaching and have continued
                  to study, completing courses on dyslexia, phonics teaching,
                  multi-sensory maths, ADHD, sensory processing, ASD, improving
                  children's writing and dyscalculia. I have recently completed
                  my Level 3 Certificate in Practical Solutions for Dyslexia,
                  with the British Dyslexia Association. I ensure I keep up to
                  date with the latest research by attending conferences,
                  webinars and exhibitions.
                </p>
                <p className="mt-4">
                  Since beginning tutoring, I have had the opportunity to follow
                  my interest in SEN and work with children in small groups and
                  one-to-one. This enables strong working relationships to be
                  built quickly and the child’s own interests incorporated into
                  the teaching, increasing the child's confidence which, in
                  turn, enables them to make rapid progress and become a more
                  independent learner. It has enabled me to achieve what I set
                  out to do when starting teaching initially - to make a
                  difference to individual children and see their confidence and
                  independence grow!
                </p>
              </>
            )}
            <button
              className="mt-4 text-base font-semibold"
              onClick={handleReadMoreJane}
            >
              {readMoreJane ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div>
          <h2 className="mb-2 text-5xl font-bold lg:text-6xl">Yasmin</h2>
          <Image
            className="mt-4 w-2/3 sm:w-1/2 md:w-1/3"
            src={line_02}
            alt="Line illustration"
          ></Image>
        </div>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex items-center gap-8 md:w-1/3 md:flex-col">
            <div className="relative min-[360px]:max-w-64 md:mx-auto">
              <Image
                className="rounded-xl"
                src={yasmin}
                alt="Jay Education tutor Yasmin"
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="mt-8 hidden flex-col font-semibold sm:flex">
              <Image
                className="self-start"
                width={50}
                src={speach_01}
                alt="Speach mark illustration"
              ></Image>
              <p className="px-4 py-2">
                Yasmin is very empathetic and attentive, encouraging children to
                maximise their learning outcomes.
              </p>
              <Image
                className="self-end"
                width={50}
                src={speach_02}
                alt="Speach mark illustration"
              ></Image>
            </div>
          </div>
          <div className="hidden w-2/3 flex-col gap-4 text-xl md:flex">
            <p>
              I have 13 years of teaching experience in Key Stage Two in a local
              independent school, where I went on to lead mathematics and
              assessment and become Joint Head Teacher. After graduating with a
              BA Hons in Home Economics and Religious Education, I pursued a
              career in marketing before setting up my own catering business.
              Having two daughters and volunteering in their school, furthered
              my interest in education and how children learn, and at this point
              I retrained and achieved Qualified Teacher Status.
            </p>
            <p>
              I have taught all subjects across the Key Stage Two curriculum
              including verbal reasoning, English and mathematics to support
              pupils sitting the Transfer Test (11+). Specialising in
              mathematics, I also helped prepare pupils for SATs as well as
              independent school entrance exams and interview techniques. I have
              continued to teach mathematics to smaller groups of pupils, as
              well as on a one-to-one basis, to build children's confidence and
              develop their mathematical skills. I have mentored trainee
              teachers, provided maths training for class teachers and for
              parents, to understand how maths is taught in schools.
            </p>
            <p>
              Throughout my teaching career I have continued to study,
              completing courses on mastery in mathematics and deeper learning
              across the curriculum including in English, dyslexia, autism and
              ADHD. I thoroughly enjoy teaching and there are few things better
              than seeing the reaction of a child when they have that 'Eureka'
              moment.
            </p>
          </div>
          <div className="w-full flex-col text-xl md:hidden">
            <p>
              I have 13 years of teaching experience in Key Stage Two in a local
              independent school, where I went on to lead mathematics and
              assessment and become Joint Head Teacher. After graduating with a
              BA Hons in Home Economics and Religious Education, I pursued a
              career in marketing before setting up my own catering business.
              Having two daughters and volunteering in their school, furthered
              my interest in education and how children learn, and at this point
              I retrained and achieved Qualified Teacher Status.
            </p>
            {readMoreYasmin && (
              <>
                <p className="mt-4">
                  I have taught all subjects across the Key Stage Two curriculum
                  including verbal reasoning, English and mathematics to support
                  pupils sitting the Transfer Test (11+). Specialising in
                  mathematics, I also helped prepare pupils for SATs as well as
                  independent school entrance exams and interview techniques. I
                  have continued to teach mathematics to smaller groups of
                  pupils, as well as on a one-to-one basis, to build children's
                  confidence and develop their mathematical skills. I have
                  mentored trainee teachers, provided maths training for class
                  teachers and for parents, to understand how maths is taught in
                  schools.
                </p>
                <p className="mt-4">
                  Throughout my teaching career I have continued to study,
                  completing courses on mastery in mathematics and deeper
                  learning across the curriculum including in English, dyslexia,
                  autism and ADHD. I thoroughly enjoy teaching and there are few
                  things better than seeing the reaction of a child when they
                  have that 'Eureka' moment.
                </p>
              </>
            )}
            <button
              className="mt-4 text-base font-semibold"
              onClick={handleReadMoreYasmin}
            >
              {readMoreYasmin ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
