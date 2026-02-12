"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import s from "./Contact.module.css";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdullah1772013@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className={s.section}>
      <div className={s.container}>
        <AnimatedSection>
          <div className={s.header}>
            <p className={s.label}>Get in Touch</p>
            <h2 className={s.title}>Contact Me</h2>
            <div className={s.divider}></div>
          </div>
        </AnimatedSection>

        <div className={s.grid}>
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.1}>
            <div>
              <h3 className={s.infoTitle}>Let&apos;s Connect</h3>
              <p className={s.infoDesc}>
                Available for consulting and advisory roles in chemical
                engineering, process design, and utilities management.
              </p>

              <div className={s.infoCards}>
                <div className={`${s.infoCard} ${s.infoCardBlue}`}>
                  <div className={`${s.infoIcon} ${s.iconBlue}`}>
                    <HiOutlineMail size={24} />
                  </div>
                  <div>
                    <p className={s.infoLabel}>Email</p>
                    <a
                      href="mailto:abdullah1772013@gmail.com"
                      className={s.infoLink}
                    >
                      abdullah1772013@gmail.com
                    </a>
                  </div>
                </div>

                <div className={`${s.infoCard} ${s.infoCardGreen}`}>
                  <div className={`${s.infoIcon} ${s.iconGreen}`}>
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className={s.infoLabel}>Phone</p>
                    <a
                      href="tel:+923267796944"
                      className={`${s.infoLink} ${s.infoLinkGreen}`}
                    >
                      +92 326 7796944
                    </a>
                  </div>
                </div>

                <div className={`${s.infoCard} ${s.infoCardGold}`}>
                  <div className={`${s.infoIcon} ${s.iconGold}`}>
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className={s.infoLabel}>Location</p>
                    <p className={s.infoText}>Lahore, Pakistan</p>
                  </div>
                </div>

                <div className={`${s.infoCard} ${s.infoCardPurple}`}>
                  <div className={`${s.infoIcon} ${s.iconPurple}`}>
                    <FaLinkedinIn size={22} />
                  </div>
                  <div>
                    <p className={s.infoLabel}>LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/muhammad-akram-ansari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${s.infoLink} ${s.infoLinkPurple}`}
                    >
                      linkedin.com/in/muhammad-akram-ansari
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className={s.formCard}>
              <h3 className={s.formTitle}>Send a Message</h3>
              <form onSubmit={handleSubmit} className={s.form}>
                <div>
                  <label className={s.formLabel}>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={s.formInput}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className={s.formLabel}>Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={s.formInput}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className={s.formLabel}>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className={`${s.formInput} ${s.formTextarea}`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={s.formBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
