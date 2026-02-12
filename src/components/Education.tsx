"use client";

import s from "./Education.module.css";

const education = [
  {
    degree: "B.Sc. Chemical Engineering",
    institution: "University of Engineering & Technology (UET)",
    location: "Lahore, Pakistan",
    period: "1986 – 1992",
    grade: "First Division",
    details: "Faculty of Chemical, Mineral and Metallurgical Engineering",
  },
  {
    degree: "Higher Secondary (HSSC)",
    institution: "Federal Board of Intermediate and Secondary Education",
    location: "Islamabad, Pakistan",
    period: "1986",
    grade: "A Grade",
    details: "Pre-Engineering Group",
  },
  {
    degree: "Secondary School (SSC)",
    institution: "Board of Intermediate and Secondary Education",
    location: "Rawalpindi, Pakistan",
    period: "1982",
    grade: "Science Group",
    details: "Govt. Pakistan Model School, Lalamusa",
  },
];

export default function Education() {
  return (
    <section id="education" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <p className={s.label}>Academic Background</p>
          <h2 className={s.title}>Education</h2>
          <div className={s.divider}></div>
        </div>

        <div className={s.grid}>
          {education.map((edu, index) => (
            <div key={index} className={s.card}>
              <span className={s.periodBadge}>{edu.period}</span>
              <h3 className={s.degree}>{edu.degree}</h3>
              <p className={s.institution}>{edu.institution}</p>
              <p className={s.location}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {edu.location}
              </p>
              <div className={s.gradeRow}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={s.gradeText}>{edu.grade}</span>
              </div>
              <p className={s.details}>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
