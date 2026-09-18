import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronRight,
  Expand,
  Menu,
  Quote,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { useAutoRail, useCountUp, useParallax, usePrefersReducedMotion, useTilt } from "@/hooks/use-motion";
import portrait from "@/assets/nikhil/portrait.webp";
import consultantsCover from "@/assets/nikhil/consultants-review.webp";
import siliconIndiaCover from "@/assets/nikhil/siliconindia.webp";
import palaceDusk from "@/assets/elevated/palace-dusk.jpg";
import wildernessDawn from "@/assets/elevated/wilderness-dawn.jpg";
import backwatersGold from "@/assets/elevated/backwaters-gold.jpg";
import desertFort from "@/assets/elevated/desert-fort.jpg";
import dunesDusk from "@/assets/elevated/dunes-dusk.jpg";
import fortWalls from "@/assets/elevated/fort-walls.jpg";
import artisanHands from "@/assets/elevated/artisan-hands.jpg";
import palaceNight from "@/assets/elevated/palace-night.jpg";
import backwaterDawn from "@/assets/elevated/backwater-dawn.jpg";
import marketTexture from "@/assets/elevated/market-texture.jpg";
import experienceHouseboat from "@/assets/elevated/experience-houseboat.jpg";
import experienceTiger from "@/assets/elevated/experience-tiger.jpg";
import experienceAarti from "@/assets/elevated/experience-aarti.jpg";
import experienceKathakali from "@/assets/elevated/experience-kathakali.jpg";
import experienceArtisan from "@/assets/elevated/experience-artisan.jpg";
import experienceTea from "@/assets/elevated/experience-tea.jpg";
import festivalDiwali from "@/assets/elevated/festival-diwali.jpg";
import festivalPushkar from "@/assets/elevated/festival-pushkar.jpg";
import festivalHoli from "@/assets/elevated/festival-holi.jpg";
import festivalHemis from "@/assets/elevated/festival-hemis.jpg";
import galleryDoorway from "@/assets/elevated/gallery-doorway.jpg";
import gallerySpices from "@/assets/elevated/gallery-spices.jpg";
import galleryStepwell from "@/assets/elevated/gallery-stepwell.jpg";
import galleryTrain from "@/assets/elevated/gallery-train.jpg";
import galleryDinner from "@/assets/elevated/gallery-dinner.jpg";
import galleryTextiles from "@/assets/elevated/gallery-textiles.jpg";

const SITE = "https://www.elevatedindia.com/";
const sections = [
  ["Story", "#story"], ["Chapters", "#chapters"], ["Elevated India", "#company"],
  ["Experiences", "#experiences"], ["Journeys", "#journeys"], ["Festivals", "#festivals"],
  ["Gallery", "#gallery"], ["Recognition", "#recognition"],
] as const;

const credentials = [
  "5.0 on TripAdvisor · 621+ reviews", "IATO Member", "Recognised by the Ministry of Tourism",
  "Two decades on India’s roads", "Own licensed guides & chauffeured fleet", "24/7 control room",
] as const;

const chapters = [
  { index: "01", kicker: "The apprenticeship", title: "Learning the country the slow way", body: "Long before I had a travel company, I was learning India without a script — its regions, languages, kitchens and the families who keep its living traditions alive.", image: artisanHands, alt: "An artisan printing indigo cloth by hand" },
  { index: "02", kicker: "The refusal", title: "I would not sell a package", body: "Travellers arrived with real curiosity and were handed fixed routes, rented vehicles and borrowed guides. I refused to make a promise that somebody else had to keep.", image: fortWalls, alt: "Carved sandstone fort walls in evening light" },
  { index: "03", kicker: "Elevated India", title: "A private travel house instead", body: "With Manu Singh, I created a company that composes India and Nepal around one guest at a time — never around a shelf of pre-built itineraries.", image: palaceNight, alt: "A lantern-lit palace courtyard at night" },
  { index: "04", kicker: "Ground brought in-house", title: "You must own the ground you promise", body: "Licensed guides, a chauffeured fleet and a 24/7 control room. If I say a morning will be private and unhurried, the people delivering it must be ours to answer for.", image: dunesDusk, alt: "A distant caravan crossing desert dunes at dusk" },
] as const;

const principles = [
  ["Deep local intelligence", "Two decades of relationships and regional knowledge shape choices no algorithm can make."],
  ["Curated, not crowded", "Fewer choices, better choices — selected around the traveller rather than a catalogue."],
  ["Complete discretion", "Privacy is treated with the instinct of a private household, not a public tour business."],
  ["A considered pace", "A day needs room for an unexpected doorway and the pleasure of not watching the clock."],
  ["Personal accountability", "The promise carries my name, from the first conversation to the last mile."],
] as const;

