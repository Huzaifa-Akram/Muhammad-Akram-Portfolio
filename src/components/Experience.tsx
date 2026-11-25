"use client";

import { motion } from "framer-motion";
import s from "./Experience.module.css";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Manager – Process Engineering & Materials",
    company: "Future Ceutical Pvt. Ltd.",
    location: "Islamabad, Pakistan",
    period: "Jan 2023 – Aug 2023 · Apr 2024 – Jan 2026",
    current: false,
    description: [
      "Led design, HAZOP and HAZID studies for 20+ reaction systems in API manufacturing",
      "Proposed 10+ pilot plants for API baseline testing",
      "Commissioned mineral salts and nutraceutical units integrated with Orbit ERP",
      "Managed injectable-grade facility expansion; prepared ICH Q7 documentation that supported regulatory approval",
    ],
  },
  {
    title: "Process & Plant Manager",
    company: "Agven Pvt. Ltd. (SOP Fertilizer Plant)",
    location: "Gwadar, Pakistan",
    period: "Feb 2024 – Mar 2024",
    current: false,
    description: [
      "Achieved SOP quality specifications at master start-up",
      "Stabilized production and trained the plant operating staff",
      "Proposed the downstream product slate for the best business model",
    ],
  },
  {
    title: "Process Design Engineer",
    company: "Descon Engineering Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Sep 2023 – Feb 2024",
    current: false,
    description: [
      "Process design, control and ESD engineering for the PARCO 65 TPH boiler and super heater (48 bar, 390°C)",
      "Safety studies: HAZOP, HAZID, SIL rating, flammability and dispersion",
      "Prepared PFDs, P&IDs, M&E balances, datasheets and RFQ documentation",
    ],
  },
  {
    title: "Lead Process Engineer & Technical Manager",
    company: "PACHEM Global Pvt. Ltd.",
    location: "Faisalabad, Pakistan",
    period: "2018 – 2022",
    current: false,
    description: [
      "Led process design, commissioning and start-up of a 100–200 TPD phthalic anhydride plant (20–30 TPH steam) with experts from Germany, Belarus and Italy",
      "Directed refurbishment and erection, full-plant HAZOP and SIL-3/4 logic compliance",
      "Coordinated instrument refurbishment and procurement and the SUPCON DCS implementation, including tuning of all control loops",
      "Commissioned plant utilities including compressors, nitrogen generator and RO units",
    ],
  },
  {
    title: "Manager – Process, Planning & Project Development",
    company: "NIMIR Chemicals Pakistan Ltd. (NCPL)",
    location: "Sheikhupura, Pakistan",
    period: "2008 – 2018",
    current: false,
    description: [
      "Directed project development including alkyd resin units, DOP distillation columns and steam systems",
      "Developed a plasticizer pilot plant (2009) that led to commercialization of new products",
      "Carried out feasibility studies, energy audits and effluent treatment design with European suppliers",
      "Led the Yokogawa µXL to Centum 3000 DCS migration, field instrument audits and instrument preventive maintenance",
      "Developed 100+ SOPs with 42 safety interlocks; conducted internal ISO 9000 audits",
    ],
  },
  {
    title: "Manager Production / Shift Manager",
    company: "NIMIR Chemicals Pakistan Ltd. (NCPL)",
    location: "Sheikhupura, Pakistan",
    period: "2000 – 2007",
    current: false,
    description: [
      "Managed petrochemical plant operations, stability and troubleshooting",
      "Plant revamp, expansion and commissioning activities",
      "Merit performance certificate with special bonus and double increments (2006–2007)",
    ],
  },
  {
    title: "Shift Manager",
    company: "Attock Industrial Products Ltd. (POL)",
    location: "Rawalpindi, Pakistan",
    period: "1997 – 1999",
    current: false,
    description: [
      "Supervised production shifts at the industrial products plant",
      "A project of Pakistan Oilfields Limited (POL)",
    ],
  },
  {
    title: "Management Trainee Engineer",
    company: "Attock Refinery Ltd.",
    location: "Rawalpindi, Pakistan",
    period: "1994 – 1996",
    current: false,
    description: [
      "Two years of refinery training across crude distillation, preheat trains and heaters",
      "Hands-on with LPG / naphtha and reforming units",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={s.section}>
      <div className={s.container}>
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>My Journey</p>
            <h2 className={s.title}>Work Experience</h2>
            <p className={s.subtitle}>
              Over three decades of progressive experience in plant operations,
              process engineering, safety and commissioning.
            </p>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        <div className={s.timeline}>
          <div className={s.timelineLine}></div>
          <div className={s.timelineItems}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={s.timelineItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {/* Dot — positioned absolutely on center line for desktop */}
                <div className={s.dotWrap}>
                  <div
                    className={`${s.dot} ${exp.current ? s.dotCurrent : ""}`}
                  ></div>
                </div>

                {/* Card */}
                <div className={s.card}>
                  <div className={s.cardMeta}>
                    <span className={s.period}>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className={s.currentBadge}>Current</span>
                    )}
                  </div>

                  <h3 className={s.cardTitle}>{exp.title}</h3>
                  <p className={s.company}>{exp.company}</p>
                  <p className={s.location}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {exp.location}
                  </p>

                  <ul className={s.descList}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={s.descItem}>
                        <span className={s.descDot}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
