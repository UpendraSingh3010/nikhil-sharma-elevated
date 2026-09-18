import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Menu, MoveHorizontal, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { useAutoRail, useCountUp, useParallax, useTilt } from "@/hooks/use-motion";
import portrait from "@/assets/nikhil/portrait.webp";
import palaceDusk from "@/assets/elevated/palace-dusk.jpg";
import wildernessDawn from "@/assets/elevated/wilderness-dawn.jpg";
import backwatersGold from "@/assets/elevated/backwaters-gold.jpg";
import desertFort from "@/assets/elevated/desert-fort.jpg";
import paperTexture from "@/assets/elevated/paper-texture.jpg";

const SITE = "https://www.elevatedindia.com/";

const navItems = [
  ["My story", "#story"],
  ["Elevated India", "#company"],
  ["How I run it", "#ground"],
  ["Journeys", "#journeys"],
  ["Recognition", "#recognition"],
] as const;

const credentials = [
  "5.0 on TripAdvisor · 621+ reviews",
  "IATO Member",
  "Recognised by the Ministry of Tourism",
  "Two decades on India’s roads",
  "Own licensed guides & chauffeured fleet",
  "24/7 control room on every mile",
] as const;

const interests = [
  "Royal residences & palace life",
  "Wilderness & private safaris",
  "Spiritual & transformational",
  "Art, design & culture",
  "Celebrations & private events",
  "Family & multi-generational",
] as const;

const timeline = [
  ["Two decades earlier", "Learning India the slow way — its regions, languages and the families who keep its crafts alive."],
  ["The refusal", "Turning away from the package model: fixed routes, rented vehicles, borrowed guides."],
  ["Elevated India", "Founding a private luxury travel house with co-founder and director Manu Singh."],
  ["Ground brought in-house", "Licensed guides, an owned chauffeured fleet and a 24/7 control room on every mile."],
  ["2026", "Excellence in Curated Luxury Travel Experiences, ET NOW.IN Business Conclave & Awards."],
] as const;

const journeys = [
  {
    region: "Central India Reserves",
    days: "8–10 Days",
    title: "The Wild Heart of India",
    blurb:
      "Private safari vehicles, exclusive jungle lodges and expert naturalists in Kanha and Bandhavgarh — India’s last great wild places.",
    image: wildernessDawn,
  },
  {
    region: "Rajasthan",
    days: "16 Days",
    title: "Palaces & Wilderness",
    blurb:
      "Delhi to Udaipur’s lake palaces, the leopards of Jawai and the desert forts of Jodhpur and Jaipur — a wholly private royal passage.",
    image: desertFort,
  },
  {
    region: "North & South India",
    days: "16 Days",
    title: "Imperial Cities & Kerala Backwaters",
    blurb:
      "Delhi, Agra and Jaipur woven with Kerala’s tea hills and the still backwaters of Kumarakom, north and south in one seamless journey.",
    image: backwatersGold,
  },
  {
    region: "North India & Nepal",
    days: "12 Days",
    title: "Golden Triangle with Kathmandu",
    blurb:
      "A majestic passage across northern India’s imperial capitals and the sacred valleys of Nepal.",
    image: palaceDusk,
  },
] as const;

const principles = [
  [
    "Deep local intelligence",
    "I have spent two decades building intimate knowledge of India’s regions, cultures and communities — insight no algorithm can replicate.",
  ],
  [
    "Curated, not crowded",
    "I hand-select every element myself. Fewer choices, better choices, tailored precisely to your intent and sensibility.",
  ],
  [
    "Complete discretion",
    "Privacy is my first principle. I run the company with the discretion of a private household, not a public business.",
  ],
] as const;

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={`scroll-mt-16 ${className ?? ""}`}>
      <div ref={reveal.ref} className={reveal.className}>
        {children}
      </div>
    </section>
  );
}

