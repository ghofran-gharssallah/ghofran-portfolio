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
    <div className="space-y-6">

      {infos.map((info) => {

        const Icon = info.icon;

        return (

          <a
            key={info.title}
            href={info.href}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-5
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            transition
            hover:border-indigo-500
            hover:-translate-y-1
            "
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">

              <Icon className="text-xl text-indigo-400"/>

            </div>

            <div>

              <h3 className="font-semibold">
                {info.title}
              </h3>

              <p className="text-sm text-zinc-400">
                {info.value}
              </p>

            </div>

          </a>

        );

      })}

    </div>
  );
};

export default ContactInfo;