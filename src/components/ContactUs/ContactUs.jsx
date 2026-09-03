"use client";

import { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }

      setStatus({
        type: "success",
        message:
          "Thank you for contacting us. Your enquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className={styles.leftContent}>
          <div className={styles.eyebrow}>
            <span></span>
            CONTACT US
            <span></span>
          </div>

          <h2>
            Let's Create
            <br />
            <strong>Better Workplaces.</strong>
          </h2>

          <div className={styles.titleLine}></div>

          <p className={styles.intro}>
            Whether you are looking for reliable facility management services or
            would like to discuss your specific requirements, our team is ready
            to help.
          </p>

          {/* Address */}

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 57C32 57 50 40 50 25C50 15.1 42 7 32 7C22 7 14 15.1 14 25C14 40 32 57 32 57Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <circle
                  cx="32"
                  cy="25"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div>
              <h3>Our Office</h3>

              <p>
                UK Facility Management Services
                <br />
                Facility Office Address
                <br />
                City, State, PIN Code
                <br />
                India
              </p>
            </div>
          </div>

          {/* Phone */}

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M18 8L28 6L34 19L27 24C30 31 35 36 42 39L47 32L58 38L56 48C55 54 49 57 44 55C25 48 13 36 8 17C7 12 11 9 18 8Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div>
              <h3>Call Us</h3>

              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Email */}

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <svg viewBox="0 0 64 64" fill="none">
                <rect
                  x="7"
                  y="14"
                  width="50"
                  height="36"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <path
                  d="M9 17L32 35L55 17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div>
              <h3>Email Us</h3>

              <p>info@example.com</p>
            </div>
          </div>

          {/* Bottom message */}

          <div className={styles.trustBox}>
            <div className={styles.trustIcon}>✓</div>

            <div>
              <strong>We value your enquiry</strong>

              <p>Our team will get back to you as soon as possible.</p>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE - FORM
        ================================================= */}

        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h3>Reach Out to Us</h3>

            <p>
              Tell us about your requirements and our team will get in touch
              with you.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}

            <div className={styles.formGroup}>
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}

            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Company */}

            <div className={styles.formGroup}>
              <label htmlFor="company">Company / Organisation</label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Message */}

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="message">
                How Can We Help? <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            {/* Status */}

            {status.message && (
              <div
                className={`${styles.status} ${
                  status.type === "success" ? styles.success : styles.error
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}

            <div className={styles.submitWrapper}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}

                {!isSubmitting && <span className={styles.arrow}>→</span>}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom strip */}

      <div className={styles.bottomStrip}>
        <div className={styles.bottomBadge}>
          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M32 6L51 13V29C51 41 43 51 32 57C21 51 13 41 13 29V13L32 6Z"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M22 31L29 38L43 23"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
