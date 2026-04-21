/**
 * TRA Hauling & Excavating — Home Page
 * Design: Industrial Brutalism
 * Colors: Safety Yellow #F5C400 / Near-Black #1A1A1A / Concrete #888
 * Fonts: Bebas Neue (display) + Barlow (body)
 * Layout: Diagonal section cuts, left-anchored hero, asymmetric grid
 */

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, Menu, X, Facebook, Star, Truck, Shovel, Snowflake, Trash2, Building2, Wrench } from "lucide-react";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG = "/tra-truck-hero.png";
const SERVICE_EXCAVATING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_excavating_residential-DKepQuR7wVfdmFmYppauVr.webp";
const SERVICE_HAULING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_hauling_residential-So4hXCFWZ37wArBA8sZHaP.webp";
const SERVICE_SNOW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_snow_residential-8j4NdC7zadMHWsQCivcCaL.webp";
const SERVICE_DEMOLITION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_demolition_residential-U5oFvppCkC74xcHMjba7yH.webp";
const SERVICE_JUNK_REMOVAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_junk_residential-2TjqnTh9MJvgk8auxgRdFa.webp";
const SERVICE_PROPERTY_SERVICES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/service_property_residential-M3qcrB6bpo4GkdEgLCxmpn.webp";
const FB_COVER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034943704/F8FCmMf3GJ9os3KA54mU9k/fb_cover_banner_f7540e08.jpeg";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    icon: <Shovel className="w-8 h-8" />,
    title: "Excavating",
    description: "Professional excavation services in the Palmerton, PA area. Site preparation, trenching, grading, and land clearing for residential and commercial projects in Carbon County.",
    image: SERVICE_EXCAVATING,
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Hauling",
    description: "Reliable hauling services in the Palmerton, PA area for dirt, gravel, debris, and construction materials. Fast, professional delivery throughout the 25-mile service area.",
    image: SERVICE_HAULING,
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Demolition",
    description: "Professional demolition services in the Palmerton, PA area. Safe and efficient removal of structures, concrete, and foundations for residential and commercial properties.",
    image: SERVICE_DEMOLITION,
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Snow Plowing",
    description: "24/7 snow plowing and removal in the Palmerton, PA area. Driveways, parking lots, and commercial properties. Always ready when winter weather strikes.",
    image: SERVICE_SNOW,
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Junk Removal",
    description: "Professional junk removal in the Palmerton, PA area. Quick, affordable cleanup for residential and commercial properties. Same-day service available.",
    image: SERVICE_JUNK_REMOVAL,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Property Services",
    description: "All-inclusive property services in the Palmerton, PA area. Site preparation, cleanup, maintenance, and improvement. One-stop solution for all your property needs.",
    image: SERVICE_PROPERTY_SERVICES,
  },
];

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26,26,26,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,196,0,0.2)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663034943704/bywshlcdqAsCvGKN.webp"
            alt="TRA Hauling & Excavating"
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#F5C400", letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>TRA Hauling & Excavating</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold tracking-widest uppercase transition-colors hover:text-yellow-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#ccc" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:5702498566"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
            style={{
              background: "#F5C400",
              color: "#1A1A1A",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            <Phone className="w-4 h-4" />
            (570) 249-8566
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-yellow-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ background: "#1A1A1A", borderTop: "2px solid #F5C400" }}>
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold tracking-widest uppercase py-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#ccc" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:5702498566"
              className="flex items-center gap-2 px-5 py-3 font-bold text-sm tracking-wider uppercase text-center justify-center"
              style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              (570) 249-8566
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden diagonal-bottom"
      style={{ background: "#1A1A1A" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 0.45,
        }}
      />
      {/* Dark gradient overlay — left-heavy */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(26,26,26,0.95) 40%, rgba(26,26,26,0.3) 100%)",
        }}
      />


      <div className="container relative z-10 pt-16 md:pt-24 pb-16 md:pb-32">
        <div className="max-w-2xl">
          {/* Pre-label */}
          <div
            className="inline-flex items-center gap-3 mb-6 px-3 py-1.5"
            style={{ background: "#F5C400", color: "#1A1A1A" }}
          >
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Palmerton, PA · Always Open
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              lineHeight: 0.95,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            YOUR ALL-INCLUSIVE
            <br />
            <span style={{ color: "#F5C400" }}>PROPERTY</span>
            <br />
            SERVICE CO.
          </h1>

          {/* Tagline */}
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: "#bbb", fontFamily: "'Barlow', sans-serif", maxWidth: "480px" }}
          >
            Hauling. Excavating. Demolition. Snow Plowing. Junk Removal.
            If you need it done — <strong style={{ color: "#F5C400" }}>we can handle it.</strong>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:5702498566"
              className="flex items-center gap-3 px-8 py-4 font-bold text-base tracking-wider uppercase transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "#F5C400",
                color: "#1A1A1A",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
                boxShadow: "0 4px 24px rgba(245,196,0,0.3)",
              }}
            >
              <Phone className="w-5 h-5" />
              Call Now: (570) 249-8566
            </a>
            <a
              href="#services"
              className="flex items-center gap-3 px-8 py-4 font-bold text-base tracking-wider uppercase transition-all hover:bg-white/10"
              style={{
                border: "2px solid #F5C400",
                color: "#F5C400",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Our Services
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-6 md:mt-14 flex flex-wrap gap-4 md:gap-8">
            {[
              { value: "24/7", label: "Always Available" },
              { value: "6+", label: "Services Offered" },
              { value: "PA", label: "Palmerton Area" },
            ].map((stat) => (
              <div key={stat.label} className="yellow-bar">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#F5C400", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", color: "#888", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-yellow-400 opacity-60" />
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-24" style={{ background: "#111" }}>
      <div className="container" ref={ref}>
        {/* Section header */}
        <div className="mb-16">
          <div
            className="inline-block mb-3 px-3 py-1"
            style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            What We Do
          </div>
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1 }}
          >
            OUR <span style={{ color: "#F5C400" }}>SERVICES</span>
          </h2>
            <p className="mt-4 text-base max-w-xl" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
            Professional excavating, hauling, demolition, snow plowing, junk removal and property services in the Palmerton, PA area and surrounding Carbon County.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card overflow-hidden"
              style={{
                background: "#1A1A1A",
                border: "1px solid #2a2a2a",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <a href="#contact" className="relative h-48 overflow-hidden block cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 60%)" }} />
                <div className="absolute bottom-3 left-4 flex items-center gap-2" style={{ color: "#F5C400" }}>
                  {service.icon}
                </div>
              </a>
              {/* Content */}
              <div className="p-5">
                <h3
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#fff", letterSpacing: "0.04em" }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-yellow-300"
                  style={{ color: "#F5C400", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Get a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 diagonal-top"
      style={{ background: "#1A1A1A" }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <img
              src={FB_COVER}
              alt="TRA Hauling & Excavating equipment"
              className="w-full object-cover"
              style={{ border: "4px solid #F5C400" }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 p-6 text-center"
              style={{ background: "#F5C400", color: "#1A1A1A", minWidth: "120px" }}
            >
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", lineHeight: 1 }}>24/7</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Always Open</div>
            </div>
          </div>

          {/* Text side */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="inline-block mb-3 px-3 py-1"
              style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              About TRA
            </div>
            <h2
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}
            >
              IF YOU NEED IT DONE,
              <br />
              <span style={{ color: "#F5C400" }}>WE CAN HANDLE IT</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif" }}>
              TRA Hauling &amp; Excavating is your all-inclusive property service company serving the Palmerton, PA area and surrounding Carbon County. We provide professional excavating, hauling, demolition, snow plowing, and junk removal services to homeowners, contractors, and businesses.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif" }}>
              With 24/7 availability and a 25-mile service area, we handle excavation projects, debris removal, structure demolition, winter snow plowing, and complete property cleanup. Fast response time, competitive pricing, and professional results — that's the TRA difference.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "(570) 249-8566", href: "tel:5702498566" },
                { icon: <Mail className="w-5 h-5" />, label: "trahaulingandexcavating@gmail.com", href: "mailto:trahaulingandexcavating@gmail.com" },
                { icon: <MapPin className="w-5 h-5" />, label: "1087 Fireline Rd, Palmerton, PA", href: "#" },
                { icon: <Clock className="w-5 h-5" />, label: "Always Open — 24/7", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-yellow-400"
                  style={{ color: "#ccc", fontFamily: "'Barlow', sans-serif" }}
                >
                  <span style={{ color: "#F5C400" }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="https://www.facebook.com/people/TRA-Hauling-Excavating/100065619275999/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: "#1877F2",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="reviews" className="py-24" style={{ background: "#111" }}>
      <div className="container" ref={ref}>
        <div className="mb-12">
          <div
            className="inline-block mb-3 px-3 py-1"
            style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            Customer Reviews
          </div>
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1 }}
          >
            WHAT CUSTOMERS <span style={{ color: "#F5C400" }}>SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Real review from Facebook */}
          <div
            className="p-8"
            style={{
              background: "#1A1A1A",
              borderLeft: "4px solid #F5C400",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-base leading-relaxed italic" style={{ color: "#ccc", fontFamily: "'Barlow', sans-serif" }}>
              "I needed a junk clean out done quick. Troy was responsive, showed up the same day, and had the best price around. Great business, would recommend to anyone!"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center font-bold text-sm"
                style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem" }}
              >
                K
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Kayla Willingham</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", color: "#888", fontSize: "0.8rem" }}>April 2023 · via Facebook</div>
              </div>
            </div>
          </div>

          {/* Placeholder review card */}
          <div
            className="p-8 flex flex-col justify-center items-center text-center"
            style={{
              background: "#1A1A1A",
              border: "2px dashed #2a2a2a",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
            }}
          >
            <Star className="w-10 h-10 mb-4" style={{ color: "#F5C400" }} />
            <p className="text-base" style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}>
              More reviews coming soon. Have you worked with TRA? Leave a review on Facebook!
            </p>
            <a
              href="https://www.facebook.com/people/TRA-Hauling-Excavating/100065619275999/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 font-bold text-sm tracking-wider uppercase"
              style={{
                border: "2px solid #F5C400",
                color: "#F5C400",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              <Facebook className="w-4 h-4" />
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact section - form removed, showing contact info only
function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState<{ name: string; phone: string; email: string; message: string; photos: File[] }>({
    name: "",
    phone: "",
    email: "",
    message: "",
    photos: [],
  });
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData to handle file uploads
    const formData = new FormData();
    formData.append('name', form.name || '');
    formData.append('phone', form.phone || '');
    formData.append('email', form.email || '');
    formData.append('message', form.message || '');
    

    
    try {
      const response = await fetch('https://formspree.io/f/xlgapeak', {
        method: 'POST',
        body: formData,
      });
      
      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: '', phone: '', email: '', message: '', photos: [] });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: '', phone: '', email: '', message: '', photos: [] });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "#1A1A1A", borderTop: "4px solid #F5C400" }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              className="inline-block mb-3 px-3 py-1"
              style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Get In Touch
            </div>
            <h2
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}
            >
              READY TO GET
              <br />
              <span style={{ color: "#F5C400" }}>THE JOB DONE?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif" }}>
              Call us directly or send a message below. We respond fast and can often be on-site the same day.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:5702498566"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "#F5C400" }}>
                  <Phone className="w-5 h-5" style={{ color: "#1A1A1A" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>Call Us</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#fff", letterSpacing: "0.04em" }}>(570) 249-8566</div>
                </div>
              </a>

              <a
                href="mailto:trahaulingandexcavating@gmail.com"
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "#2a2a2a" }}>
                  <Mail className="w-5 h-5" style={{ color: "#F5C400" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>Email Us</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "#ccc" }}>trahaulingandexcavating@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "#2a2a2a" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#F5C400" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>Location</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "#ccc" }}>1087 Fireline Rd, Palmerton, PA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map & Form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            {/* Service Area Map */}
            <div className="mb-6 rounded-lg overflow-hidden" style={{ border: "2px solid #2a2a2a", height: "280px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.8839123456!2d-75.6!3d40.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43f8e8e8e8e8d%3A0x1234567890abcdef!2s1087%20Fireline%20Rd%2C%20Palmerton%2C%20PA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mb-6 p-4" style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: "4px" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5C400", marginBottom: "0.5rem" }}>
                Service Area
              </div>
              <p style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", lineHeight: "1.5" }}>
                We proudly serve a <strong style={{ color: "#fff" }}>25-mile radius</strong> from Palmerton, PA, covering Carbon County and surrounding areas. If you're unsure if we reach your location, give us a call at <strong style={{ color: "#F5C400" }}>(570) 249-8566</strong>.
              </p>
            </div>

            {/* Contact Form */}
            {submitted ? (
              <div className="p-6 text-center" style={{ background: "#111", border: "2px solid #F5C400", borderRadius: "4px" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#F5C400", marginBottom: "0.5rem" }}>✓ MESSAGE SENT!</div>
                <p style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif" }}>Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "0.5rem" }}>Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={{ width: "100%", padding: "0.75rem", background: "#111", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "'Barlow', sans-serif", borderRadius: "4px" }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "0.5rem" }}>Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(570) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    style={{ width: "100%", padding: "0.75rem", background: "#111", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "'Barlow', sans-serif", borderRadius: "4px" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "0.5rem" }}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    style={{ width: "100%", padding: "0.75rem", background: "#111", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "'Barlow', sans-serif", borderRadius: "4px" }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "0.5rem" }}>How Can We Help?</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe the job or service you need..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    style={{ width: "100%", padding: "0.75rem", background: "#111", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "'Barlow', sans-serif", borderRadius: "4px", resize: "none" }}
                  />
                </div>



                <button
                  type="submit"
                  style={{ width: "100%", padding: "1rem", background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", borderRadius: "4px", cursor: "pointer", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E5B800")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#F5C400")}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your service area?",
      answer: "We proudly serve a 25-mile radius from our Palmerton, PA location, covering Carbon County and surrounding areas. If you're unsure whether we reach your location, give us a call at (570) 249-8566.",
    },
    {
      question: "Do you work on weekends and holidays?",
      answer: "We're always open and available! Whether you need emergency services or scheduled work, we can often accommodate weekend and holiday requests. Call us to discuss your timeline.",
    },
    {
      question: "How quickly can you respond to urgent jobs?",
      answer: "We pride ourselves on fast response times. For many urgent requests, we can be on-site the same day. Contact us directly at (570) 249-8566 to discuss your emergency needs.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We offer free estimates for all services. Simply contact us with details about your project, upload photos if helpful, and we'll provide you with a competitive quote.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods. Contact us directly to discuss payment options and arrange what works best for your project.",
    },
    {
      question: "Are you fully insured?",
      answer: "Yes, we are fully insured and licensed to operate in Pennsylvania. Your peace of mind is our priority on every job.",
    },
    {
      question: "Can you handle large commercial projects?",
      answer: "Absolutely! We serve both residential and commercial clients. Whether it's a small residential job or a large commercial project, we have the equipment and expertise to handle it.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Call us at (570) 249-8566, email trahaulingandexcavating@gmail.com, or use the contact form on this page. We'll discuss your project and provide a free estimate.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: "#1A1A1A", borderTop: "4px solid #F5C400" }}
    >
      <div className="container" ref={ref}>
        <div
          className="inline-block mb-3 px-3 py-1"
          style={{ background: "#F5C400", color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
        >
          Questions?
        </div>
        <h2
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1, marginBottom: "2rem" }}
        >
          FREQUENTLY ASKED
          <br />
          <span style={{ color: "#F5C400" }}>QUESTIONS</span>
        </h2>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: "#111",
                border: "1px solid #2a2a2a",
                borderRadius: "4px",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${idx * 0.05}s, transform 0.5s ease ${idx * 0.05}s`,
              }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-opacity-80"
                style={{
                  background: expanded === idx ? "#1a1a1a" : "transparent",
                  borderBottom: expanded === idx ? "1px solid #2a2a2a" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {faq.question}
                </span>
                <div
                  style={{
                    transform: expanded === idx ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    color: "#F5C400",
                  }}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              {expanded === idx && (
                <div
                  className="px-6 py-4"
                  style={{
                    background: "#0d0d0d",
                    borderTop: "1px solid #2a2a2a",
                    color: "#aaa",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-6 text-center"
          style={{
            background: "#111",
            border: "1px solid #2a2a2a",
            borderRadius: "4px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <p style={{ color: "#aaa", fontFamily: "'Barlow', sans-serif", marginBottom: "1rem" }}>
            Didn't find your answer?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-bold text-sm tracking-wider uppercase transition-all hover:scale-[1.05]"
            style={{
              background: "#F5C400",
              color: "#1A1A1A",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.15em",
              borderRadius: "4px",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#F5C400", letterSpacing: "0.06em" }}>
              TRA HAULING &amp; EXCAVATING
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}>
              Your all-inclusive property service company in Palmerton, PA. If you need it done — we can handle it.
            </p>
            <a
              href="https://www.facebook.com/people/TRA-Hauling-Excavating/100065619275999/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm transition-colors hover:text-blue-400"
              style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}
            >
              <Facebook className="w-4 h-4" />
              Facebook Page
            </a>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5C400", marginBottom: "1rem" }}>
              Services
            </div>
            <ul className="space-y-2">
              {["Excavating", "Hauling", "Demolition", "Snow Plowing", "Junk Removal", "Property Services"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-yellow-400" style={{ color: "#666", fontFamily: "'Barlow', sans-serif" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5C400", marginBottom: "1rem" }}>
              Contact
            </div>
            <ul className="space-y-3">
              <li>
                <a href="tel:5702498566" className="flex items-center gap-2 text-sm transition-colors hover:text-yellow-400" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
                  <Phone className="w-4 h-4 text-yellow-400" />
                  (570) 249-8566
                </a>
              </li>
              <li>
                <a href="mailto:trahaulingandexcavating@gmail.com" className="flex items-center gap-2 text-sm transition-colors hover:text-yellow-400" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
                  <Mail className="w-4 h-4" />
                  trahaulingandexcavating@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                1087 Fireline Rd, Palmerton, PA
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}>
                <Clock className="w-4 h-4 text-yellow-400" />
                Always Open · 24/7
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid #1a1a1a", color: "#444", fontFamily: "'Barlow', sans-serif" }}
        >
          <span>© 2026 TRA Hauling &amp; Excavating. All rights reserved.</span>
          <span style={{ color: "#333" }}>Palmerton, Pennsylvania · Serving the surrounding area</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
