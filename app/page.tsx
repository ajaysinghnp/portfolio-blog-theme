import Link from "next/link";

import { angelina } from "@/components/local-fonts";
import Particles from "@/components/particles";
import Social from "@/components/social";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contacts" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />

      <h1 className={[
        "py-1.5 px-0.5 z-10 text-4xl text-transparent duration-1000",
        "bg-white cursor-default text-edge-outline animate-title",
        "font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text", angelina.className].join(" ")}>
        Ajay Singh
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-md text-zinc-500 ">
          &quote;An ultimate Success is always hidden behind the first failure&quote; - {" "}
          <Link
            target="_blank"
            href="/blog"
            className="underline duration-500 italic hover:text-zinc-300"
          >
            Blog [Ajay Singh]
          </Link>
        </h2>
      </div>


      <Social />

      <Link
        href="/contacts"
        className="text-zinc-400  mt-12 border border-zinc-600 hover:border-zinc-200 py-2 px-8 rounded-lg duration-500 animate-fade-in hover:text-zinc-100"
      >
        Let&rsquo;s Talk
      </Link>

      <div className="absolute bottom-0 left-0 p-4 text-sm text-zinc-500 animate-fade-in">
        <p className="text-center">
          Made with ❤️ in 🇳🇵 and hosted by {" "}
          <Link
            target="_blank"
            href="https://github.com"
            className="duration-500 hover:text-zinc-300"
          >
            GitHub
          </Link>
        </p>
      </div>

      <div className="absolute bottom-0 right-0 p-4 text-sm text-zinc-500 animate-fade-in">
        <p className="text-center">
          &copy; {new Date().getFullYear()} {" "}
          <Link
            target="_blank"
            href="/contact"
            className="duration-500 hover:text-zinc-300"
          >
            Ajay Singh
          </Link>. All rights reserved.
        </p>
      </div>
    </div>
  );

}