"use client";

import s from "./Experience.module.css";

const experiences = [
  {
    title: "Manager – Process Engineering & Materials",
    company: "Future Ceutical Pvt. Ltd.",
    location: "Islamabad, Pakistan",
    period: "Jan 2023 – Present",
    current: true,
    description: [
      "Managing utilities monitoring, treatment, and maintenance for API units",
      "Overseeing Nutraceutical, Cosmetics, Food, and Inactive Ingredients production",
      "Equipment reliability management and chemical/fuel usage optimization",
    ],
  },
  {
    title: "Process & Plant Manager",
    company: "Agven Pvt. Ltd.",
    location: "Gwadar, Pakistan",
    period: "Feb 2024 – Mar 2024",
    current: false,
    description: [
      "Stabilized production immediately after master startup",
      "Resolved utilities issues in integrated cooling-tower circuit",
      "Managed RO water treatment, air compressors, and LPG fuel monitoring",
    ],
  },
  {
    title: "Process Design Engineer",
    company: "Descon Engineering Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Sep 2023 – Feb 2024",
    current: false,
    description: [
      "Conducted process studies for PARCO 65 TPH, 48 bar, 390°C boiler",
      "Prepared PFDs, P&IDs, MEBs, datasheets, and RFQ documentation",
      "Documentation for HAZOP, HAZID, and stack-dispersion studies",
    ],
  },
  {
    title: "Process Engineer & Technical Manager",
    company: "PACHEM Global Private Limited",
    location: "Faisalabad, Pakistan",
    period: "2018 – 2022",
    current: false,
    description: [
      "Completed utilities assessment for PACHEM FIEDMC project",
      "Commissioned all utilities; monitored energy and chemical consumption",
      "Designed and commissioned compressors, nitrogen generator, and RO units",
    ],
  },
  {
    title: "Manager – Process, Planning & Project Development",
    company: "NIMIR Chemicals Pakistan Limited",
    location: "Sheikhupura, Pakistan",
    period: "2007 – 2018",
    current: false,
    description: [
      "Audited 20 TPH, 30 bar steam system with multiple let-down stations",
      "Installed 3.4 MW coal-fired heater with tie-in to German oil/gas heater",
      "Finalized utility routes and P&IDs for Alkyd Resin Project",
    ],
  },
  {
    title: "Manager Production / Shift Manager",
    company: "NIMIR Chemicals Pakistan Limited",
    location: "Sheikhupura, Pakistan",
    period: "2000 – 2006",
    current: false,
    description: [
      "Managed utilities operations and monitoring",
      "Plant revamp, expansion, and commissioning activities",
      "Awarded merit certificate in 2007 for excellent work",
    ],
  },
  {
    title: "Shift Manager",
    company: "Attock Industrial Products Limited",
    location: "Rawalpindi, Pakistan",
    period: "1997 – 1999",
    current: false,
    description: [
      "Managed shift operations in industrial production facility",
      "A project of Pakistan Oilfields Limited (POL)",
    ],
  },
  {
    title: "Management Trainee Engineer",
    company: "Attock Refinery Limited",
    location: "Rawalpindi, Pakistan",
    period: "1994 – 1996",
    current: false,
    description: [
      "Started professional career in oil refinery operations",
      "Gained foundational experience in refinery processes",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <p className={s.label}>My Journey</p>
          <h2 className={s.title}>Work Experience</h2>
          <p className={s.subtitle}>
            Over three decades of progressive experience in chemical
            engineering, process design, and plant operations.
          </p>
          <div className={s.divider}></div>
        </div>

        <div className={s.timeline}>
          <div className={s.timelineLine}></div>
          <div className={s.timelineItems}>
            {experiences.map((exp, index) => (
              <div key={index} className={s.timelineItem}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
