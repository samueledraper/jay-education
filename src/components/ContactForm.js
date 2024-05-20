"use client";

export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" required placeholder="Name" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Email" />
        </div>
        <div>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
