"use client";

import {
  LuAtom,
  LuCpu,
  LuDroplets,
  LuFlame,
  LuFlaskConical,
  LuSearch,
  LuSlidersHorizontal,
  LuTestTube,
  LuThermometer,
} from "react-icons/lu";
import s from "./Projects.module.css";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const controlSystems = [
  {
    icon: <LuCpu />,
    org: "PACHEM Global",
    context: "Plant relocated from Singapore",
    description:
      "Principal coordinator between Process, E&I, Mechanical and DCS teams. Led refurbishment of the plant's instruments, procured new ones and reviewed datasheets; worked with the Chinese team on the SUPCON DCS, reviewing graphics, alarms, interlocks and shutdown logic; coordinated loop checks and personally tuned all control loops (PID, cascade).",
    tags: ["SUPCON DCS", "PID / Cascade Tuning", "Interlocks & Shutdown Logic"],
  },
  {
    icon: <LuFlame />,
    org: "Descon Engineering",
    context: "PARCO 65 TPH boiler",
    description:
      "P&ID verification, control philosophy, 3oo3 control logic, ESD, Cause & Effect, Burner Management Control, instrument and analyzer datasheets and client comment closure.",
    tags: ["3oo3 Logic", "ESD & BMC", "Cause & Effect"],
  },
  {
    icon: <LuSlidersHorizontal />,
    org: "NIMIR Chemicals",
    context: "DCS migration",
    description:
      "Field instrument audits; Yokogawa µXL to Centum 3000 migration with logic and interlock review alongside E&I; follow-up of the instrument preventive maintenance schedule with the E&I crew.",
    tags: ["Yokogawa Centum 3000", "Instrument Audits", "Preventive Maintenance"],
  },
];

const projects = [
  {
    icon: <LuFlaskConical />,
    title: "MA / PA Technology",
    badge: "2013 – 2018",
    description:
      "Led technology and revamp assessments with Techno-Bell (Slovenia) and Rollechim (Italy), including raw-material blend optimisation and benzoic acid recovery from PA-MA residue.",
  },
  {
    icon: <LuThermometer />,
    title: "Thermal Systems",
    badge: "2017 · 2020",
    description:
      "Specified and justified a thermal oil heater revamp from 2.7 to 4.5 MW with Intherma (2017), and twice more in 2020.",
  },
  {
    icon: <LuAtom />,
    title: "Catalyst & Reactors",
    badge: "100–200 TPD",
    description:
      "BASF and Clariant catalyst systems on a 100–200 TPD phthalic anhydride plant, with 40+ HAZOP-approved interlocks on the partial-oxidation reactors.",
  },
  {
    icon: <LuTestTube />,
    title: "Pilot Plants & Scale-up",
    badge: "Plasticizers · API",
    description:
      "Designed and commissioned a pilot plant in 2009 for plasticizer test runs and development, leading to successful commercialization of new products; proposed 10+ pilot plants for API baseline testing.",
  },
  {
    icon: <LuDroplets />,
    title: "Water & Environment",
    badge: "WWTP · RO · Biogas",
    description:
      "Advised piping in good raw water instead of a large, costly RO plant for local water of extremely high conductivity; assessed biogas turbine power from waste (2009–2010); finalised WWTP designs with Descon and Pollution Engineering (Malaysia) for 170 and 10 m³/hr streams.",
  },
  {
    icon: <LuSearch />,
    title: "Feasibility Studies",
    badge: "2007 – 2025",
    description:
      "Gelatin / DCP unit from bovine bones and local phosphate rock (2023–2025), SOP plant financial model, DCP / gelatin project (2007–2010), phthalocyanine, fumaric acid and naphthalene plant studies; basic and detailed engineering of DOP and PA plants.",
  },
];

const partners = [
  "Lurgi",
  "BASF",
  "Clariant",
  "Yokogawa",
  "SUPCON",
  "Techno-Bell",
  "Rollechim",
  "Intherma",
  "SGS",
  "Pollution Engineering",
];

export default function Projects() {
  return (
    <section id="projects" className={s.section}>
      <div className={s.container}>
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>Technical Portfolio</p>
            <h2 className={s.title}>Projects &amp; Systems</h2>
            <p className={s.subtitle}>
              Instrumentation, control and safety systems work, plus
              feasibility studies and technology selection from concept to
              start-up.
            </p>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        {/* ===== Instrumentation, Control & Safety ===== */}
        <AnimatedSection>
          <h3 className={s.groupTitle}>
            <span className={s.groupLine}></span>
            Instrumentation, Control &amp; Safety Systems
          </h3>
        </AnimatedSection>

        <StaggerContainer className={s.controlGrid} staggerDelay={0.12}>
          {controlSystems.map((item) => (
            <StaggerItem key={item.org} className={s.controlCard}>
              <div className={s.controlHead}>
                <div className={s.iconWrap}>{item.icon}</div>
                <div>
                  <h4 className={s.controlOrg}>{item.org}</h4>
                  <p className={s.controlContext}>{item.context}</p>
                </div>
              </div>
              <p className={s.cardDesc}>{item.description}</p>
              <div className={s.tagRow}>
                {item.tags.map((tag) => (
                  <span key={tag} className={s.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ===== Feasibility, Technology Selection & Projects ===== */}
        <AnimatedSection>
          <h3 className={`${s.groupTitle} ${s.groupTitleSpaced}`}>
            <span className={s.groupLine}></span>
            Feasibility, Technology Selection &amp; Projects
          </h3>
        </AnimatedSection>

        <StaggerContainer className={s.projectGrid} staggerDelay={0.1}>
          {projects.map((item) => (
            <StaggerItem key={item.title} className={s.projectCard}>
              <div className={s.projectHead}>
                <div className={`${s.iconWrap} ${s.iconGold}`}>
                  {item.icon}
                </div>
                <span className={s.badge}>{item.badge}</span>
              </div>
              <h4 className={s.projectTitle}>{item.title}</h4>
              <p className={s.cardDesc}>{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ===== Technologies & Partners ===== */}
        <AnimatedSection delay={0.1}>
          <div className={s.partners}>
            <p className={s.partnersLabel}>Technologies &amp; Partners</p>
            <div className={s.partnerTags}>
              {partners.map((partner) => (
                <span key={partner} className={s.partnerTag}>
                  {partner}
                </span>
              ))}
            </div>
            <p className={s.partnersNote}>
              Worked with experts and suppliers from Germany, Italy, the UK,
              China, Belarus, Slovenia and Malaysia.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
