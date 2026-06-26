import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-indigo-400">
            Contact
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Have a project, internship opportunity, or just want to
            say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;