"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrapper hero-inner">
        {/* LEFT TEXT */}
        <div className="hero-text">
          <p className="hero-kicker">Hello, It&apos;s Me</p>
          <h1 className="hero-name">GOKULAKANNAN</h1>

          <div className="hero-subline">
            <span>And I&apos;m a</span>
            <span className="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Python Full Stack Developer",
                    "Creative Problem Solver",
                    "Team Player & Communicator",
                    "Adaptable and Fast Learner",
                    "Detail-Oriented Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          <p className="hero-description">
            I&apos;m a Python full stack developer passionate about building
            end-to-end web applications, from clean backend APIs to responsive
            user interfaces, with a strong focus on code quality and teamwork.
          </p>

          {/* View Resume button under paragraph */}
          <div style={{ marginTop: "24px" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                borderRadius: "999px",
                border: "1px solid #22d3ee",
                color: "#e5e7eb",
                fontSize: "14px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background:
                  "linear-gradient(90deg, rgba(34,211,238,0.15), rgba(168,85,247,0.25))",
              }}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-glow" />
          <div className="hero-border-ring" />
          <div className="hero-inner-circle" />
          <div className="hero-photo">
            <Image
              src="/me.png"
              alt="Profile photo"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
