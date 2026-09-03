"use client";

import { useEffect, useRef } from "react";
import "./ClientFeedback.css";

const testimonials = [
  {
    icon: "building",
    text: "UK Facility Management has transformed our office environment completely. Their housekeeping team is meticulous, reliable, and always professional. We’ve never looked back since partnering with them.",
    name: "Rajesh Mehta",
    role: "Operations Director,",
    company: "Tech Park Pune",
  },
  {
    icon: "school",
    text: "As a school principal, hygiene and safety are paramount. UKFMS has consistently delivered exceptional cleaning standards that give our parents and students complete confidence. Highly recommended.",
    name: "Priya Sharma",
    role: "Principal,",
    company: "International School",
  },
  {
    icon: "factory",
    text: "Their customised facility solutions perfectly matched our manufacturing unit’s requirements. The team is professional, thorough, and always responsive. Excellent value and outstanding service quality.",
    name: "Sunil Joshi",
    role: "Plant Manager,",
    company: "Industrial Unit",
  },

  // Add more cards here if required
  {
    icon: "building",
    text: "The service has been consistently reliable and professional. Their team understands our requirements and maintains excellent standards across the facility.",
    name: "Amit Patel",
    role: "Facility Manager,",
    company: "Corporate Office",
  },
  {
    icon: "school",
    text: "We have been extremely impressed with the quality and responsiveness of the team. They have made facility management much easier for us.",
    name: "Neha Kapoor",
    role: "Administrator,",
    company: "Private School",
  },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 64 64" className="feedback-icon-svg" aria-hidden="true">
      <path
        d="M16 55V17c0-3 2-5 5-5h18c3 0 5 2 5 5v38"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M10 55h44M24 23h4M35 23h4M24 32h4M35 32h4M24 41h4M35 41h4M29 55V47h6v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 64 64" className="feedback-icon-svg" aria-hidden="true">
      <path
        d="M11 55V29l21-13 21 13v26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M22 55V39h20v16M29 31h6M32 16V9h8v7M37 9v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 35h4M44 35h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 64 64" className="feedback-icon-svg" aria-hidden="true">
      <path
        d="M8 55V29l16 9V25l17 10V16h9v39"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M15 46h6M28 46h6M41 46h6M8 55h48"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TestimonialIcon({ type }) {
  if (type === "school") return <SchoolIcon />;
  if (type === "factory") return <FactoryIcon />;
  return <BuildingIcon />;
}

export default function ClientFeedback() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!track) return;

        const card = track.querySelector(".feedback-card");

        if (!card) return;

        const cardWidth =
          card.getBoundingClientRect().width +
          parseFloat(getComputedStyle(track).gap || 0);

        const maxScroll = track.scrollWidth - track.clientWidth;

        if (track.scrollLeft >= maxScroll - 5) {
          track.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          track.scrollBy({
            left: cardWidth,
            behavior: "smooth",
          });
        }
      }, 4000);
    };

    startAutoScroll();

    // Pause carousel while user interacts
    const pause = () => clearInterval(interval);
    const resume = () => {
      clearInterval(interval);
      startAutoScroll();
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart", pause);
    track.addEventListener("touchend", resume);

    return () => {
      clearInterval(interval);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="client-feedback-section">
      {/* Decorative dots */}
      <div className="feedback-dots feedback-dots-left" />
      <div className="feedback-dots feedback-dots-right" />

      <div className="feedback-container">
        {/* Heading */}
        <div className="feedback-heading">
          <div className="feedback-label">
            <span className="feedback-line" />
            <span>CLIENT FEEDBACK</span>
            <span className="feedback-line" />
          </div>

          <h2>
            What Our <span>Clients</span> Say
          </h2>

          <div className="feedback-heading-line" />

          <p>
            We build lasting partnerships based on trust, mutual respect,
            <br className="desktop-break" />
            and outstanding performance across every industry.
          </p>
        </div>

        {/* Carousel */}
        <div className="feedback-carousel-wrapper">
          <div className="feedback-carousel" ref={trackRef}>
            {testimonials.map((item, index) => (
              <article className="feedback-card" key={`${item.name}-${index}`}>
                {/* Floating icon */}
                <div className="feedback-icon">
                  <TestimonialIcon type={item.icon} />
                </div>

                <div className="feedback-card-content">
                  {/* Quote */}
                  <div className="quote-mark">“</div>

                  {/* Stars */}
                  <div className="feedback-stars">★ ★ ★ ★ ★</div>

                  {/* Testimonial */}
                  <p className="feedback-text">{item.text}</p>

                  {/* Separator */}
                  <div className="feedback-separator" />

                  {/* Person */}
                  <div className="feedback-person">
                    <div className="person-avatar">
                      <span>●</span>
                    </div>

                    <div className="person-info">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                      <span>{item.company}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
