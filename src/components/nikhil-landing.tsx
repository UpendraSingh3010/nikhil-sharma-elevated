import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Building2, Check, Compass, Menu, MoveHorizontal, ShieldCheck, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { useAutoRail, useCountUp, useParallax, useTilt } from "@/hooks/use-motion";
import portrait from "@/assets/nikhil/portrait.webp";
import palaceDusk from "@/assets/elevated/palace-dusk.jpg";
import wildernessDawn from "@/assets/elevated/wilderness-dawn.jpg";
import backwatersGold from "@/assets/elevated/backwaters-gold.jpg";
import desertFort from "@/assets/elevated/desert-fort.jpg";
import paperTexture from "@/assets/elevated/paper-texture.jpg";
import dunesDusk from "@/assets/elevated/dunes-dusk.jpg";
import fortWalls from "@/assets/elevated/fort-walls.jpg";
import artisanHands from "@/assets/elevated/artisan-hands.jpg";
import palaceNight from "@/assets/elevated/palace-night.jpg";
import backwaterDawn from "@/assets/elevated/backwater-dawn.jpg";
import marketTexture from "@/assets/elevated/market-texture.jpg";
import consultantsCover from "@/assets/nikhil/consultants-review.webp";
import siliconIndiaCover from "@/assets/nikhil/siliconindia.webp";

const SITE = "https://www.elevatedindia.com/";

const navItems = [
  ["My story", "#story"],
  ["Timeline", "#timeline"],
  ["Elevated India", "#company"],
  ["Journeys", "#journeys"],
  ["Beyond travel", "#beyond"],
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
  { index: "01", title: "Royal residences & palace life", note: "Heritage estates, private access and stays with a true sense of place.", image: desertFort, href: `${SITE}journeys/category/royal-heritage` },
  { index: "02", title: "Wilderness & private safaris", note: "Private vehicles, expert naturalists and India’s great reserves.", image: wildernessDawn, href: `${SITE}journeys/category/wildlife-safari` },
  { index: "03", title: "Spiritual & transformational", note: "Sacred rivers, quiet rituals and encounters that are never staged.", image: backwaterDawn, href: `${SITE}journeys/category/spiritual-sacred` },
  { index: "04", title: "Art, design & culture", note: "Living craft, architecture and makers met in their own world.", image: artisanHands, href: `${SITE}journeys/category/culture-craft` },
  { index: "05", title: "Celebrations & private events", note: "Occasions composed around family, place and complete discretion.", image: palaceNight, href: `${SITE}celebrations` },
  { index: "06", title: "Family & multi-generational", note: "Many generations, one rhythm, with every detail handled privately.", image: palaceDusk, href: `${SITE}journeys/category/family` },
] as const;

const founderTimeline = [
  { year: "2005", title: "A working life begins", body: "My wider entrepreneurial journey began in 2005 — learning how strategy becomes delivery, and how a promise earns trust only through execution." },
  { year: "20+ years", title: "Across sectors and ventures", body: "I built and advised businesses across strategy, digital transformation and growth. Those years made systems, accountability and detail instinctive." },
  { year: "Elevated India", title: "A private travel house", body: "With Manu Singh, I created a company that composes India and Nepal around one traveller at a time rather than selling a fixed package." },
  { year: "Today", title: "The ground is ours", body: "Licensed guides, a chauffeured fleet and a 24/7 control room bring the most important parts of every journey under our own care." },
] as const;

const operatingModel = [
  ["01", "Conversation", "We begin with why you are travelling, not a list of monuments."],
  ["02", "Composition", "Pace, stays and access are selected around your sensibility."],
  ["03", "Private access", "Local relationships open the right doors without turning culture into theatre."],
  ["04", "Ground command", "Our guides, fleet and control room carry the promise through every mile."],
] as const;

