import React, { useState } from "react";

export default function UKFacilityManagement() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ukfms-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .ukfms-root {
          --navy: #0d2137;
          --navy-mid: #163352;
          --teal: #1a7f74;
          --teal-light: #24a898;
          --gold: #c9a84c;
          --cream: #f8f5f0;
          --white: #ffffff;
          --gray: #6b7280;
          --light-gray: #f1f5f9;
          --text: #1a2332;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          overflow-x: hidden;
        }
        .ukfms-root *, .ukfms-root *::before, .ukfms-root *::after { box-sizing: border-box; }
        .ukfms-root a { text-decoration: none; }
        .ukfms-root ul { list-style: none; margin: 0; padding: 0; }
        .ukfms-root h1, .ukfms-root h2, .ukfms-root h3, .ukfms-root h4, .ukfms-root p { margin: 0; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 5%;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
          background: rgba(13, 33, 55, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem; font-weight: 700;
          color: var(--white); letter-spacing: 0.02em;
        }
        .nav-logo span { color: var(--gold); }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a {
          color: rgba(255,255,255,0.82);
          font-size: 0.9rem; font-weight: 500; letter-spacing: 0.05em;
          text-transform: uppercase; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta {
          background: var(--gold); color: var(--navy);
          padding: 0.5rem 1.4rem; border-radius: 2px;
          font-weight: 600; font-size: 0.85rem; letter-spacing: 0.06em;
          text-transform: uppercase; transition: background 0.2s;
          display: inline-block;
        }
        .nav-cta:hover { background: #e0b84a; }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 110;
        }
        .nav-toggle span {
          width: 24px; height: 2px; background: var(--white);
          transition: transform 0.25s, opacity 0.25s;
        }
        .nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-toggle.open span:nth-child(2) { opacity: 0; }
        .nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
          background: var(--navy);
          z-index: 99;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu a {
          color: var(--white); font-size: 1.1rem; font-weight: 500;
          letter-spacing: 0.05em; text-transform: uppercase;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-menu .nav-cta { margin-top: 1rem; }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 55%, #1a4060 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 100px 5% 60px;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-content { max-width: 700px; z-index: 1; }
        .hero-eyebrow {
          display: inline-block;
          color: var(--gold); font-size: 0.85rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          margin-bottom: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.4);
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 8vw, 4.5rem);
          font-weight: 700; line-height: 1.12;
          color: var(--white); margin-bottom: 1.5rem;
        }
        .hero h1 em { color: var(--gold); font-style: normal; }
        .hero p {
          font-size: 1.1rem; line-height: 1.75; color: rgba(255,255,255,0.72);
          max-width: 580px; margin-bottom: 2.5rem;
        }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          background: var(--teal); color: var(--white);
          padding: 0.85rem 2rem; border-radius: 2px;
          font-weight: 600; font-size: 0.95rem; letter-spacing: 0.04em;
          transition: background 0.2s, transform 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--teal-light); transform: translateY(-1px); }
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.4); color: var(--white);
          padding: 0.85rem 2rem; border-radius: 2px;
          font-weight: 500; font-size: 0.95rem;
          transition: border-color 0.2s, background 0.2s;
          display: inline-block;
        }
        .btn-outline:hover { border-color: var(--gold); background: rgba(201,168,76,0.1); }
        .hero-stats {
          display: flex; gap: 3rem; margin-top: 3.5rem;
          padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.12);
          flex-wrap: wrap;
        }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem; font-weight: 700; color: var(--gold); display: block;
        }
        .stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.55); letter-spacing: 0.05em; text-transform: uppercase; }
        .hero-image-col {
          position: absolute; right: 0; top: 0; bottom: 0; width: 42%;
          background: linear-gradient(to left, rgba(13,33,55,0) 0%, var(--navy-mid) 100%),
            url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80') center/cover no-repeat;
          opacity: 0.35;
        }

        /* SECTION SHARED */
        .ukfms-root section { padding: 90px 5%; }
        .section-tag {
          display: inline-block; color: var(--teal); font-size: 0.8rem;
          font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 5vw, 2.8rem); font-weight: 700;
          line-height: 1.2; color: var(--navy); margin-bottom: 1.2rem;
        }
        .section-sub { font-size: 1rem; line-height: 1.75; color: var(--gray); max-width: 580px; }
        .divider { width: 50px; height: 3px; background: var(--gold); margin: 1.2rem 0; }

        /* ABOUT */
        .about { background: var(--cream); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .about-img-wrap { position: relative; }
        .about-img-main {
          width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 2px;
          display: block;
          background: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80') center/cover no-repeat;
        }
        .about-badge {
          position: absolute; bottom: -24px; right: -24px;
          background: var(--navy); color: var(--white);
          padding: 1.5rem 1.8rem; border-radius: 2px;
          text-align: center;
        }
        .about-badge strong { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--gold); display: block; }
        .about-badge span { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.75; }
        .about-features { display: flex; flex-direction: column; gap: 1.2rem; margin-top: 2rem; }
        .feature-row { display: flex; align-items: flex-start; gap: 1rem; }
        .feature-icon {
          width: 42px; height: 42px; border-radius: 50%; background: rgba(26,127,116,0.12);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          font-size: 1.1rem;
        }
        .feature-text strong { font-size: 0.95rem; display: block; color: var(--navy); }
        .feature-text span { font-size: 0.88rem; color: var(--gray); }

        /* SERVICES */
        .services { background: var(--white); }
        .services-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
        .services-header .section-sub { margin: 0 auto; }
        .services-header .divider { margin: 1.2rem auto; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .service-card {
          border: 1px solid #e5e7eb; padding: 2.2rem;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          position: relative; overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: var(--teal); transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s;
        }
        .service-card:hover { border-color: transparent; box-shadow: 0 12px 40px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon { font-size: 2rem; margin-bottom: 1.2rem; }
        .service-card h3 { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--navy); margin-bottom: 0.75rem; }
        .service-card p { font-size: 0.9rem; line-height: 1.7; color: var(--gray); }

        /* INDUSTRIES */
        .industries { background: var(--navy); }
        .industries .section-title { color: var(--white); }
        .industries .section-sub { color: rgba(255,255,255,0.6); }
        .industries-header { max-width: 680px; margin: 0 auto 4rem; text-align: center; }
        .industries-header .divider { margin: 1.2rem auto; }
        .industries-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; max-width: 1200px; margin: 0 auto; }
        .industry-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          padding: 1.8rem 1.2rem; text-align: center; border-radius: 2px;
          transition: background 0.2s, border-color 0.2s;
        }
        .industry-card:hover { background: rgba(26,127,116,0.2); border-color: var(--teal-light); }
        .industry-card .ico { font-size: 2rem; margin-bottom: 1rem; }
        .industry-card h4 { font-size: 0.85rem; font-weight: 600; color: var(--white); line-height: 1.4; }

        /* VALUES */
        .values { background: var(--cream); }
        .values-header { max-width: 680px; margin: 0 auto 4rem; text-align: center; }
        .values-header .divider { margin: 1.2rem auto; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .value-card {
          background: var(--white); padding: 2rem;
          border-top: 4px solid transparent; transition: border-color 0.25s;
        }
        .value-card:hover { border-top-color: var(--gold); }
        .value-num { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: rgba(201,168,76,0.25); font-weight: 700; margin-bottom: 0.5rem; }
        .value-card h3 { font-size: 1rem; font-weight: 700; color: var(--navy); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.75rem; }
        .value-card p { font-size: 0.88rem; line-height: 1.7; color: var(--gray); }

        /* WHY US */
        .why { background: var(--white); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .why-img {
          width: 100%; aspect-ratio: 1; object-fit: cover;
          background: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=80') center/cover no-repeat;
          border-radius: 2px;
        }
        .why-items { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
        .why-item { display: flex; gap: 1.2rem; align-items: flex-start; }
        .why-dot { width: 36px; height: 36px; border-radius: 50%; background: var(--teal); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .why-dot svg { width: 16px; height: 16px; }
        .why-item h4 { font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 0.2rem; }
        .why-item p { font-size: 0.88rem; color: var(--gray); line-height: 1.6; }

        /* TESTIMONIALS */
        .testimonials { background: var(--navy-mid); }
        .testimonials .section-title { color: var(--white); }
        .testimonials-header { text-align: center; max-width: 600px; margin: 0 auto 3.5rem; }
        .testimonials-header .section-sub { color: rgba(255,255,255,0.55); }
        .testimonials-header .divider { margin: 1.2rem auto; }
        .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1100px; margin: 0 auto; }
        .testi-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          padding: 2rem; position: relative;
        }
        .testi-quote { font-size: 3rem; color: var(--gold); line-height: 1; margin-bottom: 1rem; font-family: Georgia; }
        .testi-card p { font-size: 0.9rem; line-height: 1.75; color: rgba(255,255,255,0.75); margin-bottom: 1.5rem; }
        .testi-author strong { color: var(--white); font-size: 0.9rem; display: block; }
        .testi-author span { color: var(--gold); font-size: 0.8rem; display: block; }
        .stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 1rem; }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, var(--teal) 0%, #0e5d55 100%);
          padding: 80px 5%; text-align: center;
        }
        .cta-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 5vw, 2.8rem); color: var(--white); margin-bottom: 1rem; }
        .cta-section p { color: rgba(255,255,255,0.8); font-size: 1.05rem; max-width: 560px; margin: 0 auto 2.5rem; line-height: 1.7; }
        .cta-form { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; max-width: 600px; margin: 0 auto; }
        .cta-form input {
          flex: 1; min-width: 200px; padding: 0.85rem 1.2rem;
          border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.12);
          color: white; border-radius: 2px; font-size: 0.95rem;
          outline: none; transition: border-color 0.2s;
        }
        .cta-form input::placeholder { color: rgba(255,255,255,0.55); }
        .cta-form input:focus { border-color: rgba(255,255,255,0.7); }
        .btn-white {
          background: var(--white); color: var(--teal);
          padding: 0.85rem 2rem; border: none; border-radius: 2px;
          font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;
        }
        .btn-white:hover { background: var(--cream); }

        /* FOOTER */
        .ukfms-root footer {
          background: var(--navy); color: rgba(255,255,255,0.6);
          padding: 60px 5% 30px;
        }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto 3rem; }
        .footer-brand .logo { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: white; margin-bottom: 1rem; }
        .footer-brand .logo span { color: var(--gold); }
        .footer-brand p { font-size: 0.88rem; line-height: 1.75; }
        .footer-col h4 { color: var(--white); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1.2rem; }
        .footer-col ul { display: flex; flex-direction: column; gap: 0.6rem; }
        .footer-col a { color: rgba(255,255,255,0.55); font-size: 0.88rem; transition: color 0.2s; }
        .footer-col a:hover { color: var(--gold); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 0.5rem; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-grid, .why-grid { grid-template-columns: 1fr; gap: 40px; }
          .services-grid, .values-grid { grid-template-columns: repeat(2, 1fr); }
          .industries-grid { grid-template-columns: repeat(3, 1fr); }
          .testi-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .hero-image-col { display: none; }
          .about-badge { right: 0; }
          .nav .nav-links { display: none; }
          .nav-toggle { display: flex; }
        }
        @media (max-width: 600px) {
          .services-grid, .values-grid, .industries-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .hero-stats { flex-wrap: wrap; gap: 1.5rem; }
          .about-badge { position: static; margin-top: 1rem; display: inline-block; }
          .cta-form { flex-direction: column; }
          .cta-form input { min-width: 100%; }
        }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        .hero-content > * { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .hero-eyebrow { animation-delay: 0.1s; }
        .hero h1 { animation-delay: 0.25s; }
        .hero p { animation-delay: 0.4s; }
        .hero-btns { animation-delay: 0.5s; }
        .hero-stats { animation-delay: 0.6s; }

        @media (prefers-reduced-motion: reduce) {
          .hero-content > *, .mobile-menu { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">UK <span>Facility</span> Management</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
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
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#industries" onClick={closeMenu}>Industries</a>
        <a href="#values" onClick={closeMenu}>Values</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Get a Quote</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-image-col"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">Professional Facility Management</span>
          <h1>Elevating Workplace<br />Standards Through<br /><em>Expert Solutions</em></h1>
          <p>We are a trusted partner in comprehensive facility management—delivering excellence through reliable, efficient, and high-quality services tailored to your organisation's needs.</p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary">Explore Our Services</a>
            <a href="#contact" className="btn-outline">Request a Quote</a>
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
            <h2 className="section-title">A Professionally Managed Organisation Built on Excellence</h2>
            <div className="divider"></div>
            <p className="section-sub">UK Facility Management Services is dedicated to enhancing workplace standards through expertise, efficiency, and an unwavering commitment to integrity. We offer a full spectrum of facility services designed to create clean, safe, and productive environments.</p>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.75 }}>We don't just maintain spaces—we help businesses build environments that reflect professionalism, productivity, and pride. Every service is designed to support your operational goals.</p>
            <div className="about-features">
              <div className="feature-row">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">
                  <strong>Industry Best Practices</strong>
                  <span>Combining proven methods with innovative solutions across every engagement.</span>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">🌿</div>
                <div className="feature-text">
                  <strong>Eco-Friendly Approach</strong>
                  <span>Sustainable practices using environmentally responsible cleaning solutions.</span>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <strong>Integrity at the Core</strong>
                  <span>Transparent, honest, and accountable service delivery you can rely on.</span>
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
          <p className="section-sub">A complete range of facility management solutions tailored to meet the unique needs of modern businesses—designed to enhance operational efficiency and maintain exceptional standards.</p>
        </div>
        <div className="services-grid">
          {[
            ["🧹", "Housekeeping & Maintenance", "Systematic and result-oriented housekeeping solutions that uphold hygiene, order, and efficiency across all premises, consistently and reliably."],
            ["✨", "Deep Cleaning & Sanitisation", "Comprehensive cleaning powered by modern equipment and eco-friendly materials, promoting health and sustainability in every environment."],
            ["👥", "Office Support Staffing", "Deployment of skilled and courteous support personnel ensuring smooth daily operations and professional conduct throughout your facility."],
            ["☕", "Pantry & Hospitality Management", "Efficient management of pantry and hospitality services to ensure comfort, courtesy, and seamless service delivery for employees and guests."],
            ["🔬", "Specialised Cleaning Solutions", "Targeted cleaning for workstations, glass panels, restrooms, and high-contact areas using safe, high-performance agents and standardised methods."],
            ["⚙️", "Customised Facility Solutions", "Tailor-made facility management programmes designed to align with each client's operational structure, standards, and budget requirements."],
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
          <span className="section-tag" style={{ color: "var(--gold)" }}>Where We Work</span>
          <h2 className="section-title">Industries We Proudly Serve</h2>
          <div className="divider"></div>
          <p className="section-sub">Our extensive experience spans multiple sectors, each with unique requirements and standards. We deliver targeted solutions that meet and exceed sector-specific benchmarks.</p>
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
          <p className="section-sub">These six principles guide every decision we make and every service we deliver—representing our commitment to excellence and building lasting partnerships.</p>
        </div>
        <div className="values-grid">
          {[
            ["01", "Integrity", "We uphold the highest ethical standards in every aspect of our operations—ensuring honesty, transparency, and accountability. Our word is our bond."],
            ["02", "Quality", "We are committed to excellence through continuous improvement and meticulous attention to detail. Every task receives the same level of care and precision."],
            ["03", "Reliability", "Our clients trust us for consistent, dependable service delivery, day in and day out. We understand your operations depend on our performance."],
            ["04", "Teamwork", "We believe collaboration drives success. Our teams work cohesively, sharing knowledge to deliver seamless service across all touchpoints."],
            ["05", "Customer Focus", "Our clients' satisfaction is at the centre of everything we do. We listen carefully, respond promptly, and continuously adapt to evolving needs."],
            ["06", "Innovation", "We continuously adapt to new technologies and methods for better outcomes—ensuring clients benefit from the most effective and efficient solutions available."],
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
            <h2 className="section-title">Why Choose UK Facility Management?</h2>
            <div className="divider"></div>
            <p className="section-sub">These distinguishing factors combine to deliver a service experience that goes beyond basic facility management—creating partnerships that drive real value.</p>
            <div className="why-items">
              {[
                ["Trained Professionals", "Every team member undergoes comprehensive training and continuous professional development."],
                ["Modern Equipment", "State-of-the-art tools and technology for superior, consistent results across all services."],
                ["Quality Assurance", "Rigorous monitoring and regular audits ensure consistent excellence in every service delivered."],
                ["Responsive Support", "Dedicated account management and prompt issue resolution when you need it most."],
              ].map(([title, text]) => (
                <div className="why-item" key={title}>
                  <div className="why-dot">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
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
          <span className="section-tag" style={{ color: "var(--gold)" }}>Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider"></div>
          <p className="section-sub">We build lasting partnerships based on trust, mutual respect, and outstanding performance across every industry.</p>
        </div>
        <div className="testi-grid">
          {[
            ["UK Facility Management has transformed our office environment completely. Their housekeeping team is meticulous, reliable, and always professional. We've never looked back since partnering with them.", "Rajesh Mehta", "Operations Director, Tech Park Pune"],
            ["As a school principal, hygiene and safety are paramount. UKFMS has consistently delivered exceptional cleaning standards that give our parents and students complete confidence. Highly recommended.", "Priya Sharma", "Principal, International School"],
            ["Their customised facility solutions perfectly matched our manufacturing unit's requirements. The team is professional, thorough, and always responsive. Excellent value and outstanding service quality.", "Sunil Joshi", "Plant Manager, Industrial Unit"],
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
        <p>Whether you manage a corporate office, educational institution, healthcare facility, or industrial unit—we have the expertise and commitment to transform your workplace.</p>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <button className="btn-white" type="submit">Get Free Quote</button>
        </form>
        <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", opacity: 0.65 }}>Or call us directly to discuss your requirements with our team.</p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">UK <span>Facility</span> Management Services</div>
            <p>A trusted partner in comprehensive facility management and support solutions. Driven by integrity, professionalism, and a commitment to excellence in every environment we serve.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Housekeeping</a></li>
              <li><a href="#">Deep Cleaning</a></li>
              <li><a href="#">Office Staffing</a></li>
              <li><a href="#">Pantry Management</a></li>
              <li><a href="#">Specialised Cleaning</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><a href="#">Schools</a></li>
              <li><a href="#">Corporate Offices</a></li>
              <li><a href="#">IT & BPO</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Healthcare</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#values">Our Values</a></li>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 UK Facility Management Services. All rights reserved.</span>
          <span>Integrity · Quality · Excellence</span>
        </div>
      </footer>
    </div>
  );
}
