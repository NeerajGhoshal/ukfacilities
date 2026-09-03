import styles from "./WhatWeDo.module.css";

const services = [
  {
    icon: "✦",
    title: (
      <>
        Housekeeping
        <br />& Maintenance
      </>
    ),
    description:
      "Professional housekeeping and integrated maintenance services that enhance the cleanliness, safety, and operational performance of your facility. With trained personnel, best practices, and stringent quality standards, we deliver reliable solutions that protect your workspace.",
    highlight: (
      <>
        Consistent Quality,
        <br />
        Reliable Care.
      </>
    ),
  },

  {
    icon: "✧",
    title: (
      <>
        Deep Cleaning
        <br />& Sanitation
      </>
    ),
    description:
      "Restore your facility to the highest standards with our deep cleaning and sanitation services. Using advanced equipment, expert techniques, and eco-friendly products, we eliminate dirt, bacteria, viruses, and allergens—creating cleaner, healthier, and safer environments for employees.",
    highlight: (
      <>
        Advanced Methods,
        <br />
        Healthier Spaces.
      </>
    ),
  },

  {
    icon: "●",
    title: (
      <>
        Office Support
        <br />
        Staffing
      </>
    ),
    description:
      "Our office support staffing solutions strengthen operational efficiency through the deployment of qualified, dependable, and well-trained professionals. We focus on reliability, workplace etiquette, and service excellence to ensure a productive, organised, and professionally managed work environment.",
    highlight: (
      <>
        Skilled People,
        <br />
        Seamless Operations.
      </>
    ),
  },

  {
    icon: "♨",
    title: (
      <>
        Pantry & Hospitality
        <br />
        Management
      </>
    ),
    description:
      "Efficient management of pantry and hospitality services to ensure comfort, courtesy, and seamless service delivery for employees and guests. We focus on quality, hygiene, and attention to detail—enhancing satisfaction and creating a positive workplace experience.",
    highlight: (
      <>
        Quality Service.
        <br />
        Happy People.
      </>
    ),
  },

  {
    icon: "♧",
    title: (
      <>
        Specialised
        <br />
        Cleaning Solutions
      </>
    ),
    description:
      "Our specialised cleaning solutions are designed to meet the unique requirements of modern commercial, industrial, healthcare, and institutional facilities. Using advanced equipment, standardised protocols, and eco-friendly products, we deliver precision cleaning for every critical space.",
    highlight: (
      <>
        Cleaner Spaces.
        <br />
        Safer Environments.
      </>
    ),
  },

  {
    icon: "⚙",
    title: (
      <>
        Customised
        <br />
        Facility Solutions
      </>
    ),
    description:
      "We design tailor-made facility management programmes that align with your operational goals, facility structure, and budget. Our flexible solutions ensure the right people, processes, and technology are in place to deliver consistent quality and long-term value.",
    highlight: (
      <>
        Tailored Solutions.
        <br />
        Lasting Impact.
      </>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      {/* =========================
          SECTION HEADER
      ========================== */}

      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span>WHAT WE DO</span>
        </div>

        <div className={styles.eyebrowLine}></div>

        <h2>
          Comprehensive <span>Service</span> Portfolio
        </h2>

        <p>
          A complete range of facility management solutions tailored to meet the
          unique needs of modern businesses—designed to enhance operational
          efficiency and maintain exceptional standards.
        </p>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className={styles.mainContent}>
        {/* SERVICES */}

        <div className={styles.servicesWrapper}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={index}>
                {/* Icon */}

                <div className={styles.iconCircle}>
                  <span>{service.icon}</span>
                </div>

                {/* Title */}

                <h3>{service.title}</h3>

                {/* Small gold line */}

                <div className={styles.cardLine}></div>

                {/* Description */}

                <p className={styles.cardDescription}>{service.description}</p>

                {/* Bottom highlight */}

                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>✓</div>

                  <div className={styles.highlightText}>
                    {service.highlight}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}

        <div className={styles.imagePanel}>
          <img src="/images/hero3.png" alt="UK Facility Management Services" />
        </div>
      </div>
    </section>
  );
}