const experiences = [
  { title: "Private houseboat cruise", place: "Vembanad Lake · Kerala", body: "A private kettuvallam moving through the backwaters between Alleppey and Kumarakom.", image: experienceHouseboat, href: `${SITE}activities` },
  { title: "Private tiger safari", place: "Central India", body: "Private vehicles and expert naturalists across reserves including Kanha and Bandhavgarh.", image: experienceTiger, href: `${SITE}activities` },
  { title: "Ganga Aarti from the water", place: "Varanasi", body: "The evening ritual seen from the river, with the ghats unfolding as one luminous panorama.", image: experienceAarti, href: `${SITE}activities` },
  { title: "Kathakali evening", place: "Fort Kochi · Kerala", body: "A close encounter with Kerala’s centuries-old dance-theatre and its extraordinary visual language.", image: experienceKathakali, href: `${SITE}activities` },
  { title: "Artisan workshops", place: "Jaipur & Bagru", body: "Time with working makers, including the hands and carved blocks behind Rajasthan’s textiles.", image: experienceArtisan, href: `${SITE}activities` },
  { title: "Tea country on foot", place: "Munnar · Kerala", body: "A slower passage through the high ranges, plantations and layered green of the Western Ghats.", image: experienceTea, href: `${SITE}activities` },
] as const;

const journeys = [
  { region: "Central India Reserves", days: "8–10 days", title: "The Wild Heart of India", route: "Kanha · Bandhavgarh", body: "Private safari vehicles, considered lodges and expert naturalists in India’s great central reserves.", image: wildernessDawn },
  { region: "Rajasthan", days: "16 days", title: "Palaces & Wilderness", route: "Delhi · Jawai · Udaipur · Jodhpur · Jaipur", body: "Lake palaces, leopard country and desert forts composed as one private royal passage.", image: backwatersGold },
  { region: "North & South India", days: "16 days", title: "Imperial Cities & Kerala", route: "Delhi · Agra · Jaipur · Munnar · Kumarakom", body: "The imperial north woven into tea country and the still backwaters of Kerala.", image: backwaterDawn },
  { region: "India & Nepal", days: "12 days", title: "Golden Triangle with Kathmandu", route: "Delhi · Agra · Jaipur · Kathmandu", body: "Northern India’s imperial capitals followed by the sacred valleys of Nepal.", image: marketTexture },
] as const;

const festivals = [
  { date: "08 NOV 2026", title: "Diwali", place: "Across India", body: "Lakshmi Puja falls on Sunday, 8 November 2026. Palace cities become especially luminous, and characterful rooms reward early planning.", image: festivalDiwali, href: `${SITE}journal/diwali-in-india-guide` },
  { date: "17—24 NOV 2026", title: "Pushkar Camel Fair", place: "Rajasthan", body: "The desert gathering culminates on Kartik Purnima. Private camps and careful timing make all the difference.", image: festivalPushkar, href: `${SITE}journal/pushkar-camel-fair-2026` },
  { date: "23 MAR 2027", title: "Holi", place: "North India", body: "Colour, spring and local ritual. The right setting matters more than the largest crowd.", image: festivalHoli, href: `${SITE}seasons` },
  { date: "13—14 JUL 2027", title: "Hemis Festival", place: "Ladakh", body: "Masked cham dances unfold in the monastery courtyard beneath the high Himalayan landscape.", image: festivalHemis, href: `${SITE}seasons` },
] as const;

const galleryFilters = ["All", "Places", "Details", "Journeys"] as const;
const gallery = [
  { image: galleryDoorway, title: "After the palace closes", place: "Rajasthan", category: "Places", shape: "tall" },
  { image: gallerySpices, title: "Notes for the kitchen", place: "Kerala", category: "Details", shape: "wide" },
  { image: galleryStepwell, title: "Geometry and quiet", place: "Western India", category: "Places", shape: "tall" },
  { image: galleryTrain, title: "The country in motion", place: "Across India", category: "Journeys", shape: "wide" },
  { image: galleryDinner, title: "A table above the lake", place: "Udaipur", category: "Journeys", shape: "wide" },
  { image: galleryTextiles, title: "Cloth, colour, memory", place: "Old-city India", category: "Details", shape: "tall" },
] as const;

const trust = [
  { value: "5.0", title: "TripAdvisor rating", body: "A 5.0 record across 621+ public traveller reviews linked by Elevated India.", link: "View the public record" },
  { value: "IATO", title: "Industry membership", body: "Member of the Indian Association of Tour Operators.", link: "Visit Elevated India" },
  { value: "GOI", title: "National recognition", body: "Recognised by the Ministry of Tourism, Government of India.", link: "Visit Elevated India" },
  { value: "24/7", title: "Ground command", body: "An owned operating model with guides, fleet and a control room across every mile.", link: "How we operate" },
] as const;

