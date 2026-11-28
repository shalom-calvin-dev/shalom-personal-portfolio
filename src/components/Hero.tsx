"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PortraitFrame } from "./PortraitFrame";
import { ResumeButton } from "./ResumeButton";
import { TechChip } from "./TechChip";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ experienceLabel }: { experienceLabel: string }) {
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
    "inline-flex size-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-12 pt-10 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {experienceLabel} experience · {profile.company}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm tracking-wide text-accent"
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
            className="mt-3 text-2xl font-medium text-accent sm:text-3xl"
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
                className="rounded-full border border-accent/25 bg-accent-tint px-3 py-1 text-xs font-medium text-accent sm:text-sm"
              >
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-fill px-7 py-3.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-fill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <ResumeButton />
          </motion.div>

          <motion.p variants={item} className="mt-3 text-center text-xs text-slate-400 lg:text-left">
            {profile.resumeLabel}
          </motion.p>

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
                <TechChip
                  key={t}
                  name={t}
                  className="transition hover:border-accent/40 hover:text-white"
                />
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
