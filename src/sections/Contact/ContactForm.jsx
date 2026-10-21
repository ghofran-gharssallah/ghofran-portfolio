import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ease } from "../../components/ui/motionPresets";
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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease }}
      className="rounded-3xl border border-line bg-surface p-6 shadow-soft md:p-8"
    >
      <h3 className="mb-6 text-2xl font-medium">
        Send Me a Message
      </h3>

      <div className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-line bg-paper p-4 text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-muted focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent-tint"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-line bg-paper p-4 text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-muted focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent-tint"
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-line bg-paper p-4 text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-muted focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent-tint"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-accent
            py-4
            font-semibold
            text-ink
            transition-all
            duration-300
            hover:bg-accent-hover
            hover:shadow-warm
            disabled:hover:shadow-none
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>
    </motion.form>
  );
};

export default ContactForm;