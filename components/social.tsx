import Link from "next/link";
import { Facebook, Github, Instagram, Mail, Twitter, Youtube } from "lucide-react";

const socials = [
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/ajaykumarsingh.np",
    label: "Facebook",
    handle: "@ajaykumarsingh.np",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/ajaykumarsingh.np",
    label: "Instagram",
    handle: "@ajaykumarsingh.np",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/singh_ajaykumar",
    label: "Twitter",
    handle: "@singh_ajaykumar",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:admin@ajaysingh.com.np",
    label: "Email",
    handle: "admin@ajaysingh.com.np",
  },
  {
    icon: <Youtube size={20} />,
    href: "https://www.youtube.com/@ajay__singh",
    label: "YouTube",
    handle: "ajay__singh",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/mentormaya",
    label: "Github",
    handle: "mentormaya",
  },
];

export interface Props {
  icononly?: boolean
}

const Social = ({ icononly = true }: Props) => {
  return (
    <div className="social-links flex animate-fade-in">
      {socials.map((s) => (
        <Link
          href={s.href}
          key={s.href}
          target="_blank"
          className="relative flex flex-col items-center duration-700 group md:gap-8 px-4"
        >

          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-md duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            {s.icon}
          </span>{" "}
          {!icononly && (
            <div className="z-10 flex flex-col items-center">
              <span className="font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                {s.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {s.label}
              </span>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export default Social