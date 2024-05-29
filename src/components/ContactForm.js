"use client";

import { useState } from "react";

export default function ContactForm() {
  const [enquiryType, setEnquiryType] = useState(
    "f15b5dc4-4d0b-4902-a745-7f5d4f2d15a5"
  );

  const [result, setResult] = useState("");

  function handleEnquiryType(e) {
    console.log(e.target.value);
    setEnquiryType(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: e.target.recipient.value,
        firstname: e.target.name.value,
        surname: e.target.surname.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        tuition: e.target.tuition.value,
        age: e.target.age.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setResult("success");
      console.log(result);
      e.target.reset();
    } else {
      setResult("failure");
    }
  }

  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-10/12 mx-auto my-32 max-w-3xl text-lg"
      >
        <input
          type="hidden"
          name="subject"
          value="JAY Education Tuition Enquiry"
        />
        <div>
          <select
            onChange={handleEnquiryType}
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-4 py-2"
            name="recipient"
            id="recipient"
          >
            <option value="f15b5dc4-4d0b-4902-a745-7f5d4f2d15a5">
              Tuition Enquiry
            </option>
            <option value="0599aef6-e2bd-4284-9c9b-aaf83ac0dd02">
              Workshops
            </option>
            <option value="0599aef6-e2bd-4284-9c9b-aaf83ac0dd02">
              Contact Jane
            </option>
          </select>
        </div>
        <div className="flex gap-4">
          <input
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
            type="text"
            name="name"
            required
            placeholder="First Name"
          />
          <input
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
            type="text"
            name="surname"
            required
            placeholder="Surname"
          />
        </div>
        <div>
          <input
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
            type="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
            type="email"
            name="email"
            required
            placeholder="Email Address"
          />
        </div>
        {enquiryType === "f15b5dc4-4d0b-4902-a745-7f5d4f2d15a5" && (
          <div className="flex flex-col md:flex-row gap-8">
            <select
              className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
              name="tuition"
              id="tuition"
            >
              <option value="Individual-Lessons">Individual Lessons</option>
              <option value="Transfer-Tests">Transfer Tests (11+)</option>
              <option value="SEN-Support">SEN Support</option>
              <option value="Assessments">Assessments</option>
            </select>
            <input
              className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
              type="number"
              name="age"
              min="0"
              max="99"
              placeholder="Child's Age"
            />
          </div>
        )}
        <div>
          <textarea
            className="w-full bg-brandNeutral-200 border-2 border-brandTeal-900 rounded px-2 py-1"
            name="message"
            required
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          className="w-fit self-end cursor-pointer px-16 py-2 rounded border-2 border-brandTeal-900 bg-brandTeal-500 hover:bg-brandTeal-600 font-semibold"
          type="submit"
        >
          Send
        </button>
      </form>
      <p>{result}</p>
    </section>
  );
}
