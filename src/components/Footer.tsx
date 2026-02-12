import s from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.logo}>
            <div className={s.logoIcon}>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <div>
              <p className={s.logoName}>Engr. M. Akram Ansari</p>
              <p className={s.logoSub}>Chemical Engineer</p>
            </div>
          </div>

          <div className={s.links}>
            {[
              "Home",
              "About",
              "Experience",
              "Education",
              "Skills",
              "Contact",
            ].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={s.link}>
                {link}
              </a>
            ))}
          </div>

          <div className={s.pecBadge}>
            <span>✓</span>
            <span>PEC: CHEM/02752</span>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copyright}>
            © {currentYear} Engr. Muhammad Akram Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
