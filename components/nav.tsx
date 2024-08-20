"use client";
import { navigation } from "@/data/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { angelina } from "@/components/local-fonts";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
          ? "bg-zinc-900/0 border-transparent"
          : "bg-zinc-900/500  border-zinc-800 "
          }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-4 mx-auto">
          <nav className="animate-fade-in duration-75">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="duration-500 text-zinc-500 hover:text-zinc-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/"
            className="flex gap-2 duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <img src="/favicon/favicon-32x32.png" alt="Logo" width={24} height={24} />
            <span className={angelina.className}>Ajay</span>
          </Link>
        </div>
      </div>
    </header >
  );
};
