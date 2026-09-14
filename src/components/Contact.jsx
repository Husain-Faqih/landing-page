import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "62882008208842";

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Nama harus diisi.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email harus diisi.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email harus mengandung @.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Pesan harus diisi.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccess("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSuccess("Pesan berhasil dikirim! Terima kasih.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({
        submit: "Pesan gagal dikirim. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  }

  const whatsappMessage = `Halo, saya ingin menghubungi Anda.

Nama: ${form.name}
Email: ${form.email}

Pesan:
${form.message}`;

  function handleWhatsApp() {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-subtitle">CONTACT</p>

        <h2>
          Let's Build Something <span>Together.</span>
        </h2>

        <p>
          Have an idea or project in mind? Let's create something amazing
          together.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            {errors.name && <p className="form-error">⚠ {errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />

            {errors.email && <p className="form-error">⚠ {errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
            />

            {errors.message && <p className="form-error">⚠ {errors.message}</p>}
          </div>

          <div className="contact-buttons">
            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              className="btn whatsapp"
              onClick={handleWhatsApp}
            >
              Chat on WhatsApp
            </button>
          </div>

          {errors.submit && (
            <p className="form-error form-submit-error">⚠ {errors.submit}</p>
          )}

          {success && <p className="form-success">✓ {success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
