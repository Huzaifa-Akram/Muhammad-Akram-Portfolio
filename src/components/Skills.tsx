"use client";

import { motion } from "framer-motion";
import s from "./Skills.module.css";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

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
            { label: "Projects", value: "50+" },
            { label: "Companies", value: "8" },
            { label: "Industries", value: "6+" },
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
