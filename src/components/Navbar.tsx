"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${s.header} ${isScrolled ? s.headerScrolled : ""}`}>
      <div className={s.inner}>
        <nav className={s.nav}>
          <Link href="#home" className={s.logo}>
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
            <div className={s.logoText}>
              <p className={s.logoName}>Engr. M. Akram Ansari</p>
              <p className={s.logoSub}>Chemical Engineer</p>
            </div>
          </Link>

          <div className={s.desktopNav}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={s.navLink}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className={s.ctaWrap}>
            <Link href="#contact" className={s.ctaBtn}>
              Get In Touch
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={s.menuBtn}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className={s.mobileMenu}>
            <div className={s.mobileMenuInner}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={s.mobileLink}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={s.mobileCta}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
