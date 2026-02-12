"use client";

import s from "./About.module.css";
import CoolingTower from "./CoolingTower";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

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
                A dedicated{" "}
                <span className={s.blueText}>
                  Professional Chemical Engineer
                </span>{" "}
                with over{" "}
                <span className={s.goldText}>30 years of experience</span>{" "}
                spanning petrochemical, resin, fertilizer, and
                pharmaceutical/API industries.
              </p>
              <p className={s.bioTextMuted}>
                My expertise covers the full spectrum of plant operations — from
                initial process design to commissioning and production
                stabilization. I have successfully managed utilities systems,
                resolved operational bottlenecks, and implemented cost-efficient
                modifications across multiple industrial facilities.
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

        {/* ===== COMPETENCY CARDS (4-column) ===== */}
        <StaggerContainer className={s.compGrid} staggerDelay={0.12}>
          {/* Process Engineering */}
          <StaggerItem className={s.compCard}>
            <div className={`${s.compIconWrap} ${s.iconBlue}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h4 className={s.compCardTitle}>Process Engineering</h4>
            <p className={s.compCardDesc}>
              Expert in PFDs, P&IDs, material & energy balances, equipment
              sizing
            </p>
          </StaggerItem>

          {/* Utilities Management */}
          <StaggerItem className={s.compCard}>
            <div className={`${s.compIconWrap} ${s.iconGold}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className={s.compCardTitle}>Utilities Management</h4>
            <p className={s.compCardDesc}>
              Steam, cooling water, RO, compressed air, boiler systems
            </p>
          </StaggerItem>

          {/* Commissioning */}
          <StaggerItem className={s.compCard}>
            <div className={`${s.compIconWrap} ${s.iconEmerald}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className={s.compCardTitle}>Commissioning</h4>
            <p className={s.compCardDesc}>
              Plant pre-commissioning, startup activities, production
              stabilization
            </p>
          </StaggerItem>

          {/* Safety & Compliance */}
          <StaggerItem className={s.compCard}>
            <div className={`${s.compIconWrap} ${s.iconPurple}`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className={s.compCardTitle}>Safety & Compliance</h4>
            <p className={s.compCardDesc}>
              HAZOP, HAZID, PSSR documentation, EPA compliance expertise
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* ===== INDUSTRIES ===== */}
        <AnimatedSection delay={0.2}>
          <div className={s.industryRow}>
            <p className={s.industryLabel}>Industries Served</p>
            <div className={s.industryTags}>
              {[
                "Petrochemical",
                "Pharmaceutical / API",
                "Fertilizer",
                "Resin Manufacturing",
                "Oil Refinery",
                "Chemical Processing",
              ].map((industry, index) => (
                <span key={index} className={s.industryTag}>
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
