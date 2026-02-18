import { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setForm({ name: "", email: "", subject: "", message: "" });
  };



  return (
     <section className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? Send us a message and let's create
            something amazing together.
          </p>

          <div className="contact-info">
            <p>📧 info@example.com</p>
            <p>📞 +92 300 0000000</p>
            <p>📍 Pakistan</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message →</button>
        </form>
      </div>
    </section>
  )
}
