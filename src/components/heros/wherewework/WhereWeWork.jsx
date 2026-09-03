import styles from "./WhereWeWork.module.css";

const industries = [
  {
    icon: "school",
    title: (
      <>
        International &<br />
        Residential Schools
      </>
    ),
    description:
      "Delivering safe, clean, and hygienic learning environments that support student well-being and academic excellence.",
  },

  {
    icon: "building",
    title: (
      <>
        Corporate Offices &<br />
        Business Parks
      </>
    ),
    description:
      "Creating professional, productive, and well-maintained workplaces that reflect your brand and enhance efficiency.",
  },

  {
    icon: "laptop",
    title: (
      <>
        IT & BPO
        <br />
        Companies
      </>
    ),
    description:
      "Supporting high-performance workspaces with spotless environments that drive focus, collaboration, and productivity.",
  },

  {
    icon: "factory",
    title: (
      <>
        Industrial &<br />
        Manufacturing Units
      </>
    ),
    description:
      "Ensuring compliance, safety, and operational continuity with specialised cleaning and maintenance solutions.",
  },

  {
    icon: "hospital",
    title: (
      <>
        Healthcare, Hospitality
        <br />& Retail
      </>
    ),
    description:
      "Upholding the highest standards of hygiene and cleanliness for better experiences and healthier spaces.",
  },
];

function IndustryIcon({ type }) {
  if (type === "school") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M9 28L32 12l23 16" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 27v27h36V27" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 54V39h16v15" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 12V7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 7h9l-4 4h-5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 30h5M37 30h5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M15 55V11h30v44" stroke="currentColor" strokeWidth="2.5" />
        <path d="M9 55h46" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M22 18h5M33 18h5M22 27h5M33 27h5M22 36h5M33 36h5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M27 55V44h7v11" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "laptop") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <rect
          x="14"
          y="12"
          width="36"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M8 46h48l-5 6H13l-5-6Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M22 20h20v14H22z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "factory") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path
          d="M8 54V31l15 9V31l15 9V19h10v35"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M38 19V10h5v9" stroke="currentColor" strokeWidth="2.5" />
        <path d="M48 19V10h5v9" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 54h48" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 46h6M28 46h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none">
      <rect
        x="17"
        y="8"
        width="30"
        height="46"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="25"
        y="15"
        width="14"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M23 32h18M23 39h18M23 46h10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M47 25h5v7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function WhereWeWork() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.background}></div>

      {/* =========================
          HEADER
      ========================== */}

      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span></span>
          <strong>WHERE WE WORK</strong>
          <span></span>
        </div>

        <h2>Industries We Proudly Serve</h2>

        <div className={styles.titleLine}></div>

        <p>
          Our extensive experience spans multiple sectors, each with unique
          requirements and standards. We deliver targeted solutions that meet
          and exceed sector-specific benchmarks.
        </p>
      </div>

      {/* =========================
          INDUSTRY CARDS
      ========================== */}

      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {industries.map((industry, index) => (
            <article className={styles.card} key={index}>
              {/* Icon */}

              <div className={styles.iconCircle}>
                <IndustryIcon type={industry.icon} />
              </div>

              {/* Title */}

              <h3>{industry.title}</h3>

              {/* Gold line */}

              <div className={styles.cardLine}></div>

              {/* Description */}

              <p>{industry.description}</p>

              {/* Arrow */}

              <div className={styles.arrow}>→</div>
            </article>
          ))}
        </div>
      </div>

      {/* =========================
          BOTTOM NAVY STRIP
      ========================== */}
    </section>
  );
}
