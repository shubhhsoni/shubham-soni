import {
  Briefcase,
  ChevronDown,
  Circle,
  Cloud,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Smartphone,
  Star,
  Terminal,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    icon: Smartphone,
    title: "Android Native",
    subtitle: "Kotlin",
    stack: "MVVM · Clean Architecture · ~2 yrs",
  },
  {
    icon: Layers,
    title: "Flutter",
    subtitle: "iOS & Android",
    stack: "Dart · Custom Widgets · Animations · ~2 yrs",
  },
  {
    icon: Code2,
    title: "React Native",
    subtitle: "Cross-Platform",
    stack: "TypeScript · Redux · UI Implementation",
  },
  {
    icon: Terminal,
    title: "Languages",
    subtitle: "Polyglot",
    stack: "Kotlin · Dart · TypeScript · JavaScript",
  },
  {
    icon: Cloud,
    title: "Payments & Cloud",
    subtitle: "Integrations",
    stack: "Stripe · PayPal · AWS S3 · Retrofit",
  },
  {
    icon: Wrench,
    title: "Tools & Publishing",
    subtitle: "Full Lifecycle",
    stack: "Android Studio · Git · Figma · Play Store · App Store",
  },
];

const PROJECTS = [
  {
    icon: Smartphone,
    title: "My-EMY",
    subtitle: "Marketplace Mobile App",
    period: "Oct 2023 – Present",
    tech: ["Kotlin", "MVVM", "AWS S3", "Retrofit"],
    bullets: [
      "Dual-role system (Business & Customer) with separate navigation flows",
      "Short-video Reels feed with smooth scroll, lazy loading & AWS S3 upload",
      "Real-time in-app chat for buyer-seller communication",
    ],
  },
  {
    icon: Star,
    title: "FoodResQ",
    subtitle: "Food Ordering App",
    period: "Jan 2024 – Jun 2024",
    tech: ["Kotlin", "MVVM", "Stripe", "PayPal"],
    bullets: [
      "Category filtering, cart management, order flows",
      "Coupon code validation at checkout",
      "Stripe & PayPal dual payment gateway integration",
    ],
  },
  {
    icon: Layers,
    title: "Moving Force",
    subtitle: "Movers & Logistics App",
    period: "Apr 2025 – Present",
    tech: ["Flutter", "Dart", "AWS S3"],
    bullets: [
      "Multi-role UI workflows for businesses, movers & customers",
      "Published on Google Play & Apple App Store",
      "Consistent UI stability across iOS and Android",
    ],
  },
  {
    icon: Cloud,
    title: "Shared Storage",
    subtitle: "Storage Sharing App",
    period: "Apr 2025 – Dec 2025",
    tech: ["Flutter", "Dart", "Stripe"],
    bullets: [
      "List, discover, and reserve storage spaces",
      "Stripe-powered payments with responsive UI flows",
      "Thorough error handling & API contract coordination",
    ],
  },
  {
    icon: Circle,
    title: "Recovera",
    subtitle: "Airport Lost & Found App",
    period: "May 2025 – Dec 2025",
    tech: ["React Native", "TypeScript", "Redux"],
    bullets: [
      "Cross-platform airport product recovery for passengers & staff",
      "Redux-structured actions, reducers & selectors",
      "Item reporting, search, claim submission & status tracking",
    ],
  },
];

const EXPERIENCE = {
  role: "Mobile App Developer",
  company: "IQlance Solutions Pvt. Ltd.",
  period: "Mar 2023 – Present",
  location: "Ahmedabad, Gujarat",
  note: "Promoted from Intern to Full-time Developer",
  bullets: [
    "Engineered production-grade Android Native apps using Kotlin and MVVM (~2 yrs)",
    "Crafted Android native apps with complex navigation flows, dual-role architectures, real-time chat",
    "Architected and shipped complete Flutter apps end-to-end — UI design, SDK integration, store deployment",
    "Implemented React Native UIs using TypeScript and Redux for cross-platform workflows",
    "Integrated Stripe and PayPal payment gateways across multiple live projects",
  ],
};

const EDUCATION = {
  degree: "B.Voc – Information Technology",
  year: "May 2025",
  institution: "Silver Oak University, Ahmedabad, Gujarat",
  cgpa: "8.48",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Floating Dots Background ─────────────────────────────────────────────────

const DOTS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 37.3) % 100,
  y: (i * 53.7) % 100,
  size: 1 + (i % 3) * 0.8,
  delay: (i * 0.7) % 6,
  duration: 4 + (i % 5),
}));

