import React from "react";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    number: "01",
    title: "Trained Professionals",
    description:
      "Our team is carefully selected and thoroughly trained to deliver service with professionalism, reliability, and pride.",
    icon: "person",
  },
  {
    number: "02",
    title: "Modern Equipment",
    description:
      "We use advanced tools, eco-friendly products, and innovative techniques to ensure superior and consistent results.",
    icon: "equipment",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Our stringent quality control processes and regular inspections ensure we maintain the highest standards across every service.",
    icon: "shield",
  },
  {
    number: "04",
    title: "Responsive Support",
    description:
      "We are always just a call away—providing quick response, prompt resolution, and dedicated support when you need it most.",
    icon: "support",
  },
];

function FeatureIcon({ type }) {
  if (type === "person") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="31" cy="19" r="8" />
        <path d="M17 43c0-8 6-13 14-13s14 5 14 13" />
        <path d="M42 43h8" />
        <path d="M46 39v8" />
        <path d="M47 35l2.5 4.5 5 .7-3.6 3.5.8 5-4.7-2.4-4.7 2.4.8-5-3.6-3.5 5-.7z" />
      </svg>
    );
  }

  if (type === "equipment") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="22" y="14" width="18" height="28" rx="2" />
        <path d="M26 14V9h10v5" />
        <path d="M27 21h8" />
        <path d="M27 27h8" />
        <path d="M27 33h8" />
        <circle cx="19" cy="49" r="5" />
        <circle cx="43" cy="49" r="5" />
        <path d="M22 42h18" />
        <path d="M14 42h-4" />
        <path d="M50 42h4" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8l20 7v15c0 12-8 21-20 26C20 51 12 42 12 30V15z" />
        <path d="M24 31l5 5 11-12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 35v-7c0-9 6-15 14-15s14 6 14 15v7" />
      <rect x="11" y="31" width="9" height="13" rx="3" />
      <rect x="44" y="31" width="9" height="13" rx="3" />
      <path d="M20 44c2 5 6 7 12 7h5" />
      <circle cx="40" cy="51" r="2" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* Decorative background */}
      <div className={styles.goldCurve} />
      <div className={styles.goldCurveSmall} />

      <div className={styles.dots}>
        {Array.from({ length: 32 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className={styles.container}>
        {/* =================================================
            LEFT CONTENT
        ================================================= */}
        <div className={styles.leftContent}>
          <div className={styles.eyebrow}>
            <span />
            THE DIFFERENCE
          </div>

          <h2 className={styles.heading}>
            Why Choose <span>UK Facility</span>
            <br />
            <span>Management</span>?
          </h2>

          <div className={styles.headingLine} />

          <p className={styles.intro}>
            We go beyond conventional facility management by delivering
            reliable, efficient, and tailored solutions that enhance your
            workplace, support your people, and protect your investment.
          </p>

          <div className={styles.features}>
            {features.map((feature) => (
              <div className={styles.feature} key={feature.number}>
                <div className={styles.iconCircle}>
                  <FeatureIcon type={feature.icon} />
                </div>

                <div className={styles.featureLine} />

                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================= */}
        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/whyChooseUs.png"
              alt="UK Facility Management workplace"
            />

            {/* Blue information card */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M32 7l20 7v15c0 13-8 22-20 28C20 51 12 42 12 29V14z" />
                  <path d="M24 31l5 5 11-13" />
                  <path d="M32 22v5" />
                  <circle cx="32" cy="40" r="1.5" />
                </svg>
              </div>

              <div className={styles.infoDivider} />

              <p>
                Our commitment to people, process, and performance makes us the
                trusted partner for businesses that value{" "}
                <strong>quality, consistency, and care.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
