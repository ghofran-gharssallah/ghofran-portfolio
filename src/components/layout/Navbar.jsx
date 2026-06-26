import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,.25)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <h1 className="text-2xl font-bold tracking-wide">
          GG<span className="text-indigo-500">.</span>
        </h1>

        {/* Desktop */}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}

<a
  href="/Cv_Ghofran_Gharssallah.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
  hidden
  md:flex
  items-center
  rounded-xl
  border
  border-indigo-500/20
  bg-indigo-600
  px-5
  py-3
  text-sm
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  hover:bg-indigo-500
  "
>
  Download CV
</a>

        {/* Mobile */}

        <button className="text-3xl md:hidden">
          <HiOutlineMenuAlt3 />
        </button>

      </div>
    </header>
  );
};

export default Navbar;