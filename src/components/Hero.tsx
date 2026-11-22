"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PortraitFrame } from "./PortraitFrame";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.7, ease } },
  };

  const socialClass =
    "inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 size-[32rem] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 size-[30rem] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-12 pt-10 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-blue-400/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-400" />
            </span>
            {profile.experience} experience · {profile.company}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm tracking-wide text-blue-300"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-2 text-4xl font-semibold tracking-tight text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            {profile.intro}
          </motion.p>

          <motion.ul
            variants={item}
            aria-label="Professional focus"
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {profile.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1 text-xs font-medium text-blue-200 sm:text-sm"
              >
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3.5 text-sm font-semibold text-[#ffffff] shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className={socialClass}
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className={socialClass}
            >
              <LinkedinIcon className="size-5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
              Technologies
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
              {profile.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300 transition hover:border-purple-400/40 hover:text-white"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.9, ease, delay: reduce ? 0 : 0.2 }}
          className="order-1 lg:order-2"
        >
          <PortraitFrame src={profile.portrait} name={profile.name} />
        </motion.div>
      </div>
    </section>
  );
}