function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  const reveal = useReveal<HTMLDivElement>();
  return <section id={id} className={`scroll-mt-16 ${className ?? ""}`}><div ref={reveal.ref} className={reveal.className}>{children}</div></section>;
}

function Stat({ to, decimals = 0, suffix = "", label }: { to: number; decimals?: number; suffix?: string; label: string }) {
  const count = useCountUp(to, 1500, decimals);
  return <div className="stagger border-t border-ink/15 pt-5"><p className="font-serif text-4xl leading-none sm:text-5xl"><span ref={count.ref}>{count.display}</span>{suffix}</p><p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink/50">{label}</p></div>;
}

function Chapter({ item, flip }: { item: (typeof chapters)[number]; flip: boolean }) {
  const reveal = useReveal<HTMLDivElement>();
  return <article ref={reveal.ref} className={`${reveal.className} border-t border-ivory/10`}>
    <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
      <figure className={`zoom-frame group relative overflow-hidden lg:col-span-6 ${flip ? "slide-r lg:order-2" : "slide-l"}`}><img src={item.image} alt={item.alt} loading="lazy" width={1400} height={1000} className="aspect-[4/3] w-full object-cover"/><span className="vignette opacity-60"/><span className="absolute inset-4 border border-primary/0 transition-all duration-700 group-hover:inset-6 group-hover:border-primary/50"/></figure>
      <div className={`lg:col-span-6 ${flip ? "slide-l lg:order-1" : "slide-r"}`}><div className="flex items-baseline gap-5"><span className="font-serif text-6xl text-primary/25">{item.index}</span><span className="text-[10px] uppercase tracking-[0.22em] text-primary">{item.kicker}</span></div><h3 className="mt-4 max-w-[24ch] font-serif text-4xl leading-none text-ivory">{item.title}</h3><div className="rule-draw gold-rule mt-6 h-px w-32"/><p className="mt-6 max-w-[52ch] leading-relaxed text-ivory/60">{item.body}</p></div>
    </div>
  </article>;
}

