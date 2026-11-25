"use client";

import { motion } from "framer-motion";
import { LuAward, LuFileText, LuStar, LuTrendingUp } from "react-icons/lu";
import s from "./Achievements.module.css";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  {
    metric: "6×",
    metricLabel: "cheaper thermal oil",
    title: "PA Switch-Condenser Heat Transfer Oil",
    tag: "NCPL",
    description:
      "Resolved a 17-year-old heat transfer problem with a thermal oil about 6× cheaper. Run length extended beyond the previous 30–40 day shutdown cycle, about 50 kg/hr of main product was recovered, and repeated shutdowns costing about PKR 1.0 million each were avoided (2006–2019 basis).",
  },
  {
    metric: "5 days",
    metricLabel: "vs. the usual 40",
    title: "Crude Vessel Choking",
    tag: "PACHEM",
    description:
      "Devised a method to recover hardened phthalic acid from crude PA vessels without drilling or cutting, restoring normal operation in 5 days against the usual 40. A single shutdown cost about PKR 2 million (2022).",
  },
  {
    metric: "+30%",
    metricLabel: "26 → 34 TPD",
    title: "Capacity Expansion",
    tag: "PA-2 Plant",
    description:
      "Raised the PA-2 plant from 26 to 34 TPD through material and energy balance audits and targeted revamps.",
  },
  {
    metric: "2",
    metricLabel: "major incidents resolved",
    title: "Reliability & Yield",
    tag: "MA / PA Plants",
    description:
      "Cleared reactor back-pressure with demineralised water scrubbing, extending run time and yield; removed MA distillation cold spots; resolved two major MA plant incidents.",
  },
  {
    metric: "~50 kWh",
    metricLabel: "lower compressor load",
    title: "Energy & Utilities",
    tag: "Utility Networks",
    description:
      "Audited air, steam, cooling water and cooling tower networks; introduced cost-efficient air compressors; replaced scaled heat exchangers; evaluated oil heaters and boilers for energy conservation.",
  },
  {
    metric: "EPA",
    metricLabel: "compliance supported",
    title: "Environment & Safety",
    tag: "NCPL",
    description:
      "Reduced wastewater at the NCPL maleic anhydride unit while improving by-product yield; led WWTP baseline studies with SGS Karachi, oversaw primary WWTP installation, supported VOC incinerator commissioning and led a major incident root-cause investigation.",
  },
];

const recognition = [
  {
    icon: <LuAward />,
    year: "2006 – 2007",
    text: "Merit performance certificate with special bonus and double increments in two consecutive years",
  },
  {
    icon: <LuTrendingUp />,
    year: "2008",
    text: "Promoted from Production Manager to Manager – Process & Planning, Nimir",
  },
  {
    icon: <LuStar />,
    year: "2011",
    text: "Praise letter from the Director Technical, Nimir Group",
  },
  {
    icon: <LuFileText />,
    year: "2022",
    text: "Very Satisfactory Performance Report, PACHEM Global",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className={s.section}>
      <div className={s.container}>
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>Proven Results</p>
            <h2 className={s.title}>Key Achievements</h2>
            <p className={s.subtitle}>
              Selected operations and technical results, with measurable gains
              in run length, capacity, energy and compliance.
            </p>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        <div className={s.grid}>
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              className={s.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className={s.metricRow}>
                <span className={s.metric}>{item.metric}</span>
                <span className={s.metricLabel}>{item.metricLabel}</span>
              </div>
              <h3 className={s.cardTitle}>{item.title}</h3>
              <span className={s.tag}>{item.tag}</span>
              <p className={s.cardDesc}>{item.description}</p>
            </motion.article>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <div className={s.recognition}>
            <h3 className={s.recognitionTitle}>
              <LuAward />
              Recognition
            </h3>
            <div className={s.recognitionGrid}>
              {recognition.map((item) => (
                <div key={item.year} className={s.recognitionItem}>
                  <div className={s.recognitionIcon}>{item.icon}</div>
                  <div>
                    <p className={s.recognitionYear}>{item.year}</p>
                    <p className={s.recognitionText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
