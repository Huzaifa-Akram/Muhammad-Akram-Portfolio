"use client";

import { motion } from "framer-motion";
import s from "./Skills.module.css";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const technicalSkills = [
  { name: "Plant Operations & Troubleshooting", level: 95 },
  { name: "Process Engineering (FEED, PFDs, P&IDs)", level: 95 },
  { name: "Utilities, Steam & Hot-Oil Systems", level: 95 },
  { name: "Process Safety (HAZOP, HAZID, SIL, ESD)", level: 92 },
  { name: "Commissioning & Master Start-up", level: 92 },
  { name: "Instrumentation, DCS & Loop Tuning", level: 90 },
];

const softwareSkills = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Visio",
  "PDMS (Plant Design)",
  "Primavera P6",
];

const dcsPlatforms = ["Yokogawa µXL", "Yokogawa Centum 3000", "SUPCON DCS"];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

const expertiseAreas = [
  {
    title: "Plant Operations",
    items: [
      "Crude, atmospheric, vacuum, batch & steam distillation",
      "Partial-oxidation reactors (3oo3, SIL-3, 42 ESD interlocks)",
      "Off-gas, absorption, chlorine & HCl scrubbers",
      "Direct-fired hot-oil heaters (gas, diesel, coal)",
    ],
  },
  {
    title: "Utilities Systems",
    items: [
      "Steam boilers & super heaters",
      "Chillers & cooling towers",
      "Air & nitrogen generation units",
      "RO water treatment",
    ],
  },
  {
    title: "Process & Projects",
    items: [
      "Capacity expansion, revamps & feasibility",
      "Technology, licensor & vendor selection",
      "FEED, basic & detailed engineering",
      "PFDs, P&IDs, M&E balances, datasheets, RFQs",
    ],
  },
  {
    title: "Safety & Compliance",
    items: [
      "HAZOP, HAZID & SIL studies",
      "PSSR & dispersion studies",
      "ESD, BMC, Cause & Effect",
      "EPA compliance & incident investigation",
    ],
  },
  {
    title: "Instrumentation & Control",
    items: [
      "DCS implementation & migration",
      "Interlock & shutdown logic review",
      "PID & cascade loop tuning",
      "Instrument datasheets & procurement",
    ],
  },
  {
    title: "Energy & Environment",
    items: [
      "Energy audits of oil heaters & boilers",
      "ETP / WWTP baseline & design studies",
      "VOC catalytic incineration",
      "Wastewater reduction",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={s.section}>
      <div className={s.container}>
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>What I Bring</p>
            <h2 className={s.title}>Skills &amp; Expertise</h2>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        <div className={s.grid}>
          {/* Technical Skills */}
          <AnimatedSection direction="left" delay={0.1}>
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
                      <motion.div
                        className={s.skillBarFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + index * 0.1,
                          ease: "easeOut",
                        }}
                      ></motion.div>
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
                    <motion.span
                      key={index}
                      className={s.softwareTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {software}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={s.softwareSection}>
                <h3 className={s.subTitle}>
                  <span className={`${s.subIcon} ${s.subIconCyan}`}>🎛️</span>
                  DCS Platforms
                </h3>
                <div className={s.softwareTags}>
                  {dcsPlatforms.map((platform, index) => (
                    <motion.span
                      key={platform}
                      className={s.softwareTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {platform}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={s.softwareSection}>
                <h3 className={s.subTitle}>
                  <span className={`${s.subIcon} ${s.subIconPurple}`}>🌐</span>
                  Languages
                </h3>
                <div className={s.softwareTags}>
                  {languages.map((language, index) => (
                    <motion.span
                      key={language.name}
                      className={s.softwareTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {language.name}
                      <span className={s.langLevel}>{language.level}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Expertise Areas */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <h3 className={s.subTitle}>
                <span className={`${s.subIcon} ${s.subIconGold}`}>⭐</span>
                Areas of Expertise
              </h3>
              <StaggerContainer className={s.expertiseGrid} staggerDelay={0.1}>
                {expertiseAreas.map((area, index) => (
                  <StaggerItem key={index} className={s.expertiseCard}>
                    <h4 className={s.expertiseCardTitle}>{area.title}</h4>
                    <ul className={s.expertiseList}>
                      {area.items.map((item, i) => (
                        <li key={i} className={s.expertiseItem}>
                          <span className={s.expertiseDot}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <StaggerContainer className={s.statsGrid} staggerDelay={0.12}>
          {[
            { label: "Years Experience", value: "30+" },
            { label: "SOPs Developed", value: "100+" },
            { label: "Safety Interlocks", value: "42" },
            { label: "Industries Served", value: "6+" },
          ].map((stat, index) => (
            <StaggerItem key={index} className={s.statCard}>
              <p className={s.statValue}>{stat.value}</p>
              <p className={s.statLabel}>{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