function FloatingDots() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {DOTS.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `dot-float ${dot.duration}s ${dot.delay}s ease-in-out infinite`,
            opacity: 0.3,
          }}
        />
      ))}
      {/* Mesh grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Background grid pattern"
      >
        <title>Background grid pattern</title>
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.link"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <div className="px-3 py-1.5 rounded-xl glass-btn flex items-center justify-center text-white font-bold text-sm tracking-wide">
            Shubham
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? "text-white bg-white/10"
                    : "text-[#9A9A9A] hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          data-ocid="nav.primary_button"
          onClick={() => scrollTo("#contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold glass-btn-primary"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.toggle"
          className="md:hidden glass-btn p-2.5 rounded-xl text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              data-ocid="nav.link"
              onClick={() => scrollTo(link.href)}
              className="w-full text-left block py-3 text-sm font-medium text-[#CFCFCF] hover:text-white transition-colors border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            data-ocid="nav.primary_button"
            className="mt-4 w-full text-center px-5 py-3 rounded-full text-sm font-semibold glass-btn-primary"
            onClick={() => scrollTo("#contact")}
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroName() {
  const words = ["SHUBHAM", "SONI"];
  const [visible, setVisible] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const timers = words.map((_, i) =>
      setTimeout(
        () => {
          setVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        },
        200 + i * 300,
      ),
    );
    return () => {
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {words.map((word, i) => (
        <span
          key={word}
          className="block text-white font-extrabold uppercase leading-none"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(56px, 10vw, 96px)",
            letterSpacing: "-0.02em",
            opacity: visible[i] ? 1 : 0,
            transform: visible[i] ? "translateY(0)" : "translateY(40px)",
            transition:
              "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden"
      style={{
        background: "#050505",
      }}
    >
      <FloatingDots />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#9A9A9A] text-xs font-medium tracking-widest uppercase mb-10"
          style={{ animation: "hero-reveal 0.6s 0.1s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
          Mobile App Developer
        </div>

        {/* Name */}
        <HeroName />

        {/* Tagline */}
        <p
          className="mt-6 text-[#9A9A9A] text-sm font-medium tracking-widest uppercase"
          style={{ animation: "hero-reveal 0.6s 0.7s both" }}
        >
          Android Native · Flutter · React Native
        </p>

        {/* Summary */}
        <p
          className="mt-6 max-w-xl mx-auto text-[#CFCFCF] text-base leading-relaxed"
          style={{ animation: "hero-reveal 0.7s 0.9s both" }}
        >
          Results-driven developer with ~3 years building production-ready
          mobile applications. Full lifecycle expertise — scalable architecture,
          payments, cloud, and app store publishing.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "hero-reveal 0.6s 1.1s both" }}
        >
          <a
            href="#projects"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass-btn-primary"
          >
            View My Work
          </a>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass-btn text-white"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-16 flex flex-col items-center gap-2 text-[#6E6E6E] text-xs"
          style={{ animation: "hero-reveal 0.6s 1.4s both" }}
        >
          <span>Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6"
      style={{ background: "#050505" }}
    >
      <div
        className="spotlight absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#6E6E6E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Core Expertise
          </p>
          <h2
            className="text-white font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
            }}
          >
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                data-ocid={`skills.item.${i + 1}`}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass card-hover rounded-2xl p-6 group cursor-default`}
              >
                <div className="w-11 h-11 rounded-xl glass-btn flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-0.5">
                  {skill.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm font-medium mb-3">
                  {skill.subtitle}
                </p>
                <p className="text-[#6E6E6E] text-xs leading-relaxed">
                  {skill.stack}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "#050505" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#6E6E6E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Portfolio
          </p>
          <h2
            className="text-white font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
            }}
          >
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                data-ocid={`projects.item.${i + 1}`}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass card-hover rounded-2xl p-6 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl glass-btn flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-[#6E6E6E] text-xs font-medium mt-1">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-1">
                  {project.title}
                </h3>
                <p className="text-[#9A9A9A] text-sm font-medium mb-4">
                  {project.subtitle}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-[#CFCFCF] text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium glass border-white/10 text-[#CFCFCF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6"
      style={{ background: "#050505" }}
    >
      <div
        className="spotlight absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#6E6E6E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Career
          </p>
          <h2
            className="text-white font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
            }}
          >
            Experience
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px timeline-line"
            aria-hidden="true"
          />

          <div className="reveal pl-16 relative">
            <div
              className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-white ring-4 ring-white/10"
              aria-hidden="true"
            />

            <div className="glass rounded-2xl p-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white font-bold text-xl flex items-center gap-2">
                    <Briefcase size={18} className="text-[#9A9A9A]" />
                    {EXPERIENCE.role}
                  </h3>
                  <p className="text-[#CFCFCF] text-base font-medium mt-1">
                    {EXPERIENCE.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold glass text-white">
                    {EXPERIENCE.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-5">
                <span className="flex items-center gap-1.5 text-[#6E6E6E] text-xs">
                  <MapPin size={12} /> {EXPERIENCE.location}
                </span>
                <span className="flex items-center gap-1.5 text-[#9A9A9A] text-xs glass px-2.5 py-1 rounded-full">
                  <Star size={11} /> {EXPERIENCE.note}
                </span>
              </div>

              <ul className="space-y-3">
                {EXPERIENCE.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[#CFCFCF] text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section className="py-20 px-6" style={{ background: "#050505" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-[#6E6E6E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Background
          </p>
          <h2
            className="text-white font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(24px, 3.5vw, 36px)",
            }}
          >
            Education
          </h2>
        </div>

        <div className="reveal glass card-hover rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass-btn flex items-center justify-center flex-shrink-0">
            <GraduationCap size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-1">
              {EDUCATION.degree}
            </h3>
            <p className="text-[#CFCFCF] text-sm font-medium mb-2">
              {EDUCATION.institution}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-xs glass text-[#CFCFCF]">
                {EDUCATION.year}
              </span>
              <span className="px-3 py-1 rounded-full text-xs glass text-white font-semibold">
                CGPA: {EDUCATION.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "#050505" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#6E6E6E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2
            className="text-white font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
            }}
          >
            Contact
          </h2>
          <p className="mt-4 text-[#9A9A9A] text-base max-w-md mx-auto">
            Available for freelance projects, full-time roles, or technical
            collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 reveal">
          <a
            href="mailto:shubhamsoni91186@gmail.com"
            data-ocid="contact.link"
            className="glass card-hover rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl glass-btn flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail size={20} className="text-white" />
            </div>
            <p className="text-[#6E6E6E] text-xs uppercase tracking-widest mb-2">
              Email
            </p>
            <p className="text-[#CFCFCF] text-sm break-all">
              shubhamsoni91186@gmail.com
            </p>
          </a>

          <a
            href="tel:+916357325515"
            data-ocid="contact.link"
            className="glass card-hover rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl glass-btn flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone size={20} className="text-white" />
            </div>
            <p className="text-[#6E6E6E] text-xs uppercase tracking-widest mb-2">
              Phone
            </p>
            <p className="text-[#CFCFCF] text-sm">+91 6357325515</p>
          </a>

          <a
            href="https://linkedin.com/in/shubhamsoni02"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            className="glass card-hover rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl glass-btn flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin size={20} className="text-white" />
            </div>
            <p className="text-[#6E6E6E] text-xs uppercase tracking-widest mb-2">
              LinkedIn
            </p>
            <p className="text-[#CFCFCF] text-sm">
              linkedin.com/in/shubhamsoni02
            </p>
          </a>
        </div>

        <div className="mt-8 text-center reveal reveal-delay-2">
          <p className="flex items-center justify-center gap-2 text-[#6E6E6E] text-sm">
            <MapPin size={14} />
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ background: "#050505", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p
            className="text-white font-bold text-base"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            SHUBHAM SONI
          </p>
          <p className="text-[#6E6E6E] text-xs mt-0.5">Mobile App Developer</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="w-9 h-9 glass-btn rounded-xl flex items-center justify-center text-[#9A9A9A] hover:text-white"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/shubhamsoni02"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="w-9 h-9 glass-btn rounded-xl flex items-center justify-center text-[#9A9A9A] hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:shubhamsoni91186@gmail.com"
            data-ocid="footer.link"
            className="w-9 h-9 glass-btn rounded-xl flex items-center justify-center text-[#9A9A9A] hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-[#6E6E6E] text-xs text-center">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9A9A9A] hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#050505" }}>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
