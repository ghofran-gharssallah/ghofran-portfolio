import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../components/ui/motionPresets";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const infos = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "ghofrangharssallah79@gmail.com",
    href: "mailto:ghofrangharssallah79@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "+216 99 808 365",
    href: "tel:+21699808365",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/ghofran-gharssallah",
    href: "https://github.com/ghofran-gharssallah",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/ghofran-gharssallah",
    href: "https://linkedin.com/in/ghofran-gharssallah-7b10122a3",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-6"
    >

      {infos.map((info) => {

        const Icon = info.icon;

        return (

          <motion.a
            variants={fadeUp}
            key={info.title}
            href={info.href}
            target="_blank"
            rel="noreferrer"
            className="
            group
            flex
            items-center
            gap-5
            rounded-2xl
            border
            border-line
            bg-surface
            p-6
            shadow-soft
            transition-[translate,box-shadow,border-color]
            duration-500
            ease-out
            hover:-translate-y-1
            hover:border-accent
            hover:shadow-warm
            "
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-tint transition-colors duration-300 group-hover:bg-accent">

              <Icon className="text-xl text-ink"/>

            </div>

            <div className="min-w-0">

              <h3 className="font-semibold">
                {info.title}
              </h3>

              <p className="break-words text-sm text-muted">
                {info.value}
              </p>

            </div>

          </motion.a>

        );

      })}

    </motion.div>
  );
};

export default ContactInfo;