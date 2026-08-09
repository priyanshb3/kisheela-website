"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Users,
  Mic2,
  Megaphone,
  UserPlus,
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

const ABOUT_CARDS = [
  {
    title: "Rooted in Compassion.\nGrowing Through Community.",
    body: "Kisheela is a community movement born from the belief that lasting change begins with people who choose to care. Founded in Bulandshahr as a social impact initiative by R.K. & Daughters, Kisheela works to empower women through skill development, leadership opportunities, and education while supporting children from underserved communities with scholarships, learning resources, and mentorship. As the movement grows across NCR, our vision remains unchanged: to create communities where every woman can pursue independence and every child has the opportunity to dream, learn, and thrive.",
  },
  {
    title: "Child Education",
    body: "Every child holds the potential to transform their family's future. We remove the barriers — financial, social, and geographic — so no child is left behind on the basis of circumstance.",
  },
  {
    title: "Community Development",
    body: "Lasting change requires collective action. We build bridges between individuals, institutions, and ideas — fostering an ecosystem where communities thrive together.",
  },
];

const PILLARS = [
  {
    icon: Sparkles,
    title: "Women's Skill Development",
    body: "Practical, market-aligned training in tailoring, handicrafts, digital literacy, and financial management — giving women the tools to earn independently.",
  },
  {
    icon: GraduationCap,
    title: "Girl Child Education",
    body: "Bridging the enrolment gap for girls through community mobilisation, remedial support, and safe learning environments that families trust.",
  },
  {
    icon: GraduationCap,
    title: "Educational Scholarships",
    body: "Merit and need-based scholarships ensuring financial constraints never derail a child's educational journey from primary school through higher education.",
  },
  {
    icon: Mic2,
    title: "Leadership Workshops",
    body: "Structured sessions on public speaking, negotiation, community organising, and self-advocacy — nurturing the next generation of women leaders.",
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    body: "Health, hygiene, legal rights, and civic participation campaigns that inform and mobilise entire neighbourhoods toward collective progress.",
  },
  {
    icon: UserPlus,
    title: "Membership",
    body: "Connecting young women with professionals, entrepreneurs, and educators who invest time, guidance, and resources into their growth.",
  },
];

const CO_FOUNDERS = [
  {
    name: "Radhika Bansal",
    tags: ["Entrepreneur", "Community Builder", "Changemaker"],
    image:
      "03174edc-4112-4716-aaef-c201403439bd.jpg",
    bio: "Based in Bulandshahr, Uttar Pradesh, Radhika Bansal is the proprietor of R.K. & Daughters. Alongside building her business, she has always believed that true success is measured by the lives we uplift. Driven by a deep passion for women's empowerment and equal access to education, she co-founded Kisheela as a community movement that empowers women through skill development and leadership, while helping underprivileged children receive quality education and brighter opportunities.",
    quote:
      "When a woman is empowered, a family grows stronger. When a child is educated, an entire generation moves forward.",
  },
  {
    name: "Priyanka Bansal",
    tags: ["Businesswoman"],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    bio: "Priyanka Bansal is the Proprietor of Krishna Marketing Company and Co-Founder of Kisheela. Driven by a passion for women's empowerment and education, she is committed to creating opportunities that help women and children build brighter, more independent futures.",
    quote:
      "Real change doesn't arrive from outside a community — it's built by the people already living inside it.",
  },
];

const STATS = [
  { label: "Women Empowered", value: "450+" },
  { label: "Children Supported", value: "620+" },
  { label: "Scholarships Provided", value: "180+" },
  { label: "Community Workshops", value: "95+" },
  { label: "Volunteers", value: "60+" },
];

