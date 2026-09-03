import Image from "next/image";
import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.section} id="who-we-are">
      {/* Background */}
      <Image
        src="/images/hero2.png"
        alt=""
        fill
        className={styles.backgroundImage}
      />

      {/* Content */}
      <div className={styles.content}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine}></span>
          <span>WHO WE ARE</span>
        </div>

        {/* Main Heading */}
        <h2 className={styles.heading}>
          Excellence in Facility
          <br />
          Management.
          <br />
          <span>Built on Trust.</span>
          <br />
          <span>Driven by Standards.</span>
        </h2>

        {/* Gold separator */}
        <div className={styles.headingLine}></div>

        {/* Description */}
        <div className={styles.description}>
          <p>
            At UK Facility Management Services, we go beyond routine
            maintenance—we create environments that inspire productivity, ensure
            well-being, and reflect the highest standards of professionalism.
            Our integrated facility solutions are tailored to meet your unique
            operational needs with consistency, efficiency, and integrity.
          </p>

          <p>
            We don’t just manage facilities—we elevate workplaces so you can
            focus on what matters most: growing your business.
          </p>
        </div>

        {/* Three Values */}
        <div className={styles.values}>
          {/* Value 1 */}
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 24h24v18H20z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24 24v-4h16v4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M25 42v7M39 42v7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 29h-5v13h5M48 29h5v13h-5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M28 34h8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <h3>
              Industry-Leading
              <br />
              Practices
            </h3>

            <div className={styles.valueLine}></div>

            <p>
              Proven methodologies and trained professionals delivering superior
              results across every engagement.
            </p>
          </div>

          {/* Value 2 */}
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31 48V24" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M31 31c-9-1-14-6-15-14 8 0 14 4 15 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M31 38c9-1 14-6 15-14-8 0-14 4-15 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M31 24c2-7 7-11 14-12 0 8-4 12-14 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3>
              Sustainable
              <br />
              Approach
            </h3>

            <div className={styles.valueLine}></div>

            <p>
              Environmentally responsible solutions that promote health, safety,
              and a greener tomorrow.
            </p>
          </div>

          {/* Value 3 */}
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 10l18 7v14c0 11-7 18-18 23-11-5-18-12-18-23V17l18-7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M23 31l6 6 12-13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3>
              Integrity
              <br />
              at Every Step
            </h3>

            <div className={styles.valueLine}></div>

            <p>
              Transparent processes, ethical practices, and an unwavering
              commitment to building lasting trust.
            </p>
          </div>
        </div>
      </div>

      {/* Excellence Rating Card */}
      <div className={styles.ratingCard}>
        <div className={styles.ratingTop}>
          <div className={styles.ratingShield}>
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 7l20 8v15c0 13-8 22-20 27C20 52 12 43 12 30V15l20-8Z"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M21 31l7 7 15-16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className={styles.ratingDetails}>
            <div className={styles.stars}>★★★★★</div>

            <div className={styles.ratingTitle}>EXCELLENCE RATED</div>
          </div>
        </div>

        <div className={styles.ratingDivider}></div>

        <p>
          Trusted by organisations
          <br />
          that value quality, reliability,
          <br />
          and peace of mind.
        </p>
      </div>
    </section>
  );
}