export function NikhilLanding() {
  const reduced = usePrefersReducedMotion();
  const parallax = useParallax(0.13);
  const tiltRef = useTilt(5);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("story");
  const [principle, setPrinciple] = useState(0);
  const [experience, setExperience] = useState(0);
  const [experiencePaused, setExperiencePaused] = useState(false);
  const [festival, setFestival] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);
  const [trustIndex, setTrustIndex] = useState(0);
  const [trustPaused, setTrustPaused] = useState(false);
  const journeyRail = useAutoRail(journeys.length, 5200);
  const activeJourney = journeys[Math.min(journeyRail.index, journeys.length - 1)] ?? journeys[0];
  const activeExperience = experiences[experience] ?? experiences[0];
  const activeFestival = festivals[festival] ?? festivals[0];
  const activeTrust = trust[trustIndex] ?? trust[0];
  const filteredGallery = useMemo(() => galleryFilter === "All" ? gallery : gallery.filter((item) => item.category === galleryFilter), [galleryFilter]);

  useEffect(() => {
    const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? window.scrollY / max : 0); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const nodes = sections.map(([, href]) => document.querySelector(href)).filter((node): node is Element => Boolean(node));
    const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0]; if (current?.target.id) setActiveSection(current.target.id); }, { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.25, 0.5] });
    nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect();
  }, []);
  useEffect(() => { if (reduced || experiencePaused) return; const id = window.setInterval(() => setExperience((value) => (value + 1) % experiences.length), 4800); return () => window.clearInterval(id); }, [reduced, experiencePaused]);
  useEffect(() => { if (reduced || trustPaused) return; const id = window.setInterval(() => setTrustIndex((value) => (value + 1) % trust.length), 4300); return () => window.clearInterval(id); }, [reduced, trustPaused]);
  useEffect(() => {
    if (galleryOpen === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setGalleryOpen(null); if (event.key === "ArrowRight") setGalleryOpen((value) => value === null ? null : (value + 1) % filteredGallery.length); if (event.key === "ArrowLeft") setGalleryOpen((value) => value === null ? null : (value - 1 + filteredGallery.length) % filteredGallery.length); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKey); return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [galleryOpen, filteredGallery.length]);

  return <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-12"><a href="#top" className="font-serif text-2xl text-ivory">Nikhil<span className="text-primary"> Sharma</span></a><nav className="hidden items-center gap-5 xl:flex">{sections.map(([label, href]) => <a key={href} href={href} className={`wipe-line text-[10px] uppercase tracking-[0.16em] transition-colors ${activeSection === href.slice(1) ? "text-primary" : "text-ivory/50 hover:text-primary"}`}>{label}</a>)}</nav><Button asChild className="fill-sweep hidden h-9 rounded-none border border-primary/60 bg-transparent px-4 text-[10px] uppercase tracking-[0.16em] text-primary shadow-none sm:inline-flex"><a href="#invitation">Speak with me</a></Button><Button variant="ghost" size="icon" onClick={() => setMenuOpen((value) => !value)} className="text-ivory hover:bg-ivory/10 hover:text-ivory xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</Button></div>
      <div className="h-px bg-ivory/10"><div className="h-px bg-primary transition-[width] duration-150" style={{width: `${progress * 100}%`}}/></div>
      {menuOpen && <nav className="animate-fade-in border-t border-ivory/10 bg-background px-5 py-3 xl:hidden">{sections.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-3 text-xs uppercase tracking-[0.18em] text-ivory/70">{label}</a>)}</nav>}
    </header>

    <main id="top">
      <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"><ol className="space-y-3 border-r border-ivory/15 pr-4">{sections.map(([label, href], index) => <li key={href}><a href={href} className={`group flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.2em] transition-colors ${activeSection === href.slice(1) ? "text-primary" : "text-ivory/30"}`}><span className={activeSection === href.slice(1) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}>{label}</span><span className="font-serif text-xs">0{index+1}</span></a></li>)}</ol></aside>

      <section className="relative overflow-hidden pt-16 lg:min-h-screen">
        <img src={palaceDusk} alt="Lantern-lit palace courtyard at dusk" width={1920} height={1200} className="absolute inset-0 h-[116%] w-full object-cover will-change-transform" style={{transform:`translate3d(0,${parallax}px,0)`}}/>
        <div className="absolute inset-0 bg-hero-scrim"/><span className="vignette"/><span className="grain"/><span className="route-orbit route-orbit-one"/><span className="route-orbit route-orbit-two"/>
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 lg:min-h-[820px] lg:grid-cols-12 lg:px-12"><div className="lg:col-span-7"><p className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary"><span className="h-px w-10 bg-primary"/>Founder & CEO, Elevated India</p><h1 className="mt-7 font-serif text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.86] text-ivory"><span className="rise rise-delay-1 block">Nikhil</span><span className="rise rise-delay-2 block italic text-primary">Sharma.</span></h1><p className="rise rise-delay-3 mt-8 max-w-[48ch] text-lg leading-relaxed text-ivory/75">I did not want to sell India. I wanted to run it — every guide, every mile, every night — so the country could be lived with depth, privacy and a human pace.</p><div className="rise rise-delay-4 mt-10 flex gap-3"><Button asChild className="h-12 rounded-none bg-primary px-6 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-ivory"><a href="#story">My story</a></Button><Button asChild variant="outline" className="fill-sweep h-12 rounded-none border-ivory/25 bg-transparent px-6 text-xs uppercase tracking-[0.16em] text-ivory"><a href="#experiences">Explore India</a></Button></div></div>
          <figure className="rise rise-delay-2 relative lg:col-span-5"><div className="glow-breathe absolute -inset-6 rounded-full bg-primary/20 blur-3xl"/><div ref={tiltRef} className="group relative aspect-[4/5] overflow-hidden border border-ivory/15 bg-ink/40 transition-transform duration-300"><img src={portrait} alt="Nikhil Sharma, Founder and CEO of Elevated India" width={900} height={1125} className="h-full w-full object-cover object-[68%_center] transition-transform duration-[1200ms] group-hover:scale-[1.04]"/><span className="absolute inset-3 border border-primary/0 transition-all duration-500 group-hover:inset-4 group-hover:border-primary/60"/></div><figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ivory/45">Nikhil Sharma · Founder & CEO</figcaption></figure>
        </div>
      </section>

      <div className="marquee-mask overflow-hidden border-y border-ivory/10 bg-ink py-4"><div className="marquee-track gap-10 hover:[animation-play-state:paused]">{[...credentials,...credentials].map((item,index) => <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-10 text-[10px] uppercase tracking-[0.2em] text-ivory/45">{item}<span className="size-1 rounded-full bg-primary"/></span>)}</div></div>

      <Section id="story" className="relative overflow-hidden bg-ivory text-ink"><span className="paper-grid"/><div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32"><div className="lg:col-span-5"><p className="section-label">01 — My story</p><h2 className="line-rise mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94]"><span>Most companies</span><span>sell India.</span><span className="italic text-primary">I run it.</span></h2><blockquote className="mt-10 border-l border-primary pl-6 font-serif text-2xl leading-snug text-ink/80">“India is not a destination to be efficiently toured. It is an experience to be gradually, intimately and personally understood.”<footer className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink/45">— The philosophy behind my work</footer></blockquote></div><div className="lg:col-span-7"><p className="max-w-[60ch] text-lg leading-relaxed text-ink/70">I have spent two decades on India’s roads. What I kept seeing was the same thing: travellers arriving with real curiosity and being handed a package.</p><p className="mt-6 max-w-[60ch] leading-relaxed text-ink/60">So I built the opposite. My conviction is simple: you must own the ground you promise. The guide, the car, the room and the rhythm all have to answer to one standard.</p><div className="mt-14 grid gap-8 grid-cols-2 lg:grid-cols-4"><Stat to={5} decimals={1} label="TripAdvisor rating"/><Stat to={621} suffix="+" label="Traveller reviews"/><Stat to={2} label="Decades on the road"/><Stat to={24} suffix="/7" label="Journey control"/></div></div></div></Section>

      <section id="chapters" className="relative scroll-mt-16 overflow-hidden bg-background"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 pt-24 lg:px-12 lg:pt-32"><p className="section-label">02 — Founder chapters</p><h2 className="mt-6 max-w-[20ch] font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.96] text-ivory">How the work came <span className="italic text-primary">together.</span></h2></div><div className="relative mt-14">{chapters.map((item,index)=><Chapter key={item.index} item={item} flip={index%2===1}/>)}</div></section>

      <Section id="company" className="relative overflow-hidden bg-ivory text-ink"><span className="paper-grid"/><div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32"><div className="lg:col-span-5"><p className="section-label">03 — What I built</p><h2 className="mt-6 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-none">Elevated <span className="italic text-primary">India.</span></h2><p className="mt-7 max-w-[46ch] leading-relaxed text-ink/70">A private luxury travel house composing every itinerary from scratch around one traveller at a time, across India and Nepal.</p><div className="mt-10 flex gap-2" role="tablist">{principles.map(([title],index)=><Button key={title} variant="outline" size="icon" role="tab" aria-selected={principle===index} onClick={()=>setPrinciple(index)} className={`size-10 rounded-none ${principle===index?"border-primary bg-primary text-primary-foreground":"border-ink/20 bg-transparent text-ink"}`}>0{index+1}</Button>)}</div><div className="mt-6 min-h-40 border-l border-primary pl-6"><h3 className="font-serif text-3xl">{principles[principle]?.[0]}</h3><p className="mt-4 max-w-[44ch] leading-relaxed text-ink/60">{principles[principle]?.[1]}</p></div></div><figure className="zoom-frame group relative overflow-hidden lg:col-span-7"><img src={desertFort} alt="A hilltop desert fort at golden hour" width={1400} height={1000} loading="lazy" className="aspect-[4/3] w-full object-cover"/><span className="vignette opacity-60"/><figcaption className="absolute inset-x-0 bottom-0 p-6 text-xs uppercase tracking-[0.18em] text-ivory">Rajasthan · private journeys, personally composed</figcaption></figure></div></Section>

      <Section id="experiences" className="relative overflow-hidden bg-ink text-ivory"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="section-label">04 — Signature experiences</p><h2 className="mt-6 max-w-[18ch] font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.95]">A day should feel <span className="italic text-primary">unrepeatable.</span></h2></div><p className="max-w-md text-sm leading-relaxed text-ivory/55">The details are real. The way they are composed around you is where the work becomes personal.</p></div>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_22rem]" onMouseEnter={()=>setExperiencePaused(true)} onMouseLeave={()=>setExperiencePaused(false)} onFocusCapture={()=>setExperiencePaused(true)} onBlurCapture={()=>setExperiencePaused(false)}><div className="experience-stage relative min-h-[560px] overflow-hidden border border-ivory/10"><img key={activeExperience.title} src={activeExperience.image} alt={activeExperience.title} width={1400} height={900} loading="lazy" className="stage-crossfade absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent"/><div className="absolute inset-x-0 bottom-0 max-w-2xl p-7 sm:p-10"><p className="text-[10px] uppercase tracking-[0.22em] text-primary">{activeExperience.place}</p><h3 className="mt-3 font-serif text-4xl sm:text-5xl">{activeExperience.title}</h3><p className="mt-4 max-w-xl leading-relaxed text-ivory/70">{activeExperience.body}</p><a href={activeExperience.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-[10px] uppercase tracking-[0.18em]">Explore this experience <ArrowUpRight className="size-4"/></a></div></div><div className="border-y border-ivory/10">{experiences.map((item,index)=><button key={item.title} onClick={()=>setExperience(index)} className={`group flex w-full items-center gap-4 border-b border-ivory/10 px-1 py-5 text-left transition-colors ${experience===index?"text-primary":"text-ivory/50 hover:text-ivory"}`}><span className="font-serif text-lg">0{index+1}</span><span className="flex-1 font-serif text-xl leading-tight">{item.title}</span><ChevronRight className={`size-4 transition-transform ${experience===index?"translate-x-1":""}`}/></button>)}<div className="h-px bg-ivory/10"><div className="h-px bg-primary transition-all duration-700" style={{width:`${((experience+1)/experiences.length)*100}%`}}/></div></div></div>
      </div></Section>

      <Section id="journeys" className="relative overflow-hidden bg-background text-ivory"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><p className="section-label">05 — Journeys</p><div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-[18ch] font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.95]">Routes with room to <span className="italic text-primary">breathe.</span></h2><div className="flex gap-3"><Button variant="outline" size="icon" onClick={journeyRail.prev} className="rounded-none border-ivory/25 bg-transparent text-ivory"><ArrowLeft/></Button><Button variant="outline" size="icon" onClick={journeyRail.next} className="rounded-none border-ivory/25 bg-transparent text-ivory"><ArrowRight/></Button></div></div>
        <div className="relative mt-12 min-h-[560px] overflow-hidden border border-ivory/10"><img key={activeJourney?.title} src={activeJourney?.image} alt={activeJourney?.title} width={1400} height={900} loading="lazy" className="stage-crossfade absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"/><div className="relative flex min-h-[560px] max-w-2xl flex-col justify-end p-7 sm:p-12"><p className="text-[10px] uppercase tracking-[0.2em] text-primary">{activeJourney?.region} · {activeJourney?.days}</p><h3 className="mt-3 font-serif text-4xl sm:text-6xl">{activeJourney?.title}</h3><p className="mt-4 text-xs uppercase tracking-[0.15em] text-ivory/45">{activeJourney?.route}</p><p className="mt-5 max-w-xl leading-relaxed text-ivory/70">{activeJourney?.body}</p></div></div>
        <div ref={journeyRail.ref} {...journeyRail.pauseHandlers} className="venture-scroll mt-6 flex snap-x gap-0 overflow-x-auto border-y border-ivory/10">{journeys.map((item,index)=><button key={item.title} onClick={()=>journeyRail.scrollTo(index)} className={`w-[78vw] shrink-0 snap-start border-r border-ivory/10 p-6 text-left transition-colors sm:w-80 ${journeyRail.index===index?"bg-primary/10":"hover:bg-ivory/5"}`}><div className="flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-primary"><span>0{index+1}</span><span>{item.days}</span></div><h4 className="mt-6 font-serif text-2xl">{item.title}</h4><p className="mt-3 text-xs leading-relaxed text-ivory/45">{item.route}</p></button>)}</div>
      </div></Section>

      <Section id="festivals" className="relative overflow-hidden bg-ivory text-ink"><span className="paper-grid"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><p className="section-label">06 — Festival calendar</p><div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-[18ch] font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.95]">Some moments will not <span className="italic text-primary">wait.</span></h2><p className="max-w-md text-sm leading-relaxed text-ink/55">Confirmed dates are an invitation to plan ahead, not a promise of availability.</p></div><div className="mt-12 grid gap-8 lg:grid-cols-12"><figure className="group relative min-h-[520px] overflow-hidden lg:col-span-7"><img key={activeFestival.title} src={activeFestival.image} alt={activeFestival.title} width={1400} height={900} loading="lazy" className="stage-crossfade absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent"/><figcaption className="absolute inset-x-0 bottom-0 p-7 text-ivory"><p className="text-[10px] uppercase tracking-[0.2em] text-primary">{activeFestival.date} · {activeFestival.place}</p><h3 className="mt-3 font-serif text-4xl">{activeFestival.title}</h3><p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/70">{activeFestival.body}</p><a href={activeFestival.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-primary pb-1 text-[10px] uppercase tracking-[0.16em]">Plan around it <ArrowUpRight className="size-4"/></a></figcaption></figure><div className="relative lg:col-span-5"><span className="absolute bottom-0 left-3 top-0 w-px bg-ink/15"/>{festivals.map((item,index)=><button key={item.title} onClick={()=>setFestival(index)} className="group relative block w-full border-t border-ink/15 py-6 pl-10 text-left"><span className={`absolute left-[9px] top-8 size-2 rounded-full border border-primary transition-all ${festival===index?"scale-150 bg-primary":"bg-ivory"}`}/><p className="text-[9px] uppercase tracking-[0.2em] text-primary">{item.date}</p><h3 className={`mt-2 font-serif text-2xl transition-transform ${festival===index?"translate-x-1":"group-hover:translate-x-1"}`}>{item.title}</h3><p className="mt-2 text-xs text-ink/45">{item.place}</p></button>)}</div></div></div></Section>

      <Section id="gallery" className="relative overflow-hidden bg-background text-ivory"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="section-label">07 — India, observed</p><h2 className="mt-6 max-w-[19ch] font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.95]">The details that stay <span className="italic text-primary">with me.</span></h2></div><div className="flex flex-wrap gap-2">{galleryFilters.map((item)=><Button key={item} variant="outline" onClick={()=>{setGalleryFilter(item);setGalleryOpen(null)}} className={`h-9 rounded-none px-4 text-[10px] uppercase tracking-[0.16em] ${galleryFilter===item?"border-primary bg-primary text-primary-foreground":"border-ivory/20 bg-transparent text-ivory/55"}`}>{item}</Button>)}</div></div><div className="gallery-mosaic mt-12">{filteredGallery.map((item,index)=><button key={item.title} onClick={()=>setGalleryOpen(index)} className={`zoom-frame group relative overflow-hidden text-left ${item.shape==="tall"?"gallery-tall":"gallery-wide"}`}><img src={item.image} alt={item.title} width={item.shape==="tall"?1000:1400} height={item.shape==="tall"?1250:900} loading="lazy" className="h-full w-full object-cover"/><span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent"/><span className="absolute right-4 top-4 grid size-9 place-items-center border border-ivory/25 bg-ink/25 text-ivory opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"><Expand className="size-4"/></span><span className="absolute inset-x-0 bottom-0 p-5"><span className="block text-[9px] uppercase tracking-[0.2em] text-primary">{item.place}</span><span className="mt-2 block font-serif text-2xl">{item.title}</span></span></button>)}</div></div></Section>

      <Section className="relative overflow-hidden bg-ivory text-ink"><span className="paper-grid"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">08 — Guest confidence</p><h2 className="mt-6 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-none">The record behind <span className="italic text-primary">the promise.</span></h2><p className="mt-6 text-sm leading-relaxed text-ink/50">Verified public credentials only. No invented testimonials.</p></div><div className="lg:col-span-8" onMouseEnter={()=>setTrustPaused(true)} onMouseLeave={()=>setTrustPaused(false)} onFocusCapture={()=>setTrustPaused(true)} onBlurCapture={()=>setTrustPaused(false)}><div className="relative min-h-80 border-y border-ink/15 py-10"><Quote className="size-8 text-primary/40"/><div key={activeTrust.title} className="animate-fade-in"><p className="mt-8 font-serif text-6xl text-primary sm:text-8xl">{activeTrust.value}</p><h3 className="mt-4 font-serif text-3xl">{activeTrust.title}</h3><p className="mt-4 max-w-2xl leading-relaxed text-ink/60">{activeTrust.body}</p><a href={SITE} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-[10px] uppercase tracking-[0.16em]">{activeTrust.link} <ArrowUpRight className="size-4"/></a></div></div><div className="mt-5 flex items-center justify-between"><div className="flex gap-2">{trust.map((item,index)=><button key={item.title} onClick={()=>setTrustIndex(index)} aria-label={`Show ${item.title}`} className={`h-1 transition-all ${trustIndex===index?"w-10 bg-primary":"w-5 bg-ink/15"}`}/>)}</div><div className="flex gap-2"><Button variant="outline" size="icon" onClick={()=>setTrustIndex((trustIndex-1+trust.length)%trust.length)} className="size-9 rounded-none border-ink/20 bg-transparent"><ArrowLeft className="size-4"/></Button><Button variant="outline" size="icon" onClick={()=>setTrustIndex((trustIndex+1)%trust.length)} className="size-9 rounded-none border-ink/20 bg-transparent"><ArrowRight className="size-4"/></Button></div></div></div></div></div></Section>

      <Section id="recognition" className="relative overflow-hidden bg-background text-ivory"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"><p className="section-label">09 — Recognition archive</p><div className="mt-6 grid items-center gap-12 lg:grid-cols-12"><div className="lg:col-span-6"><h2 className="font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-none">Excellence in curated <span className="italic text-primary">luxury travel.</span></h2><p className="mt-8 max-w-[52ch] leading-relaxed text-ivory/60">Elevated India was recognised at the ET NOW.IN Business Conclave & Awards 2026, West Edition — Mumbai, 25 August 2026.</p></div><div className="foil group relative overflow-hidden border border-ivory/15 p-8 lg:col-span-6 sm:p-12"><span className="sheen"/><Award className="size-8 text-primary"/><p className="mt-6 font-serif text-3xl sm:text-4xl">Excellence in Curated Luxury Travel Experiences</p><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ivory/45">ET NOW.IN · 2026 · Mumbai</p></div></div><div className="mt-16 grid gap-px bg-ivory/10 md:grid-cols-3">{[["2019","Most Influential Digital Marketing Expert — India","AI Global"],["2019","Top Digital Marketing Consultant in India","Consultants Review"],["2019","Fearless Entrepreneur","The Enterprise World"]].map(([year,title,source])=><article key={title} className="group bg-background p-7 transition-colors hover:bg-primary/10"><p className="text-[10px] uppercase tracking-[0.2em] text-primary">{year}</p><h3 className="mt-7 font-serif text-2xl">{title}</h3><p className="mt-4 text-xs text-ivory/45">{source}</p><Check className="mt-7 size-4 text-primary"/></article>)}</div><div className="mt-16 grid gap-6 sm:grid-cols-2">{[[siliconIndiaCover,"siliconindia · October 2021","Profound Excellence in the Digital Frontier"],[consultantsCover,"Consultants Review · February 2019","Driving Business Growth with Cutting Edge but Pragmatic Technology"]].map(([image,issue,title])=><article key={title} className="group grid grid-cols-[7rem_1fr] gap-5 border border-ivory/10 p-4 transition-colors hover:border-primary/50"><img src={image} alt={`${issue} cover`} width={300} height={400} loading="lazy" className="aspect-[3/4] w-full object-cover"/><div className="py-2"><p className="text-[9px] uppercase tracking-[0.18em] text-primary">{issue}</p><h4 className="mt-4 font-serif text-xl">{title}</h4><p className="mt-4 text-xs text-ivory/40">Official cover story</p></div></article>)}</div></div></Section>

      <Section id="invitation" className="relative overflow-hidden border-t border-ivory/10 bg-ink"><span className="grain"/><div className="relative mx-auto max-w-[1440px] px-5 py-28 text-center lg:px-12 lg:py-40"><p className="section-label">An invitation</p><h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-ivory">Let me show you <span className="italic text-primary">my India.</span></h2><p className="mx-auto mt-7 max-w-xl leading-relaxed text-ivory/60">Begin with a conversation. My team and I will compose something entirely your own.</p><Button asChild className="mt-10 h-12 rounded-none bg-primary px-8 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-ivory"><a href={SITE} target="_blank" rel="noreferrer">Visit elevatedindia.com <ArrowUpRight/></a></Button></div></Section>
    </main>

    <footer className="border-t border-ivory/10 bg-background text-ivory/40"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-7 text-[10px] uppercase tracking-[0.14em] sm:flex-row sm:justify-between lg:px-12"><span>Nikhil Sharma · Founder & CEO, Elevated India</span><span>Independent tribute concept · 2026</span></div></footer>

    {galleryOpen !== null && filteredGallery[galleryOpen] ? <div className="fixed inset-0 z-[100] grid place-items-center bg-background/95 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Gallery viewer"><Button variant="ghost" size="icon" onClick={()=>setGalleryOpen(null)} className="absolute right-5 top-5 text-ivory hover:bg-ivory/10 hover:text-ivory" aria-label="Close gallery"><X/></Button><Button variant="outline" size="icon" onClick={()=>setGalleryOpen((galleryOpen-1+filteredGallery.length)%filteredGallery.length)} className="absolute left-4 top-1/2 rounded-none border-ivory/25 bg-background/40 text-ivory"><ArrowLeft/></Button><figure className="max-w-5xl"><img src={filteredGallery[galleryOpen].image} alt={filteredGallery[galleryOpen].title} className="max-h-[78vh] w-auto object-contain"/><figcaption className="mt-5 flex items-end justify-between gap-6"><div><p className="text-[10px] uppercase tracking-[0.2em] text-primary">{filteredGallery[galleryOpen].place}</p><p className="mt-2 font-serif text-3xl text-ivory">{filteredGallery[galleryOpen].title}</p></div><p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40">{galleryOpen+1} / {filteredGallery.length}</p></figcaption></figure><Button variant="outline" size="icon" onClick={()=>setGalleryOpen((galleryOpen+1)%filteredGallery.length)} className="absolute right-4 top-1/2 rounded-none border-ivory/25 bg-background/40 text-ivory"><ArrowRight/></Button></div> : null}
  </div>;
}