function Stat({
  to,
  decimals = 0,
  suffix = "",
  label,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const count = useCountUp(to, 1500, decimals);
  return (
    <div className="stagger border-t border-ink/15 pt-5">
      <p className="font-serif text-4xl leading-none text-ink sm:text-5xl">
        <span ref={count.ref}>{count.display}</span>
        {suffix}
      </p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink/50">{label}</p>
    </div>
  );
}

export function NikhilLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const parallax = useParallax(0.16);
  const tiltRef = useTilt(6);
  const rail = useAutoRail(journeys.length, 3800);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <a href="#top" className="font-serif text-xl leading-none text-ivory transition-opacity hover:opacity-80 sm:text-2xl" aria-label="Nikhil Sharma, home">
            Nikhil<span className="text-primary"> Sharma</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="wipe-line text-[11px] uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild className="fill-sweep hidden h-9 rounded-none border border-primary/60 bg-transparent px-4 text-[11px] uppercase tracking-[0.16em] text-primary shadow-none transition-colors hover:text-primary-foreground sm:inline-flex">
            <a href="#invitation">Speak with me</a>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen((v) => !v)} className="text-ivory transition-transform hover:bg-ivory/10 hover:text-ivory active:scale-90 lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <div className="h-px w-full bg-ivory/10" aria-hidden="true">
          <div className="h-px bg-primary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
        </div>
        {menuOpen ? (
          <nav className="animate-fade-in border-t border-ivory/10 bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-4 text-sm uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        {/* Opening */}
        <section className="relative overflow-hidden pt-16">
          <img
            src={palaceDusk}
            alt="Lantern-lit palace courtyard at dusk in India"
            width={1920}
            height={1200}
            className="absolute inset-0 h-[118%] w-full object-cover will-change-transform"
            style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
          />
          <div className="absolute inset-0 bg-hero-scrim" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 lg:min-h-[780px] lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-7">
              <p className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary">
                <span className="h-px w-10 bg-primary" /> Founder &amp; CEO, Elevated India
              </p>
              <h1 className="mt-7 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] text-ivory">
                <span className="rise rise-delay-1 block">Nikhil</span>
                <span className="rise rise-delay-2 block italic text-primary">Sharma.</span>
              </h1>
              <p className="rise rise-delay-3 mt-7 max-w-[46ch] text-base leading-relaxed text-ivory/75 sm:text-lg">
                I did not want to sell India. I wanted to run it — every guide, every mile, every night — so that a journey through this country could finally be lived the way I believe it deserves.
              </p>
              <div className="rise rise-delay-4 mt-10 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-none bg-primary px-6 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-ivory">
                  <a href="#story">My story</a>
                </Button>
                <Button asChild variant="outline" className="fill-sweep h-12 rounded-none border-ivory/25 bg-transparent px-6 text-xs uppercase tracking-[0.16em] text-ivory transition-colors hover:text-primary-foreground">
                  <a href="#company">Elevated India</a>
                </Button>
              </div>
            </div>
            <figure className="rise rise-delay-2 relative lg:col-span-5">
              <div className="glow-breathe pointer-events-none absolute -inset-6 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
              <div
                ref={tiltRef}
                className="group relative aspect-[4/5] overflow-hidden border border-ivory/15 bg-ink/40 backdrop-blur-sm transition-transform duration-300 ease-out"
                style={{ transform: "perspective(1000px)" }}
              >
                <img src={portrait} alt="Nikhil Sharma, Founder and CEO of Elevated India" className="h-full w-full object-cover object-[68%_center] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
                <span className="pointer-events-none absolute inset-3 border border-primary/0 transition-all duration-500 group-hover:inset-4 group-hover:border-primary/60" aria-hidden="true" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ivory/45">
                Nikhil Sharma · Founder &amp; CEO, Elevated India
              </figcaption>
            </figure>
          </div>
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center transition-opacity duration-500 lg:flex ${scrolled ? "opacity-0" : "opacity-100"}`}
            aria-hidden="true"
          >
            <span className="scroll-cue flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ivory/50">
              Scroll
              <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
            </span>
          </div>
        </section>

        {/* Credential marquee */}
        <div className="marquee-mask group overflow-hidden border-y border-ivory/10 bg-background py-4">
          <div className="marquee-track gap-10 group-hover:[animation-play-state:paused]">
            {[...credentials, ...credentials].map((item, index) => (
              <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-10 text-[10px] uppercase tracking-[0.2em] text-ivory/45 transition-colors hover:text-primary sm:text-[11px]">
                {item}
                <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* My story */}
        <Section id="story" className="bg-ivory text-ink">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-4">
              <p className="section-label">(a) My story</p>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.98]">
                Most companies sell India. <span className="italic">I run it.</span>
              </h2>
              <div className="rule-draw mt-8 h-px w-40 gold-rule" aria-hidden="true" />
              <ol className="mt-10 space-y-6 border-l border-ink/15 pl-6">
                {timeline.map(([when, what]) => (
                  <li key={when} className="stagger group relative">
                    <span className="absolute -left-[1.6rem] top-2 h-1.5 w-1.5 rounded-full bg-ink/25 transition-colors group-hover:bg-primary" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-[0.18em] text-ink/45 transition-colors group-hover:text-primary">{when}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{what}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[60ch] text-lg leading-relaxed text-ink/70">
                I have spent two decades on India’s roads. Long before I had a company, I was learning the country the slow way — its regions, its languages, the families who keep its crafts and kitchens and palaces alive. That apprenticeship is the whole of my work.
              </p>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-ink/60">
                What I kept seeing was the same thing: travellers arriving with real curiosity and being handed a package. Fixed routes, rented vehicles, borrowed guides, a promise made by one company and kept — or not kept — by another. I refused to build that.
              </p>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-ink/60">
                So I built the opposite. My conviction is simple: you must own the ground you promise. If I tell you a morning will be unhurried and private, then the guide, the car and the room have to be mine to answer for. That single decision shaped everything that followed.
              </p>
              <blockquote className="mt-10 border-l border-primary pl-6 font-serif text-2xl leading-snug text-ink/80 sm:text-3xl">
                “India is not a destination to be efficiently toured. It is an experience to be gradually, intimately and personally understood.”
                <footer className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink/45">— Nikhil Sharma</footer>
              </blockquote>
              <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <Stat to={5} decimals={1} label="TripAdvisor rating" />
                <Stat to={621} suffix="+" label="Traveller reviews" />
                <Stat to={2} label="Decades on the road" />
                <Stat to={24} suffix="/7" label="Control room, every mile" />
              </div>
            </div>
          </div>
        </Section>

        {/* What I built */}
        <Section id="company" className="bg-background text-ivory">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-5">
              <p className="section-label">(b) What I built</p>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none">
                Elevated <span className="italic text-primary">India.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] leading-relaxed text-ivory/65">
                A private luxury travel house, not a package tour operator. Every itinerary is composed from scratch around your pace, your tastes and the occasion behind the trip — across India and Nepal.
              </p>
              <p className="mt-5 max-w-[46ch] leading-relaxed text-ivory/55">
                I lead the company with my co-founder and director, Manu Singh, with ground operations running through India Personal Tours.
              </p>
              <Button asChild variant="outline" className="fill-sweep group mt-9 h-12 rounded-none border-ivory/25 bg-transparent px-6 text-xs uppercase tracking-[0.16em] text-ivory transition-colors hover:text-primary-foreground">
                <a href={SITE} target="_blank" rel="noreferrer">
                  elevatedindia.com <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-7">
              <div className="group relative aspect-[4/3] overflow-hidden">
                <img src={desertFort} alt="A hilltop desert fort in Rajasthan at golden hour" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" aria-hidden="true" />
              </div>
              <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {interests.map((item, index) => (
                  <p key={item} className="stagger wipe-line group flex items-baseline gap-3 border-t border-ivory/15 pt-4 text-sm text-ivory/70 transition-colors hover:text-ivory">
                    <span className="font-serif text-primary transition-transform duration-300 group-hover:translate-x-0.5">0{index + 1}</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* How I run it */}
        <Section id="ground" className="bg-ivory text-ink">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-4">
              <p className="section-label">(c) How I run it</p>
              <h2 className="mt-6 font-serif text-[clamp(2.3rem,4.5vw,3.8rem)] leading-none">
                Privately designed. Personally run.
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-ink/60">
                I keep the licensed guides, the chauffeured fleet and a 24/7 control room in-house, on every mile. That is the single fact that keeps a journey unhurried, seamless and discreet.
              </p>
              <div className="rule-draw mt-8 h-px w-40 gold-rule" aria-hidden="true" />
            </div>
            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
              {principles.map(([title, body], index) => (
                <article key={title} className="stagger group border-t border-ink/15 pt-5 transition-colors hover:border-primary">
                  <p className="font-serif text-2xl text-primary transition-transform duration-500 group-hover:-translate-y-1">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Journeys */}
        <Section id="journeys" className="relative overflow-hidden bg-ink text-ivory">
          <img src={paperTexture} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.05]" loading="lazy" />
          <div className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
              <p className="section-label">(d) The journeys I curate</p>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-none">
                Journeys of rare <span className="italic text-primary">distinction.</span>
              </h2>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/55">
                  A few of the flagship itineraries I compose most often. Each one is a living journey — not a package, but a carefully composed narrative.
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ivory/40">
                    <MoveHorizontal className="size-4 text-primary" aria-hidden="true" /> Drag to explore
                  </span>
                  <Button variant="outline" size="icon" onClick={rail.prev} aria-label="Previous journey" className="size-10 rounded-none border-ivory/25 bg-transparent text-ivory hover:bg-primary hover:text-primary-foreground">
                    <ArrowLeft className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={rail.next} aria-label="Next journey" className="size-10 rounded-none border-ivory/25 bg-transparent text-ivory hover:bg-primary hover:text-primary-foreground">
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div
              ref={rail.ref}
              {...rail.pauseHandlers}
              className="venture-scroll mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-8 lg:px-12"
            >
              {journeys.map((journey) => (
                <article key={journey.title} className="group relative h-[460px] w-[80vw] shrink-0 snap-start overflow-hidden transition-transform duration-500 hover:-translate-y-2 sm:w-[340px]">
                  <img src={journey.image} alt={journey.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" aria-hidden="true" />
                  <span className="pointer-events-none absolute inset-3 border border-primary/0 transition-all duration-500 group-hover:inset-4 group-hover:border-primary/70" aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4">
                    <span className="bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">{journey.days}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-primary">{journey.region}</p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight text-ivory transition-transform duration-500 group-hover:-translate-y-1">{journey.title}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/75 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:max-h-32 group-focus-within:opacity-100">
                      {journey.blurb}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 lg:px-12">
              <a href={SITE} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border-b border-primary pb-1 text-xs uppercase tracking-[0.16em] text-ivory transition-colors hover:text-primary">
                View all journeys <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="flex items-center gap-2" role="tablist" aria-label="Journey slides">
                {journeys.map((journey, index) => (
                  <button
                    key={journey.title}
                    type="button"
                    role="tab"
                    aria-selected={rail.index === index}
                    aria-label={journey.title}
                    onClick={() => rail.scrollTo(index)}
                    className={`h-px transition-all duration-500 ${rail.index === index ? "w-10 bg-primary" : "w-5 bg-ivory/25 hover:bg-ivory/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Recognition */}
        <Section id="recognition" className="bg-background text-ivory">
          <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
            <p className="section-label">(e) Recognition</p>
            <div className="mt-6 grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-none">
                  Excellence in curated <span className="italic text-primary">luxury travel.</span>
                </h2>
                <div className="rule-draw mt-8 h-px w-40 gold-rule" aria-hidden="true" />
                <p className="mt-8 max-w-[52ch] leading-relaxed text-ivory/65">
                  My company was awarded at the ET NOW.IN Business Conclave &amp; Awards 2026, West Edition — Mumbai, 25 August 2026.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="group relative overflow-hidden border border-ivory/15 bg-ivory/[0.03] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50 sm:p-12">
                  <span className="sheen" aria-hidden="true" />
                  <Award className="size-8 text-primary transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                    Excellence in Curated Luxury Travel Experiences
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-ivory/45">
                    ET NOW.IN Business Conclave &amp; Awards 2026 · West Edition · Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Invitation */}
        <Section id="invitation" className="relative overflow-hidden">
          <img src={backwatersGold} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-28 text-center lg:px-12 lg:py-36">
            <p className="section-label">An invitation</p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.94] text-ivory">
              Let me show you <span className="italic text-primary">my India.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl leading-relaxed text-ivory/65">
              Begin with a conversation. My team and I will compose something entirely your own, from the first idea to the last mile.
            </p>
            <Button asChild className="group mt-10 h-12 rounded-none bg-primary px-8 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-ivory">
              <a href={SITE} target="_blank" rel="noreferrer">
                Visit elevatedindia.com <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </Section>
      </main>

      <footer className="border-t border-ivory/10 bg-background text-ivory/40">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-7 text-[10px] uppercase tracking-[0.14em] sm:flex-row sm:justify-between lg:px-12">
          <span>Nikhil Sharma · Founder &amp; CEO, Elevated India</span>
          <span>Independent tribute concept · 2026</span>
        </div>
      </footer>
    </div>
  );
}
