import styles from "./OurPrinciples.module.css";

const values = [
  {
    number: "01",
    title: "INTEGRITY",
    icon: "shield",
    description:
      "We uphold the highest ethical standards in every aspect of our operations—ensuring honesty, transparency, and accountability. Our word is our bond.",
  },
  {
    number: "02",
    title: "QUALITY",
    icon: "medal",
    description:
      "We are committed to excellence through continuous improvement and meticulous attention to detail. Every task receives the same level of care and precision.",
  },
  {
    number: "03",
    title: "RELIABILITY",
    icon: "handshake",
    description:
      "Our clients trust us for consistent, dependable service delivery, day in and day out. We understand your operations depend on our performance.",
  },
  {
    number: "04",
    title: "TEAMWORK",
    icon: "team",
    description:
      "We believe collaboration drives success. Our teams work cohesively, sharing knowledge to deliver seamless service across all touchpoints.",
  },
  {
    number: "05",
    title: "CUSTOMER FOCUS",
    icon: "person",
    description:
      "Our clients’ satisfaction is at the centre of everything we do. We listen carefully, respond promptly, and continuously adapt to evolving needs.",
  },
  {
    number: "06",
    title: "INNOVATION",
    icon: "bulb",
    description:
      "We continuously adapt to new technologies and methods for better outcomes—ensuring clients benefit from the most effective and efficient solutions available.",
  },
];

/* ---------------------------------------------------------
   TOP CARD ICONS
--------------------------------------------------------- */

function TopIcon({ type }) {
  if (type === "shield") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path
          d="M32 6L51 13V29C51 41 43 51 32 57C21 51 13 41 13 29V13L32 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M22 31L29 38L43 23" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "medal") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <circle
          cx="32"
          cy="27"
          r="16"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="32" cy="27" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M32 21L34 25L39 25L35 29L36 34L32 31L28 34L29 29L25 25L30 25L32 21Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 40L17 57L32 48L47 57L42 40"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path
          d="M8 25L17 16L27 20L34 17L45 21L56 31"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M9 25L19 38L26 34L34 43L41 37L47 40L55 31"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M26 34L32 28L39 34" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="48" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M17 51C17 40 23 34 32 34C41 34 47 40 47 51"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M4 49C4 41 9 36 16 36" stroke="currentColor" strokeWidth="2" />
        <path
          d="M60 49C60 41 55 36 48 36"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="9" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M15 55C15 43 22 36 32 36C42 36 49 43 49 55"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none">
      <path
        d="M32 8C25 8 20 14 20 21C20 26 23 30 26 33C28 35 28 38 28 41H36C36 38 36 35 38 33C41 30 44 26 44 21C44 14 39 8 32 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M27 46H37M29 52H35" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 2V5M12 12L15 15M52 12L49 15M8 30H12M56 30H52"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function OurPrinciples() {
  return (
    <section className={styles.section}>
      {/* =========================
          HEADER
      ========================== */}

      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span></span>

          <strong>OUR PRINCIPLES</strong>

          <span></span>
        </div>

        <h2>Core Values That Guide Us</h2>

        <div className={styles.titleLine}></div>

        <p>
          These six principles guide every decision we make and every service we
          deliver—representing our commitment to excellence and building lasting
          partnerships.
        </p>
      </div>

      {/* =========================
          VALUES
      ========================== */}

      <div className={styles.valuesGrid}>
        {values.map((value) => (
          <article className={styles.valueCard} key={value.number}>
            {/* Main icon */}

            <div className={styles.mainIcon}>
              <TopIcon type={value.icon} />
            </div>

            {/* Number */}

            <div className={styles.number}>{value.number}</div>

            {/* Title */}

            <h3>{value.title}</h3>

            {/* Gold divider */}

            <div className={styles.cardLine}></div>

            {/* Description */}

            <p>{value.description}</p>
          </article>
        ))}
      </div>

      {/* =========================
          BOTTOM STRIP
      ========================== */}

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
