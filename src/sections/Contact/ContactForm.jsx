import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message!");
    }

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="mb-6 text-2xl font-bold">
        Send Me a Message
      </h3>

      <div className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black/20 p-4 outline-none transition focus:border-indigo-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black/20 p-4 outline-none transition focus:border-indigo-500"
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-4 outline-none transition focus:border-indigo-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-indigo-600
            py-4
            font-semibold
            transition-all
            duration-300
            hover:bg-indigo-500
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </div>
    </motion.form>
  );
};

export default ContactForm;