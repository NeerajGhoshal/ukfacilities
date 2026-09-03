import Image from "next/image";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image src="/images/head1.png" alt="" fill className={styles.heroImage} />
      {/* <img src="/images/home-hero.png" alt="" className={styles.heroImage} /> */}

      {/* Dark overlay - helps text readability */}
      <div className={styles.overlay}></div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine}></span>
          Professional Facility Management
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Elevating Workplace
          <br />
          Standards Through
          <br />
          <span>Expert Solutions</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>
          We are a trusted partner in comprehensive facility management—
          delivering excellence through reliable, efficient, and high-quality
          services tailored to your organisation&apos;s needs.
        </p>

        {/* Buttons */}
        <div className={styles.buttons}>
          <a href="#services" className={styles.primaryButton}>
            Explore Our Services
          </a>

          {/* <a href="#contact" className={styles.secondaryButton}>
            <span>Request a Quote</span>
            <span className={styles.arrow}>→</span>
          </a> */}
        </div>

        {/* Statistics */}
        <div className={styles.stats}>
          {/* Stat 1 */}
          <div className={styles.stat}>
            <div className={styles.statIcon}>♙</div>

            <div>
              <div className={styles.statNumber}>6+</div>
              <div className={styles.statText}>
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Stat 2 */}
          <div className={styles.stat}>
            <div className={styles.statIcon}>♧</div>

            <div>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statText}>
                Industry
                <br />
                Sectors
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Stat 3 */}
          <div className={styles.stat}>
            <div className={styles.statIcon}>♢</div>

            <div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statText}>
                Quality
                <br />
                Commitment
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Stat 4 */}
          <div className={styles.stat}>
            <div className={styles.statIcon}>♜</div>

            <div>
              <div className={styles.statNumber}>Pan India</div>
              <div className={styles.statText}>
                Presence &amp;
                <br />
                Support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className={styles.bottomLine}></div>
      </div>
    </section>
  );
}