const seasons = [
  { when: "October — April", title: "Tiger season", body: "The prime window for India’s central reserves; safari permits are finite and release ahead.", image: wildernessDawn },
  { when: "8 November 2026", title: "Diwali across the palaces", body: "Jaipur and Udaipur illuminated for the festival; the most characterful rooms go first.", image: palaceNight },
  { when: "17—24 November 2026", title: "Pushkar Camel Fair", body: "A singular desert gathering approached through private camps and careful timing.", image: dunesDusk },
] as const;

const broaderWork = [
  ["Entrepreneur", "Founder of multiple ventures across growth, media, technology and culture."],
  ["Strategist", "Two decades applying business strategy and digital transformation to real operations."],
  ["Mentor & investor", "Supporting founders with practical frameworks for sustainable, investor-ready growth."],
] as const;

const chapters = [
  {
    index: "01",
    when: "Two decades earlier",
    title: "Learning the country the slow way",
    body:
      "Long before I had a company, I was travelling India without a script — its regions, its languages, the families who keep its crafts, kitchens and palaces alive. That apprenticeship is the whole of my work.",
    image: artisanHands,
    alt: "An artisan block-printing indigo cloth by hand",
  },
  {
    index: "02",
    when: "The refusal",
    title: "I would not sell a package",
    body:
      "Travellers were arriving with real curiosity and being handed fixed routes, rented vehicles and borrowed guides — a promise made by one company and kept, or not kept, by another. I refused to build that.",
    image: fortWalls,
    alt: "Carved sandstone fort walls in golden evening light",
  },
  {
    index: "03",
    when: "Elevated India",
    title: "A private travel house instead",
    body:
      "I founded Elevated India with my co-founder and director, Manu Singh: a house that composes every itinerary from scratch, around one guest at a time, across India and Nepal.",
    image: palaceNight,
    alt: "A lantern-lit palace courtyard reflected in still water at night",
  },
  {
    index: "04",
    when: "Ground brought in-house",
    title: "You must own the ground you promise",
    body:
      "Licensed guides, an owned chauffeured fleet and a 24/7 control room on every mile. If I tell you a morning will be unhurried and private, the guide, the car and the room have to be mine to answer for.",
    image: dunesDusk,
    alt: "Desert dunes at dusk with a distant caravan on the ridge",
  },
] as const;

const filters = ["All journeys", "Palaces", "Wilderness", "Culture", "Backwaters"] as const;

const journeys = [
  {
    region: "Central India Reserves",
    days: "8–10 Days",
    title: "The Wild Heart of India",
    blurb:
      "Private safari vehicles, exclusive jungle lodges and expert naturalists in Kanha and Bandhavgarh — India’s last great wild places.",
    image: wildernessDawn,
    tags: ["Wilderness"],
  },
  {
    region: "Rajasthan",
    days: "16 Days",
    title: "Palaces & Wilderness",
    blurb:
      "Delhi to Udaipur’s lake palaces, the leopards of Jawai and the desert forts of Jodhpur and Jaipur — a wholly private royal passage.",
    image: desertFort,
    tags: ["Palaces", "Wilderness"],
  },
  {
    region: "North & South India",
    days: "16 Days",
    title: "Imperial Cities & Kerala Backwaters",
    blurb:
      "Delhi, Agra and Jaipur woven with Kerala’s tea hills and the still backwaters of Kumarakom, north and south in one seamless journey.",
    image: backwatersGold,
    tags: ["Backwaters", "Culture"],
  },
  {
    region: "North India & Nepal",
    days: "12 Days",
    title: "Golden Triangle with Kathmandu",
    blurb:
      "A majestic passage across northern India’s imperial capitals and the sacred valleys of Nepal.",
    image: palaceDusk,
    tags: ["Culture", "Palaces"],
  },
] as const;