const TESTIMONIALS = [
  {
    quote:
      "Kisheela gave me the confidence I never knew I had. The leadership workshop changed how I see myself — not just as a mother, but as someone whose voice matters in this community.",
    name: "Participant Name",
    role: "Leadership Program, Bulandshahr",
  },
  {
    quote:
      "My daughter received a scholarship through Kisheela, and it was the first in our family to attend college. This movement has changed our family's story forever.",
    name: "Participant Name",
    role: "Scholarship Program, Parent",
  },
  {
    quote:
      "Volunteering with Kisheela showed me that sustainable change is possible when it comes from within the community. I leave every session more inspired than I arrived.",
    name: "Volunteer Name",
    role: "Volunteer, NCR Program",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      setFormStatus("sent");

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
      setFormStatus("idle");
    }
  };

  return (
    <main className="bg-cream text-ink">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-2xl italic text-terracotta">
            <span aria-hidden className="not-italic text-lg">✺</span>
            Kisheela
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-ink/75 transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://forms.gle/QuLW9ssitipjwWtQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="ounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-cream shadow-sm shadow-terracotta/30 transition-transform hover:scale-[1.03] hover:bg-clay"  
            >
              Join the Movement
            </a>
          </div>

          <button
            className="lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-ink/5 bg-cream px-6 pb-6 lg:hidden">
            <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-ink/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/QuLW9ssitipjwWtQ9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-terracotta px-6 py-2.5 text-center text-sm font-medium text-cream"
              >
                Join the Movement
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Students standing together"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-cream/20" />
        </div>

        <div className="relative mx-auto max-w-content px-6 pb-24 pt-14 sm:pb-32 sm:pt-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-cream/80 px-4 py-2 text-xs font-medium tracking-wide text-ink/70">
            <MapPin size={14} className="text-terracotta" />
            Bulandshahr &amp; NCR
          </span>

          <div className="mb-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-terracotta">
            <span>Community Movement</span>
            <span className="text-ink/30">·</span>
            <span>Rooted in UP</span>
            <span className="text-ink/30">·</span>
            <span>Growing Across NCR</span>
          </div>

          <h1 className="max-w-2xl font-display text-5xl leading-[1.08] text-ink sm:text-6xl">
            Every Woman Deserves{" "}
            <em className="text-terracotta not-italic font-medium italic">Opportunity.</em>
            <br />
            Every Child Deserves <em className="text-sage font-medium italic">Hope.</em>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/70">
            Kisheela is a community movement dedicated to empowering women through education,
            skill development, leadership and opportunity — while helping children from
            underserved communities gain access to learning, scholarships, and brighter
            futures.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://forms.gle/QuLW9ssitipjwWtQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-cream shadow-md shadow-terracotta/25 transition-transform hover:scale-[1.03] hover:bg-clay"
            >
              Join the Movement <ArrowRight size={16} />
            </a>
            <a
              href="#programs"
              className="rounded-full border border-ink/15 bg-cream/70 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-terracotta/40 hover:text-terracotta"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["450+ Women Empowered", "620+ Children Supported", "Bulandshahr & NCR"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-cream/80 px-4 py-2 text-xs font-medium text-ink/70"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* MOTIF DIVIDER */}
      <div className="motif-row py-8" aria-hidden>
        <span className="dot" /><span className="dot" /><span>✺</span>
        <span className="dot" /><span>◈</span><span className="dot" />
        <span>✺</span><span className="dot" /><span className="dot" />
      </div>

      {/* ABOUT */}
      <section id="about" className="paisley-bg">
        <div className="mx-auto max-w-content px-6 py-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            About Kisheela
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl text-ink sm:text-5xl text-balance">
            A movement, not a charity.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            Kisheela means <em className="italic">ascent</em> — a rising. We are a community-led
            social impact initiative rooted in Bulandshahr, Uttar Pradesh, growing across the
            NCR region. We believe sustainable change is born from within communities, not
            delivered from the outside.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {ABOUT_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-terracotta/15 bg-cream/90 p-6 shadow-sm shadow-ink/5 transition-transform hover:-translate-y-1"
              >
                <h3 className="font-display text-lg text-terracotta">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section id="programs" className="bg-sand/60">
        <div className="mx-auto max-w-content px-6 py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Our Programs
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
                Six pillars of change.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              Each program is designed to move giving, systemic impact — not temporary relief.
              Together they form a complete ecosystem of empowerment.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-ink/8 bg-cream p-7 transition-all hover:border-terracotta/30 hover:shadow-md hover:shadow-terracotta/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{pillar.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEET THE CO-FOUNDERS (renamed from "Meet the Founder") */}
      <section id="founders" className="mx-auto max-w-content px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Meet the Co-Founders
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl text-ink sm:text-5xl">
          Two women, one belief.
        </h2>

        <div className="mt-14 space-y-16">
          {CO_FOUNDERS.map((founder, i) => (
            <div
              key={founder.name}
              className={`grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}, Kisheela co-founder`}
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg shadow-ink/10"
                />
                <span className="absolute -bottom-4 left-4 rounded-xl bg-cream px-4 py-2 text-xs font-medium text-ink/70 shadow-md shadow-ink/10">
                  Co-Founder, Kisheela
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl text-ink">{founder.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-terracotta/25 px-3 py-1 text-xs font-medium text-terracotta"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{founder.bio}</p>

                <blockquote className="mt-6 rounded-xl border border-terracotta/15 bg-terracotta/5 p-5">
                  <p className="font-display italic leading-relaxed text-ink/85">
                    “{founder.quote}”
                  </p>
                  <cite className="mt-3 block text-sm not-italic text-terracotta">
                    — {founder.name}, Co-Founder
                  </cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-content px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Our Impact
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Progress in numbers.</h2>
          <p className="mt-4 text-sm text-cream/50">Values are updated each quarter.</p>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-terracotta sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-cream/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-sand/50">
        <div className="mx-auto max-w-content px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Stories
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            Voices from the movement.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => {
              const active = i === activeTestimonial;
              return (
                <button
                  key={t.name + i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`rounded-2xl p-7 text-left transition-colors ${
                    active
                      ? "bg-ink text-cream shadow-xl shadow-ink/20"
                      : "bg-cream text-ink/75 border border-ink/8 hover:border-terracotta/30"
                  }`}
                >
                  <p className="font-display text-lg italic leading-snug">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                        active ? "bg-terracotta text-cream" : "bg-terracotta/10 text-terracotta"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className={`text-xs ${active ? "text-cream/60" : "text-ink/50"}`}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeTestimonial ? "w-6 bg-terracotta" : "w-1.5 bg-ink/15"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-content px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Get In Touch
            </p>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Let's grow <em className="italic text-terracotta font-medium">together.</em>
            </h2>

            <ul className="mt-8 space-y-5 text-sm text-ink/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="font-medium text-ink">Office Address</p>
                  <p>Bulandshahr, Uttar Pradesh, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="font-medium text-ink">Email</p>
                  <p>hello@kisheela.org</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="font-medium text-ink">Phone</p>
                  <p>+91 12345 67890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="font-medium text-ink">Working Hours</p>
                  <p>Mon – Sat, 9:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-terracotta/40 hover:text-terracotta"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="mt-8 flex h-52 items-center justify-center rounded-2xl border border-dashed border-ink/15 bg-sand/40 text-sm text-ink/40">
              Interactive map goes here
            </div>
          </div>

          <div className="rounded-2xl border border-ink/8 bg-sand/40 p-8">
            <h3 className="font-display text-2xl text-ink">Send a message</h3>
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="18ebce84-8d21-4ba2-90db-565089ff2801"
              />

              <input
                type="hidden"
                name="subject"
                value="New message from Kisheela Website"
              />  
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-ink/12 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-ink/12 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 12345 67890"
                  className="w-full rounded-lg border border-ink/12 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How would you like to get involved?"
                  className="w-full rounded-lg border border-ink/12 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-terracotta"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
              >
                {formStatus === "sent" ? "Message sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl italic text-terracotta">✺ Kisheela</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed">
                Empowering Women. Nurturing Children. A social impact initiative by
                R.K. &amp; Daughters.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cream/40">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-terracotta">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cream/40">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Bulandshahr, Uttar Pradesh</li>
                <li>hello@kisheela.org</li>
                <li>+91 12345 67890</li>
              </ul>
              <div className="mt-4 flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-terracotta/50 hover:text-terracotta"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
            © {new Date().getFullYear()} Kisheela. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
