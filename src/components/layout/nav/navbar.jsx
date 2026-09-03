import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            width={42}
            height={30}
          />
          <span>Facility Management Services</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#who-we-are">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#industries">Industries</a>
          </li>
          <li>
            <a href="#values">Values</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* 
          <li>
            <a href="#contact" className={styles.navCta}>
              Get a Quote
            </a>
          </li> 
          */}
        </ul>
        {/* <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}
      </nav>
    </div>
  );
}
