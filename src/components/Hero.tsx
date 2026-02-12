"use client";

import s from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.content}>
            <div className={s.pecBadge}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>PEC Registered Engineer</span>
            </div>

            <p className={s.greeting}>Assalam o Alaikum, I am</p>

            <h1 className={s.name}>
              Muhammad Akram
              <span className={s.nameGradient}>Ansari</span>
            </h1>

            <p className={s.title}>Professional Chemical Engineer</p>

            <p className={s.description}>
              Over <span className={s.highlight}>30 years</span> of expertise in
              petrochemical, resin, fertilizer, and pharmaceutical industries.
              Specialized in plant operations, utilities management, and process
              engineering.
            </p>

            <div className={s.stats}>
              <div className={s.statCard}>
                <p className={s.statValue}>30+</p>
                <p className={s.statLabel}>Years Exp.</p>
              </div>
              <div className={s.statCard}>
                <p className={s.statValue}>8+</p>
                <p className={s.statLabel}>Companies</p>
              </div>
              <div className={s.statCard}>
                <p className={s.statValue}>50+</p>
                <p className={s.statLabel}>Projects</p>
              </div>
            </div>

            <div className={s.buttons}>
              <a href="#contact" className={s.btnPrimary}>
                Contact Me
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a href="#experience" className={s.btnOutline}>
                View Experience
              </a>
            </div>
          </div>

          <div className={s.profileWrap}>
            <div className={s.profileInner}>
              {/* Animated engineering frame */}
              <div className={s.engFrame}>
                {/* Outer rotating gear ring */}
                <svg
                  className={s.gearRing}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="url(#frameGrad)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="175"
                    stroke="url(#frameGrad)"
                    strokeWidth="0.5"
                    strokeDasharray="3 8"
                    opacity="0.25"
                  />
                  {/* Gear teeth marks around outer ring */}
                  {[...Array(24)].map((_, i) => {
                    const angle = i * 15 * (Math.PI / 180);
                    const x1 = 200 + 185 * Math.cos(angle);
                    const y1 = 200 + 185 * Math.sin(angle);
                    const x2 = 200 + 195 * Math.cos(angle);
                    const y2 = 200 + 195 * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#3b82f6"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                    );
                  })}
                  {/* Corner node dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                    const angle = deg * (Math.PI / 180);
                    const cx = 200 + 190 * Math.cos(angle);
                    const cy = 200 + 190 * Math.sin(angle);
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="3"
                        fill="#3b82f6"
                        opacity="0.5"
                      />
                    );
                  })}
                  <defs>
                    <linearGradient
                      id="frameGrad"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="400"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Inner counter-rotating ring */}
                <svg
                  className={s.gearRingReverse}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="168"
                    stroke="#f59e0b"
                    strokeWidth="0.8"
                    strokeDasharray="12 8"
                    opacity="0.2"
                  />
                  {[...Array(12)].map((_, i) => {
                    const angle = i * 30 * (Math.PI / 180);
                    const cx = 200 + 168 * Math.cos(angle);
                    const cy = 200 + 168 * Math.sin(angle);
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill="#f59e0b"
                        opacity="0.4"
                      />
                    );
                  })}
                </svg>

                {/* Orbiting dot */}
                <div className={s.orbitDot}></div>

                {/* Actual photo */}
                <div className={s.profileCircle}>
                  <Image
                    src="/Picture1-removebg-preview.png"
                    alt="Engr. Muhammad Akram Ansari"
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    className={s.profileImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
