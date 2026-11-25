"use client";

import {
  LuCog,
  LuCpu,
  LuFactory,
  LuFlaskConical,
  LuShieldCheck,
  LuZap,
} from "react-icons/lu";
import s from "./About.module.css";
import CoolingTower from "./CoolingTower";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const competencies = [
  {
    icon: <LuFactory />,
    color: s.iconBlue,
    title: "Plant Operations",
    desc: "Plug flow reactors, atmospheric, vacuum, batch and steam distillation, off-gas scrubbers and hot-oil systems",
  },
  {
    icon: <LuFlaskConical />,
    color: s.iconGold,
    title: "Process Engineering",
    desc: "FEED, PFDs, P&IDs, M&E balances, datasheets, RFQs, capacity expansion and revamps",
  },
  {
    icon: <LuShieldCheck />,
    color: s.iconPurple,
    title: "Process Safety",
    desc: "HAZOP, HAZID, SIL, PSSR, dispersion studies, ESD, BMC and Cause & Effect",
  },
  {
    icon: <LuCpu />,
    color: s.iconCyan,
    title: "Instrumentation & DCS",
    desc: "Yokogawa µXL, Centum 3000 and SUPCON, interlock logic review, PID and cascade loop tuning",
  },
  {
    icon: <LuZap />,
    color: s.iconRose,
    title: "Utilities & Energy",
    desc: "Boilers, super heaters, hot-oil heaters, chillers, cooling towers, air and nitrogen units, energy audits",
  },
  {
    icon: <LuCog />,
    color: s.iconEmerald,
    title: "Commissioning",
    desc: "Erection, loop checks, master start-up, production stabilization and vendor coordination",
  },
];

const industries = [
  "Petrochemical",
  "Phthalic & Maleic Anhydride",
  "Resins & Plasticizers",
  "Fertilizer (SOP)",
  "Pharmaceutical / API",
  "Nutraceuticals",
  "Oil Refinery",
  "Chemical Processing",
];

export default function About() {
  return (
    <section id="about" className={s.section}>
      <div className={s.container}>
        {/* Section Header */}
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>Get To Know Me</p>
            <h2 className={s.title}>About Me</h2>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        {/* ===== TOP ROW: Bio + Plant Visual ===== */}
        <div className={s.topRow}>
          {/* Left — Bio */}
          <AnimatedSection direction="left" delay={0.1}>
            <div>
              <h3 className={s.bioTitle}>
                <span className={s.bioTitleLine}></span>
                Professional Summary
              </h3>
              <p className={s.bioText}>
                A{" "}
                <span className={s.blueText}>
                  Professional Chemical Engineer
                </span>{" "}
                with{" "}
                <span className={s.goldText}>
                  30+ years of operations experience
                </span>{" "}
                across petrochemicals, resins, fertilizers and pharma/API,
                including{" "}
                <span className={s.goldText}>
                  20+ years in process management
                </span>{" "}
                of two major phthalic anhydride plants (Lurgi technology).
              </p>
              <p className={s.bioTextMuted}>
                Highly experienced in operating plug flow reactors and
                atmospheric, vacuum and batch distillation, with complex steam
                networks and hot-oil systems protected by SIL-rated Safety
                Instrumented Systems: 3oo3 voting logic, 42 process safety
                interlocks and Emergency Shutdown (ESD) systems. Also
                experienced in SOP fertilizer operation, crude oil refining
                (ARL), asphalt vacuum columns and blending, high-temperature
                kiln operation, and batch reactors for plasticizers and pharma
                API salts.
              </p>
              <p className={s.bioTextMuted}>
                A career built on the front end of capital projects
                (feasibility, technology comparison, vendor selection and basic
                engineering) and on the process–instrumentation interface:
                datasheets and procurement, DCS implementation and migration
                (Yokogawa Centum 3000, SUPCON), interlock and ESD logic review,
                and hands-on loop tuning. Has evaluated technologies and
                suppliers from Germany, Italy, the UK and China, taking projects
                from concept through PFD/P&amp;ID, RFQs and HAZOP/SIL to
                erection, commissioning and master start-up.
              </p>

              {/* PEC Badge */}
              <div className={s.pecInline}>
                <div className={s.pecShield}>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.352.166-2.001zm4.101 3.708a1 1 0 011.414 0L9 10.026l2.32-2.319a1 1 0 111.414 1.414l-3.026 3.026a1 1 0 01-1.414 0L6.267 10.12a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={s.pecInfo}>
                  <span className={s.pecLabel}>
                    Pakistan Engineering Council
                  </span>
                  <span className={s.pecNum}>
                    CHEM/02752 — Valid till Dec 2026
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Animated Plant Visual */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className={s.visualSide}>
              <div className={s.plantVisual}>
                <CoolingTower />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ===== COMPETENCY CARDS ===== */}
        <StaggerContainer className={s.compGrid} staggerDelay={0.12}>
          {competencies.map((item) => (
            <StaggerItem key={item.title} className={s.compCard}>
              <div className={`${s.compIconWrap} ${item.color}`}>
                {item.icon}
              </div>
              <h4 className={s.compCardTitle}>{item.title}</h4>
              <p className={s.compCardDesc}>{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ===== INDUSTRIES ===== */}
        <AnimatedSection delay={0.2}>
          <div className={s.industryRow}>
            <p className={s.industryLabel}>Industries Served</p>
            <div className={s.industryTags}>
              {industries.map((industry) => (
                <span key={industry} className={s.industryTag}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
