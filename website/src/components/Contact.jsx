import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Simple validation example
    if (!email || !email.includes("@") || !name || !message) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // You could also configure this to open the user's email client:
    window.location = `mailto:aakritiad01@gmail.com.com?subject=Contact from ${name}&body=${message}`;
    alert(`Thank you, ${name}. We have received your message!`);

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-blac p-10 mt-40">
      <h2 className="text-2xl font-bold text-center text-[#00df9a]">
        Get in Touch!
      </h2>
      <form
        className="flex flex-col items-center mt-5 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded mb-2 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded mb-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="p-2 rounded text-black mb-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-[#00df9a] text-white px-4 py-2 mt-3 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
