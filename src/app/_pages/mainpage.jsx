"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiMapPinLight, PiPhone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";

export default function UKFacilityManagement() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ukfms-root">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          {" "}
          <Image src="/logo.png" alt="Company Logo" width={42} height={30} />
          <span>Facility Management Services</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
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
            <a href="#contact" className="nav-cta">
              Get a Quote
            </a>
          </li> 
          */}
        </ul>
        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#industries" onClick={closeMenu}>
          Industries
        </a>
        <a href="#values" onClick={closeMenu}>
          Values
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Get a Quote
        </a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-image-col"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">Professional Facility Management</span>
          <h1>
            Elevating Workplace
            <br />
            Standards Through
            <br />
            <em>Expert Solutions</em>
          </h1>
          <p>
            We are a trusted partner in comprehensive facility
            management—delivering excellence through reliable, efficient, and
            high-quality services tailored to your organisation's needs.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary">
              Explore Our Services
            </a>
            <a href="#contact" className="btn-outline">
              Request a Quote
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <span className="stat-num">6+</span>
              <span className="stat-label">Service Categories</span>
            </div>
            <div>
              <span className="stat-num">5+</span>
              <span className="stat-label">Industries Served</span>
            </div>
            <div>
              <span className="stat-num">100%</span>
              <span className="stat-label">Client Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-main" style={{ height: 420 }}></div>
            <div className="about-badge">
              <strong>★★★★★</strong>
              <span>Excellence Rated</span>
            </div>
          </div>
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">
              A Professionally Managed Organisation Built on Excellence
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              UK Facility Management Services is dedicated to enhancing
              workplace standards through expertise, efficiency, and an
              unwavering commitment to integrity. We offer a full spectrum of
              facility services designed to create clean, safe, and productive
              environments.
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "#6b7280",
                lineHeight: 1.75,
              }}
            >
              We don't just maintain spaces—we help businesses build
              environments that reflect professionalism, productivity, and
              pride. Every service is designed to support your operational
              goals.
            </p>
            <div className="about-features">
              <div className="feature-row">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">
                  <strong>Industry Best Practices</strong>
                  <span>
                    Combining proven methods with innovative solutions across
                    every engagement.
                  </span>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">🌿</div>
                <div className="feature-text">
                  <strong>Eco-Friendly Approach</strong>
                  <span>
                    Sustainable practices using environmentally responsible
                    cleaning solutions.
                  </span>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <strong>Integrity at the Core</strong>
                  <span>
                    Transparent, honest, and accountable service delivery you
                    can rely on.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Comprehensive Service Portfolio</h2>
          <div className="divider"></div>
          <p className="section-sub">
            A complete range of facility management solutions tailored to meet
            the unique needs of modern businesses—designed to enhance
            operational efficiency and maintain exceptional standards.
          </p>
        </div>
        <div className="services-grid">
          {[
            [
              "🧹",
              "Housekeeping & Maintenance",
              "Professional housekeeping and integrated maintenance services that enhance the cleanliness, safety, and operational performance of your facility. With experienced manpower, industry best practices, and rigorous quality standards, we deliver reliable solutions that protect your workplace and strengthen your organization's professional image.",
            ],
            [
              "✨",
              "Deep Cleaning & Sanitisation",
              "Restore your facility to the highest standards of cleanliness with our professional deep cleaning and sanitization services. Combining cutting-edge technology, skilled personnel, and environmentally sustainable cleaning solutions, we effectively remove embedded dirt, bacteria, viruses, and allergens—creating cleaner, healthier, and safer spaces for employees, visitors, and customers alike.",
            ],
            [
              "👥",
              "Office Support Staffing",
              "Our office support staffing solutions are designed to strengthen operational efficiency through the deployment of qualified, dependable, and professionally trained personnel. With a strong emphasis on reliability, workplace etiquette, and service excellence, we provide skilled support staff who contribute to a productive, organized, and professionally managed work environment.",
            ],
            [
              "☕",
              "Pantry & Hospitality Management",
              "Efficient management of pantry and hospitality services to ensure comfort, courtesy, and seamless service delivery for employees and guests.",
            ],
            [
              "🔬",
              "Specialised Cleaning Solutions",
              "Our specialized cleaning solutions are designed to meet the unique requirements of modern commercial, industrial, healthcare, and institutional facilities. Through the use of advanced equipment, standardized cleaning protocols, and environmentally responsible products, we deliver precision cleaning for workstations, glass surfaces, restrooms, high-touch areas, and other critical spaces—ensuring exceptional hygiene, operational excellence, and an impeccable workplace environment.",
            ],
            [
              "⚙️",
              "Customised Facility Solutions",
              "Tailor-made facility management programmes designed to align with each client's operational structure, standards, and budget requirements.",
            ],
          ].map(([icon, title, text]) => (
            <div className="service-card" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">
        <div className="industries-header">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            Where We Work
          </span>
          <h2 className="section-title">Industries We Proudly Serve</h2>
          <div className="divider"></div>
          <p className="section-sub">
            Our extensive experience spans multiple sectors, each with unique
            requirements and standards. We deliver targeted solutions that meet
            and exceed sector-specific benchmarks.
          </p>
        </div>
        <div className="industries-grid">
          {[
            ["🏫", "International & Residential Schools"],
            ["🏢", "Corporate Offices & Business Parks"],
            ["💻", "IT & BPO Companies"],
            ["🏭", "Industrial & Manufacturing Units"],
            ["🏥", "Healthcare, Hospitality & Retail"],
          ].map(([icon, title]) => (
            <div className="industry-card" key={title}>
              <div className="ico">{icon}</div>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="values" id="values">
        <div className="values-header">
          <span className="section-tag">Our Principles</span>
          <h2 className="section-title">Core Values That Guide Us</h2>
          <div className="divider"></div>
          <p className="section-sub">
            These six principles guide every decision we make and every service
            we deliver—representing our commitment to excellence and building
            lasting partnerships.
          </p>
        </div>
        <div className="values-grid">
          {[
            [
              "01",
              "Integrity",
              "We uphold the highest ethical standards in every aspect of our operations—ensuring honesty, transparency, and accountability. Our word is our bond.",
            ],
            [
              "02",
              "Quality",
              "We are committed to excellence through continuous improvement and meticulous attention to detail. Every task receives the same level of care and precision.",
            ],
            [
              "03",
              "Reliability",
              "Our clients trust us for consistent, dependable service delivery, day in and day out. We understand your operations depend on our performance.",
            ],
            [
              "04",
              "Teamwork",
              "We believe collaboration drives success. Our teams work cohesively, sharing knowledge to deliver seamless service across all touchpoints.",
            ],
            [
              "05",
              "Customer Focus",
              "Our clients' satisfaction is at the centre of everything we do. We listen carefully, respond promptly, and continuously adapt to evolving needs.",
            ],
            [
              "06",
              "Innovation",
              "We continuously adapt to new technologies and methods for better outcomes—ensuring clients benefit from the most effective and efficient solutions available.",
            ],
          ].map(([num, title, text]) => (
            <div className="value-card" key={num}>
              <div className="value-num">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <div className="why-grid">
          <div>
            <span className="section-tag">The Difference</span>
            <h2 className="section-title">
              Why Choose <span>UK Facility Management</span>?
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              These distinguishing factors combine to deliver a service
              experience that goes beyond basic facility management—creating
              partnerships that drive real value.
            </p>
            <div className="why-items">
              {[
                [
                  "Trained Professionals",
                  "Every team member undergoes comprehensive training and continuous professional development.",
                ],
                [
                  "Modern Equipment",
                  "State-of-the-art tools and technology for superior, consistent results across all services.",
                ],
                [
                  "Quality Assurance",
                  "Rigorous monitoring and regular audits ensure consistent excellence in every service delivered.",
                ],
                [
                  "Responsive Support",
                  "Dedicated account management and prompt issue resolution when you need it most.",
                ],
              ].map(([title, text]) => (
                <div className="why-item" key={title}>
                  <div className="why-dot">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6L9 17l-5-5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-img"></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            Client Feedback
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider"></div>
          <p className="section-sub">
            We build lasting partnerships based on trust, mutual respect, and
            outstanding performance across every industry.
          </p>
        </div>
        <div className="testi-grid">
          {[
            [
              "UK Facility Management has transformed our office environment completely. Their housekeeping team is meticulous, reliable, and always professional. We've never looked back since partnering with them.",
              "Rajesh Mehta",
              "Operations Director, Tech Park Pune",
            ],
            [
              "As a school principal, hygiene and safety are paramount. UKFMS has consistently delivered exceptional cleaning standards that give our parents and students complete confidence. Highly recommended.",
              "Priya Sharma",
              "Principal, International School",
            ],
            [
              "Their customised facility solutions perfectly matched our manufacturing unit's requirements. The team is professional, thorough, and always responsive. Excellent value and outstanding service quality.",
              "Sunil Joshi",
              "Plant Manager, Industrial Unit",
            ],
          ].map(([quote, name, role]) => (
            <div className="testi-card" key={name}>
              <div className="testi-quote">"</div>
              <div className="stars">★★★★★</div>
              <p>{quote}</p>
              <div className="testi-author">
                <strong>{name}</strong>
                <span>{role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <h2>Ready to Elevate Your Facility Standards?</h2>

        <div className="cta-content">
          <div className="cta-details">
            Contact Details
            <div className="contact">
              <div className="contact-icon">
                <PiMapPinLight />
              </div>
              <div className="contact-info">
                C-314, Sumel -11, Nr. Namaste Circle, Shahibag Road,
                Ahmedabad-380004
              </div>
              <div className="div-sep" />
              <div className="contact-icon">
                <PiPhone />
              </div>
              <div className="contact-info">+91 91739 31229</div>
              <div className="div-sep" />
              <div className="contact-icon">
                <VscMail />
              </div>
              <div className="contact-info"> ultraklean.facility@gmail.com</div>
            </div>
          </div>

          <div className="cta-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.3687986251018!2d72.58753257897091!3d23.047544093226232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e846c704e5c65%3A0x5f0ca4cf2f14ee08!2sSUMEL%2011%2C%20Shahibag%2C%20Ahmedabad%2C%20Gujarat%20380004!5e1!3m2!1sen!2sin!4v1784223896636!5m2!1sen!2sin"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span>UK Facility Management Services</span>
            </div>
            <p>
              A trusted partner in comprehensive facility management and support
              solutions. Driven by integrity, professionalism, and a commitment
              to excellence in every environment we serve.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Housekeeping</a>
              </li>
              <li>
                <a href="#">Deep Cleaning</a>
              </li>
              <li>
                <a href="#">Office Staffing</a>
              </li>
              <li>
                <a href="#">Pantry Management</a>
              </li>
              <li>
                <a href="#">Specialised Cleaning</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li>
                <a href="#">Schools</a>
              </li>
              <li>
                <a href="#">Corporate Offices</a>
              </li>
              <li>
                <a href="#">IT & BPO</a>
              </li>
              <li>
                <a href="#">Manufacturing</a>
              </li>
              <li>
                <a href="#">Healthcare</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#values">Our Values</a>
              </li>
              <li>
                <a href="#">Mission & Vision</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#contact">Get a Quote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2025 UK Facility Management Services. All rights reserved.
          </span>
          <span>Integrity · Quality · Excellence</span>
        </div>
      </footer>
    </div>
  );
}