const gallery = [
  [dunesDusk, "Desert dunes at dusk", "Evenings in the Thar, paced around silence and firelight."],
  [palaceNight, "Palace courtyard at night", "Heritage stays chosen for atmosphere, not for stars."],
  [artisanHands, "Artisan hands at work", "Makers and workshops seen up close, never staged."],
  [fortWalls, "Fort walls at golden hour", "Heritage walks timed for the light and the quiet."],
  [backwaterDawn, "Backwaters at dawn", "Slow water, early mist, nothing on the schedule."],
  [marketTexture, "Market colour and brass", "Markets explored with context and unhurried curiosity."],
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

function Chapter({ chapter, flip }: { chapter: (typeof chapters)[number]; flip: boolean }) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div ref={reveal.ref} className={`${reveal.className} border-t border-ivory/10`}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
        <figure
          className={`zoom-frame group relative overflow-hidden lg:col-span-6 ${flip ? "slide-r lg:order-2" : "slide-l"}`}
        >
          <img
            src={chapter.image}
            alt={chapter.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <span className="vignette opacity-60" aria-hidden="true" />
          <span className="pointer-events-none absolute inset-4 border border-primary/0 transition-all duration-700 group-hover:inset-6 group-hover:border-primary/50" aria-hidden="true" />
        </figure>
        <div className={`lg:col-span-6 ${flip ? "slide-l lg:order-1" : "slide-r"}`}>
          <div className="flex items-baseline gap-5">
            <span className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-none text-primary/25">
              {chapter.index}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-primary">{chapter.when}</span>
          </div>
          <h3 className="mt-4 max-w-[26ch] font-serif text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.02] text-ivory">
            {chapter.title}
          </h3>
          <div className="rule-draw gold-rule mt-6 h-px w-32" aria-hidden="true" />
          <p className="mt-6 max-w-[52ch] leading-relaxed text-ivory/60">{chapter.body}</p>
        </div>
      </div>
    </div>
  );
}

