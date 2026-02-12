"use client";

import s from "./Skills.module.css";

const technicalSkills = [
  { name: "Process Engineering (PFDs, P&IDs)", level: 95 },
  { name: "Utilities Management", level: 95 },
  { name: "Plant Commissioning & Startup", level: 90 },
  { name: "Material & Energy Balances", level: 92 },
  { name: "HAZOP/HAZID/PSSR Documentation", level: 88 },
  { name: "Steam Systems & Boilers", level: 95 },
];

const softwareSkills = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Visio",
  "PDMS (Plant Design)",
  "Primavera P-6",
];

const expertiseAreas = [
  {
    title: "Process Design",
    items: [
      "Process Flow Diagrams",
      "P&IDs",
      "Heat & Mass Balance",
      "Equipment Sizing",
    ],
  },
  {
    title: "Utilities Systems",
    items: [
      "Steam Generation",
      "Cooling Water",
      "Compressed Air",
      "RO Water Treatment",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Pre-commissioning",
      "Commissioning",
      "Vendor Coordination",
      "Cost Optimization",
    ],
  },
  {
    title: "Safety & Compliance",
    items: [
      "HAZOP Studies",
      "HAZID Analysis",
      "PSSR Documentation",
      "EPA Compliance",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <p className={s.label}>What I Bring</p>
          <h2 className={s.title}>Skills & Expertise</h2>
          <div className={s.divider}></div>
        </div>

        <div className={s.grid}>
          {/* Technical Skills */}
          <div>
            <h3 className={s.subTitle}>
              <span className={`${s.subIcon} ${s.subIconBlue}`}>🔧</span>
              Technical Proficiency
            </h3>
            <div className={s.skillList}>
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className={s.skillRow}>
                    <span className={s.skillName}>{skill.name}</span>
                    <span className={s.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={s.skillBarBg}>
                    <div
                      className={s.skillBarFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.softwareSection}>
              <h3 className={s.subTitle}>
                <span className={`${s.subIcon} ${s.subIconGreen}`}>💻</span>
                Software
              </h3>
              <div className={s.softwareTags}>
                {softwareSkills.map((software, index) => (
                  <span key={index} className={s.softwareTag}>
                    {software}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className={s.subTitle}>
              <span className={`${s.subIcon} ${s.subIconGold}`}>⭐</span>
              Areas of Expertise
            </h3>
            <div className={s.expertiseGrid}>
              {expertiseAreas.map((area, index) => (
                <div key={index} className={s.expertiseCard}>
                  <h4 className={s.expertiseCardTitle}>{area.title}</h4>
                  <ul className={s.expertiseList}>
                    {area.items.map((item, i) => (
                      <li key={i} className={s.expertiseItem}>
                        <span className={s.expertiseDot}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={s.statsGrid}>
          {[
            { label: "Years Experience", value: "30+" },
            { label: "Projects", value: "50+" },
            { label: "Companies", value: "8" },
            { label: "Industries", value: "6+" },
          ].map((stat, index) => (
            <div key={index} className={s.statCard}>
              <p className={s.statValue}>{stat.value}</p>
              <p className={s.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