export function NikhilLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All journeys");
  const [principleIndex, setPrincipleIndex] = useState(0);
  const parallax = useParallax(0.16);
  const tiltRef = useTilt(6);

  const visibleJourneys = useMemo(
    () =>
      filter === "All journeys"
        ? journeys
        : journeys.filter((journey) => journey.tags.some((tag) => tag === filter)),
    [filter],
  );
  const rail = useAutoRail(visibleJourneys.length, 3800);
  const active = visibleJourneys[Math.min(rail.index, visibleJourneys.length - 1)] ?? journeys[0];
  const activePrinciple = principles[principleIndex] ?? principles[0];

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
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="wipe-line text-[11px] uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild className="fill-sweep hidden h-9 rounded-none border border-primary/60 bg-transparent px-4 text-[11px] uppercase tracking-[0.16em] text-primary shadow-none transition-colors hover:text-primary-foreground sm:inline-flex">
            <a href="#invitation">Speak with me</a>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen((v) => !v)} className="text-ivory transition-transform hover:bg-ivory/10 hover:text-ivory active:scale-90 xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <div className="h-px w-full bg-ivory/10" aria-hidden="true">
          <div className="h-px bg-primary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
        </div>
        {menuOpen ? (
          <nav className="animate-fade-in border-t border-ivory/10 bg-background px-5 py-4 xl:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-4 text-sm uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block" aria-label="Page chapters">
          <ol className="space-y-4 border-r border-ivory/15 pr-4 text-right">
            {navItems.map(([label, href], index) => (
              <li key={href}>
                <a href={href} className="group flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.2em] text-ivory/35 transition-colors hover:text-primary">
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">{label}</span>
                  <span className="font-serif text-xs text-primary/60">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
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
          <span className="vignette" aria-hidden="true" />
          <span className="grain" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 lg:min-h-[780px] lg:grid-cols-12 lg:px-12">
            <div className="relative lg:col-span-7">
              <span className="glow-radial -left-24 -top-16 hidden size-[420px] lg:block" aria-hidden="true" />
              <p className="rise relative flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary">
                <span className="h-px w-10 bg-primary" /> Founder &amp; CEO, Elevated India
              </p>
              <h1 className="relative mt-7 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] text-ivory">
                <span className="rise rise-delay-1 block">Nikhil</span>
                <span className="rise rise-delay-2 block italic text-primary">Sharma.</span>
              </h1>
              <p className="rise rise-delay-3 relative mt-7 max-w-[46ch] text-base leading-relaxed text-ivory/75 sm:text-lg">
                I did not want to sell India. I wanted to run it — every guide, every mile, every night — so that a journey through this country could finally be lived the way I believe it deserves.
              </p>
              <div className="rise rise-delay-4 relative mt-10 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-none bg-primary px-6 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-ivory">
                  <a href="#story">My story</a>
                </Button>
                <Button asChild variant="outline" className="fill-sweep h-12 rounded-none border-ivory/25 bg-transparent px-6 text-xs uppercase tracking-[0.16em] text-ivory transition-colors hover:text-primary-foreground">
                  <a href="#company">Elevated India</a>
                </Button>
              </div>
            </div>
            <figure className="rise rise-delay-2 relative lg:col-span-5 lg:translate-y-8">
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
              <div className="absolute -bottom-12 -left-10 hidden border-l border-primary/60 bg-background/80 px-6 py-4 backdrop-blur-md lg:block">
                <p className="text-[9px] uppercase tracking-[0.22em] text-primary">The standard</p>
                <p className="mt-2 max-w-[24ch] font-serif text-lg leading-tight text-ivory">A promise should be owned from the first conversation to the last mile.</p>
              </div>
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

        <div className="relative z-10 border-y border-ivory/10 bg-ink/95">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-ivory/10 px-5 sm:grid-cols-5 lg:px-12">
            {[
              ["Founder & CEO", "Elevated India"],
              ["Since 2005", "Entrepreneurial journey"],
              ["India + Nepal", "Private journeys"],
              ["Owned ground", "Guides & fleet"],
              ["24/7", "Journey control"],
            ].map(([value, label]) => (
              <div key={value} className="group px-4 py-5 transition-colors hover:bg-primary/10 sm:px-5">
                <p className="font-serif text-lg text-ivory transition-colors group-hover:text-primary">{value}</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-ivory/35">{label}</p>
              </div>
            ))}
          </div>
        </div>

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
        <Section id="story" className="relative overflow-hidden bg-ivory text-ink">
          <span className="paper-grid" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-5">
              <p className="section-label">01 — My story</p>
              <h2 className="line-rise mt-6 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.98]">
                <span>Most companies</span>
                <span>sell India.</span>
                <span className="italic">I run it.</span>
              </h2>
              <div className="rule-draw gold-rule mt-8 h-px w-40" aria-hidden="true" />
              <blockquote className="mt-10 border-l border-primary pl-6 font-serif text-2xl leading-snug text-ink/80 sm:text-3xl">
                “India is not a destination to be efficiently toured. It is an experience to be gradually, intimately and personally understood.”
                <footer className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink/45">— Nikhil Sharma</footer>
              </blockquote>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-[60ch] text-lg leading-relaxed text-ink/70">
                I have spent two decades on India’s roads. Long before I had a company, I was learning the country the slow way — its regions, its languages, the families who keep its crafts and kitchens and palaces alive. That apprenticeship is the whole of my work.
              </p>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-ink/60">
                What I kept seeing was the same thing: travellers arriving with real curiosity and being handed a package. Fixed routes, rented vehicles, borrowed guides, a promise made by one company and kept — or not kept — by another. I refused to build that.
              </p>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-ink/60">
                So I built the opposite. My conviction is simple: you must own the ground you promise. If I tell you a morning will be unhurried and private, then the guide, the car and the room have to be mine to answer for. That single decision shaped everything that followed.
              </p>
              <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <Stat to={5} decimals={1} label="TripAdvisor rating" />
                <Stat to={621} suffix="+" label="Traveller reviews" />
                <Stat to={2} label="Decades on the road" />
                <Stat to={24} suffix="/7" label="Control room, every mile" />
              </div>
            </div>
          </div>
        </Section>

        {/* Founder timeline */}
        <Section id="timeline" className="relative overflow-hidden bg-background text-ivory">
          <span className="grain" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="section-label">02 — Founder timeline</p>
                <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.98]">
                  The work before <span className="italic text-primary">the journeys.</span>
                </h2>
                <p className="mt-7 max-w-[38ch] leading-relaxed text-ivory/55">
                  Elevated India carries the same discipline I learned building and advising businesses: clarity, systems and personal accountability.
                </p>
              </div>
              <div className="relative lg:col-span-8">
                <span className="absolute bottom-0 left-[5.5rem] top-0 hidden w-px bg-primary/25 sm:block" aria-hidden="true" />
                {founderTimeline.map((item, index) => (
                  <article key={item.title} className="stagger group grid gap-4 border-t border-ivory/10 py-7 sm:grid-cols-[5rem_1fr] sm:gap-8">
                    <p className="font-serif text-lg text-primary">{item.year}</p>
                    <div className="relative sm:pl-8">
                      <span className="absolute -left-[2.55rem] top-2 hidden size-2 rounded-full border border-primary bg-background transition-transform group-hover:scale-150 sm:block" aria-hidden="true" />
                      <h3 className="font-serif text-2xl transition-transform duration-500 group-hover:translate-x-1">{item.title}</h3>
                      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ivory/55">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Chapters */}
        <section id="chapters" className="relative overflow-hidden scroll-mt-16 bg-background">
          <span className="grain" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 pt-24 lg:px-12 lg:pt-32">
              <p className="section-label">03 — Chapters</p>
            <h2 className="mt-6 max-w-[22ch] font-serif text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.98] text-ivory">
              How the work came <span className="italic text-primary">together.</span>
            </h2>
          </div>
          <div className="relative mt-14">
            {chapters.map((chapter, index) => (
              <Chapter key={chapter.index} chapter={chapter} flip={index % 2 === 1} />
            ))}
          </div>
        </section>

        {/* What I built */}
        <Section id="company" className="relative overflow-hidden bg-ivory text-ink">
          <span className="paper-grid" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-5">
               <p className="section-label">04 — What I built</p>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none">
                Elevated <span className="italic text-primary">India.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] leading-relaxed text-ink/70">
                A private luxury travel house, not a package tour operator. Every itinerary is composed from scratch around your pace, your tastes and the occasion behind the trip — across India and Nepal.
              </p>
              <p className="mt-5 max-w-[46ch] leading-relaxed text-ink/55">
                I lead the company with my co-founder and director, Manu Singh, with ground operations running through India Personal Tours.
              </p>
               <div className="mt-10 flex gap-2" role="tablist" aria-label="My operating principles">
                 {principles.map(([title], index) => (
                   <Button key={title} variant="outline" size="icon" role="tab" aria-selected={principleIndex === index} onClick={() => setPrincipleIndex(index)} className={`size-10 rounded-none ${principleIndex === index ? "border-primary bg-primary text-primary-foreground" : "border-ink/20 bg-transparent text-ink"}`}>
                     0{index + 1}
                   </Button>
                 ))}
               </div>
               <div className="mt-6 min-h-40 border-l border-primary pl-6" role="tabpanel">
                 <h3 className="font-serif text-3xl">{activePrinciple[0]}</h3>
                 <p className="mt-4 max-w-[44ch] leading-relaxed text-ink/60">{activePrinciple[1]}</p>
              </div>
              <Button asChild variant="outline" className="fill-sweep group mt-10 h-12 rounded-none border-ink/25 bg-transparent px-6 text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:text-primary-foreground">
                <a href={SITE} target="_blank" rel="noreferrer">
                  elevatedindia.com <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-7">
              <figure className="zoom-frame group relative overflow-hidden">
                <img src={desertFort} alt="A hilltop desert fort in Rajasthan at golden hour" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <span className="vignette opacity-70" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[11px] uppercase tracking-[0.18em] text-ivory/80">
                  Rajasthan · a passage I compose most often
                </figcaption>
              </figure>
               <p className="mt-10 text-[10px] uppercase tracking-[0.22em] text-ink/45">How every journey is run</p>
               <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
                 {operatingModel.map(([index, title, body]) => (
                   <article key={title} className="stagger group border-t border-ink/15 py-5 transition-colors hover:border-primary">
                     <div className="flex items-center gap-3"><span className="font-serif text-primary">{index}</span><h3 className="font-serif text-xl">{title}</h3></div>
                     <p className="mt-3 text-sm leading-relaxed text-ink/55">{body}</p>
                   </article>
                 ))}
               </div>
            </div>
          </div>
        </Section>

        {/* Curated interests */}
        <Section className="relative overflow-hidden bg-ivory text-ink">
          <div className="relative mx-auto max-w-[1440px] px-5 pb-24 lg:px-12 lg:pb-32">
            <div className="flex flex-col justify-between gap-5 border-t border-ink/15 pt-10 sm:flex-row sm:items-end">
              <div><p className="section-label">05 — A personal lens</p><h2 className="mt-5 font-serif text-[clamp(2.3rem,4.6vw,4rem)] leading-none">What I choose to <span className="italic text-primary">curate.</span></h2></div>
              <p className="max-w-md text-sm leading-relaxed text-ink/55">Six ways into India, each shaped around access, context and enough time for a place to become personal.</p>
            </div>
            <div className="mt-12 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {interests.map((item) => (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group relative min-h-72 overflow-hidden bg-ink">
                  <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-35" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-ivory">
                    <span className="font-serif text-xl text-primary">{item.index}</span>
                    <div><h3 className="font-serif text-2xl leading-tight">{item.title}</h3><p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{item.note}</p></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Journeys */}
        <Section id="journeys" className="relative overflow-hidden bg-ink text-ivory">
          <img src={paperTexture} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.05]" loading="lazy" />
          <span className="grain" aria-hidden="true" />
          <div className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
               <p className="section-label">06 — The journeys I curate</p>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-none">
                Journeys of rare <span className="italic text-primary">distinction.</span>
              </h2>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/55">
                  A few of the flagship itineraries I compose most often. Each one is a living journey — not a package, but a carefully composed narrative.
                </p>
                <div className="flex items-center gap-3">
                  <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ivory/40 sm:flex">
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

              {/* filter chips */}
              <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter journeys">
                {filters.map((item) => (
                   <Button
                    key={item}
                     variant="outline"
                    onClick={() => {
                      setFilter(item);
                      rail.scrollTo(0);
                    }}
                    aria-pressed={filter === item}
                     className={`h-9 rounded-none border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                      filter === item
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-ivory/20 text-ivory/55 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {item}
                   </Button>
                ))}
              </div>

               {/* active journey stage */}
               <div className="relative mt-8 min-h-[420px] overflow-hidden border border-ivory/10">
                 <img key={active.title} src={active.image} alt="" className="animate-fade-in absolute inset-0 h-full w-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" aria-hidden="true" />
                 <div className="relative flex min-h-[420px] max-w-xl flex-col justify-end p-7 sm:p-10">
                   <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{active.region} · {active.days}</p>
                   <h3 className="mt-3 font-serif text-4xl leading-none text-ivory sm:text-5xl">{active.title}</h3>
                   <p className="mt-5 max-w-[48ch] leading-relaxed text-ivory/70">{active.blurb}</p>
                   <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-ivory/45">Journey {rail.index + 1} of {visibleJourneys.length}</p>
                 </div>
               </div>
            </div>

            <div
              ref={rail.ref}
              {...rail.pauseHandlers}
              className="venture-scroll mt-10 flex snap-x gap-5 overflow-x-auto px-5 pb-8 lg:px-12"
            >
              {visibleJourneys.map((journey) => (
                <article key={journey.title} className="zoom-frame group relative h-[460px] w-[80vw] shrink-0 snap-start overflow-hidden transition-transform duration-500 hover:-translate-y-2 sm:w-[340px]">
                  <img src={journey.image} alt={journey.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
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
              <div className="flex h-px w-40 items-center bg-ivory/15" aria-hidden="true">
                <span
                  className="h-px bg-primary transition-all duration-500"
                  style={{ width: `${((rail.index + 1) / Math.max(1, visibleJourneys.length)) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Seasonal India */}
        <Section className="relative overflow-hidden bg-ivory text-ink">
          <span className="paper-grid" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
            <p className="section-label">07 — Worth planning ahead</p>
            <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <h2 className="max-w-[18ch] font-serif text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.98]">India has moments that will not <span className="italic text-primary">wait.</span></h2>
              <a href={`${SITE}seasons`} target="_blank" rel="noreferrer" className="wipe-line text-xs uppercase tracking-[0.16em]">See current seasons <ArrowUpRight className="ml-2 inline size-4" /></a>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {seasons.map((season) => (
                <article key={season.title} className="stagger group">
                  <div className="overflow-hidden"><img src={season.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-primary">{season.when}</p>
                  <h3 className="mt-2 font-serif text-2xl">{season.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">{season.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Field notes gallery */}
        <Section id="gallery" className="relative overflow-hidden bg-background">
          <div className="relative pt-24 lg:pt-32">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
               <p className="section-label">08 — Field notes</p>
              <h2 className="mt-6 max-w-[24ch] font-serif text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.98] text-ivory">
                Frames from the road I <span className="italic text-primary">keep returning to.</span>
              </h2>
            </div>
            <div className="drift-pause mt-14 space-y-4 pb-24 lg:pb-32">
              {[0, 1].map((row) => (
                <div key={row} className="marquee-mask overflow-hidden">
                  <div className={`drift-row gap-4 ${row === 1 ? "drift-row-reverse" : ""}`}>
                    {[...gallery, ...gallery].map(([image, alt, caption], index) => (
                      <figure
                        key={`${alt}-${row}-${index}`}
                        className="zoom-frame group relative h-56 w-[260px] shrink-0 overflow-hidden sm:h-72 sm:w-[360px]"
                      >
                        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden="true" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[11px] leading-relaxed text-ivory/85">
                          {caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Reach */}
        <Section className="relative overflow-hidden bg-ivory text-ink">
          <span className="paper-grid" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
            <div className="lg:col-span-5">
               <p className="section-label">09 — Where it stands</p>
              <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1] ">
                Judged by the people who <span className="italic">travelled with us.</span>
              </h2>
              <div className="rule-draw gold-rule mt-8 h-px w-40" aria-hidden="true" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {[
                ["5.0 on TripAdvisor", "Across 621+ traveller reviews of the journeys we run."],
                ["IATO member", "Member of the Indian Association of Tour Operators."],
                ["Ministry of Tourism", "Recognised by the Ministry of Tourism, Government of India."],
                ["India & Nepal", "The ground I operate across, with my own guides and fleet."],
              ].map(([title, body]) => (
                <article key={title} className="stagger group border-t border-ink/15 pt-5 transition-colors hover:border-primary">
                  <h3 className="font-serif text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-0.5">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Beyond Elevated India */}
        <Section id="beyond" className="relative overflow-hidden bg-background text-ivory">
          <span className="grain" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="section-label">10 — Beyond travel</p>
                <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[0.98]">
                  One founder. A wider field of <span className="italic text-primary">work.</span>
                </h2>
                <p className="mt-7 max-w-[46ch] leading-relaxed text-ivory/60">
                  Elevated India is one expression of a wider working life. Since 2005, I have built, advised and invested across strategy, technology, media, wellness and culture.
                </p>
                <a href="https://www.nikhilsharma.com/home" target="_blank" rel="noreferrer" className="group mt-9 inline-flex items-center gap-2 border-b border-primary pb-1 text-xs uppercase tracking-[0.16em] transition-colors hover:text-primary">
                  Explore my wider work <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <div className="lg:col-span-7">
                {broaderWork.map(([title, body], index) => (
                  <article key={title} className="stagger group grid gap-4 border-t border-ivory/10 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                    <span className="font-serif text-2xl text-primary/50">0{index + 1}</span>
                    <div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-ivory/55">{body}</p></div>
                    <Building2 className="hidden size-5 text-primary/50 transition-transform group-hover:-translate-y-1 sm:block" aria-hidden="true" />
                  </article>
                ))}
                <div className="mt-10 grid grid-cols-2 gap-px bg-ivory/10 sm:grid-cols-4">
                  {["AnandBodh", "IconsBase", "Fabulous.Media", "Vanishing India"].map((venture) => (
                    <div key={venture} className="bg-background px-4 py-6 text-center font-serif text-lg text-ivory/65 transition-colors hover:text-primary">{venture}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Recognition */}
        <Section id="recognition" className="relative overflow-hidden bg-background text-ivory">
          <span className="grain" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
             <p className="section-label">11 — Recognition archive</p>
            <div className="mt-6 grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-none">
                  Excellence in curated <span className="italic text-primary">luxury travel.</span>
                </h2>
                <div className="rule-draw gold-rule mt-8 h-px w-40" aria-hidden="true" />
                <p className="mt-8 max-w-[52ch] leading-relaxed text-ivory/65">
                  My company was awarded at the ET NOW.IN Business Conclave &amp; Awards 2026, West Edition — Mumbai, 25 August 2026.
                </p>
              </div>
               <div className="lg:col-span-6">
                <div className="foil group relative overflow-hidden border border-ivory/15 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/60 sm:p-12">
                  <span className="sheen" aria-hidden="true" />
                  <Award className="size-8 text-primary transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                    Excellence in Curated Luxury Travel Experiences
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-ivory/50">
                    ET NOW.IN Business Conclave &amp; Awards 2026 · West Edition · Mumbai
                  </p>
                </div>
              </div>
            </div>
             <div className="mt-16 grid gap-px bg-ivory/10 lg:grid-cols-4">
               {[
                 ["2019", "Most Influential Digital Marketing Expert — India", "Global Excellence Programme AI Global"],
                 ["2019", "Top Digital Marketing Consultant in India", "Consultants Review · Jan–Feb 2019"],
                 ["2019", "Fearless Entrepreneur", "The Enterprise World · July 2019"],
                 ["Recognition", "Former Truecaller Brand Ambassador", "Truecaller"],
               ].map(([year, title, source]) => (
                 <article key={title} className="group min-h-56 bg-background p-6 transition-colors hover:bg-primary/10">
                   <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{year}</p>
                   <h3 className="mt-7 font-serif text-2xl leading-tight">{title}</h3>
                   <p className="mt-4 text-xs leading-relaxed text-ivory/45">{source}</p>
                   <Check className="mt-7 size-4 text-primary/60" aria-hidden="true" />
                 </article>
               ))}
             </div>
             <div className="mt-16 border-t border-ivory/10 pt-10">
               <div className="flex items-end justify-between gap-6"><div><p className="text-[10px] uppercase tracking-[0.2em] text-primary">In the press</p><h3 className="mt-3 font-serif text-3xl">Two cover stories.</h3></div><Sparkles className="size-6 text-primary/50" aria-hidden="true" /></div>
               <div className="mt-8 grid gap-6 sm:grid-cols-2">
                 {[
                   [siliconIndiaCover, "siliconindia · October 2021", "Profound Excellence in the Digital Frontier"],
                   [consultantsCover, "Consultants Review · February 2019", "Driving Business Growth with Cutting Edge but Pragmatic Technology"],
                 ].map(([image, issue, title]) => (
                   <article key={title} className="group grid grid-cols-[7rem_1fr] gap-5 border border-ivory/10 p-4 transition-colors hover:border-primary/50">
                     <img src={image} alt={`${issue} cover`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                     <div className="py-2"><p className="text-[9px] uppercase tracking-[0.18em] text-primary">{issue}</p><h4 className="mt-4 font-serif text-xl leading-tight">{title}</h4><p className="mt-4 text-xs text-ivory/40">Official cover story</p></div>
                   </article>
                 ))}
               </div>
             </div>
          </div>
        </Section>

        {/* Invitation */}
        <Section id="invitation" className="relative overflow-hidden">
          <img src={backwaterDawn} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
          <span className="vignette" aria-hidden="true" />
          <span className="grain" aria-hidden="true" />
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
