import { ArrowUpRight, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import portrait from "@/assets/nikhil/portrait.webp";
import anandbodh from "@/assets/nikhil/anandbodh.jpg";
import consultantsReview from "@/assets/nikhil/consultants-review.webp";
import easehire from "@/assets/nikhil/easehire.webp";
import fabulous from "@/assets/nikhil/fabulous.webp";
import goCommercially from "@/assets/nikhil/gocommercially.webp";
import iconsbase from "@/assets/nikhil/iconsbase.webp";
import siliconIndia from "@/assets/nikhil/siliconindia.webp";
import vanishingIndia from "@/assets/nikhil/vanishing-india.webp";

const navItems = [
  ["Story", "#story"],
  ["Ventures", "#ventures"],
  ["Method", "#method"],
  ["Recognition", "#recognition"],
] as const;

const ventures = [
  { name: "AnandBodh", detail: "Wellness & fulfilled living", logo: anandbodh },
  { name: "IconsBase", detail: "Ideas to market opportunities", logo: iconsbase },
  { name: "EaseHire", detail: "Recruitment technology", logo: easehire },
  { name: "Fabulous.Media", detail: "Media & marketing network", logo: fabulous },
  { name: "GoCommercially", detail: "Business growth strategy", logo: goCommercially },
  { name: "Vanishing India", detail: "People, art & living traditions", logo: vanishingIndia },
] as const;

const method = [
  ["01", "Validate", "Test the market, the problem and the opportunity before scaling the solution."],
  ["02", "Position", "Build a differentiated brand and a clear business story that earns attention."],
  ["03", "Acquire", "Create an accountable marketing and sales engine around measurable demand."],
  ["04", "Scale", "Strengthen operations, automation and decision-making for durable growth."],
] as const;

export function NikhilLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <a href="#top" className="font-serif text-2xl text-ivory" aria-label="Nikhil Sharma, home">
            Nikhil Sharma<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-xs uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-ivory focus-visible:text-ivory">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden h-9 rounded-none border border-primary/60 bg-transparent px-4 text-xs uppercase tracking-[0.16em] text-primary shadow-none hover:bg-primary hover:text-primary-foreground sm:inline-flex">
            <a href="#contact">Enquire</a>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen((value) => !value)} className="text-ivory hover:bg-ivory/10 hover:text-ivory md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen ? (
          <nav className="border-t border-ivory/10 bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-4 text-sm uppercase tracking-[0.18em] text-ivory/70">
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden pt-16 lg:min-h-[760px]">
          <img src={portrait} alt="Nikhil Sharma beside an aircraft" className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-center" />
          <div className="absolute inset-0 bg-hero-scrim" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] items-center px-5 py-16 lg:min-h-[760px] lg:px-12">
            <div className="max-w-3xl">
              <p className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary sm:text-xs">
                <span className="h-px w-10 bg-primary" /> Entrepreneur · Strategist · Digital Transformer
              </p>
              <h1 className="rise rise-delay-1 mt-7 font-serif text-[clamp(3.25rem,8vw,7.3rem)] leading-[0.9] text-ivory">
                The architect of <span className="italic text-primary">compounding</span> growth.
              </h1>
              <p className="rise rise-delay-2 mt-8 max-w-[48ch] text-base leading-relaxed text-ivory/72 sm:text-lg">
                Nikhil Sharma turns business ambition into clear strategy, stronger brands and scalable ventures—built from more than two decades of hands-on experience.
              </p>
              <div className="rise rise-delay-3 relative mt-10 max-w-2xl border-y border-ivory/15 bg-ivory/[0.04] backdrop-blur-md">
                <div className="metric-sweep" aria-hidden="true" />
                <div className="grid grid-cols-3 divide-x divide-ivory/10">
                  {[['20+', 'Years experience'], ['1,000+', 'Clients served'], ['55+', 'Startups & ventures']].map(([value, label]) => (
                    <div key={label} className="px-3 py-5 sm:px-6 sm:py-6">
                      <div className="font-serif text-3xl text-ivory sm:text-5xl">{value}</div>
                      <div className="mt-2 text-[9px] uppercase leading-snug tracking-[0.12em] text-ivory/50 sm:text-[11px]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="scroll-mt-16 bg-ivory text-ink">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
            <div className="lg:col-span-7">
              <p className="section-label">(a) The story</p>
              <h2 className="mt-6 font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.98]">From builder to the <span className="italic">mentor behind builders.</span></h2>
              <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink/70">Since 2005, Nikhil has worked at the intersection of business strategy, digital transformation and execution. His work spans new ventures, established businesses and founders preparing for their next stage of growth.</p>
              <p className="mt-5 max-w-[58ch] leading-relaxed text-ink/60">As the founder of multiple ventures and creator of the InvestorReady™ methodology, he brings an operator’s perspective to strategy. He was also recognised as a former Truecaller brand ambassador.</p>
              <a href="https://www.nikhilsharma.com/home" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-primary">Read his full profile <ArrowUpRight className="size-4" /></a>
            </div>
            <figure className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden bg-paper">
                <img src={portrait} alt="Nikhil Sharma, entrepreneur and business strategist" className="h-full w-full object-cover object-[70%_center] grayscale-[15%]" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ink/45">Twenty years of building, advising and transforming businesses</figcaption>
            </figure>
          </div>
        </section>

        <section id="ventures" className="scroll-mt-16 bg-background py-24 text-ivory lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
            <div className="flex items-end justify-between gap-8">
              <div><p className="section-label">(b) The ecosystem</p><h2 className="mt-6 font-serif text-[clamp(2.7rem,5vw,4.4rem)] leading-none">Ideas made <span className="italic text-primary">operational.</span></h2></div>
              <p className="hidden max-w-sm text-sm leading-relaxed text-ivory/50 md:block">A cross-sector ecosystem connecting wellbeing, technology, hiring, media, growth and cultural preservation.</p>
            </div>
          </div>
          <div className="venture-scroll mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-7 lg:px-12">
            {ventures.map((venture, index) => (
              <article key={venture.name} className="group w-[270px] shrink-0 snap-start border-t border-ivory/15 pt-5 sm:w-[310px]">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-ivory p-9">
                  <img src={venture.logo} alt={`${venture.name} logo`} className="max-h-24 max-w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div><h3 className="font-serif text-2xl">{venture.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.14em] text-ivory/45">{venture.detail}</p></div>
                  <span className="font-serif text-lg text-primary">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="scroll-mt-16 bg-ivory py-24 text-ink lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4"><p className="section-label">(c) The method</p><h2 className="mt-6 font-serif text-[clamp(2.7rem,4.5vw,4rem)] leading-none">InvestorReady<span className="text-primary">™</span></h2><p className="mt-6 max-w-sm leading-relaxed text-ink/60">A practical path from market clarity to scalable growth—built around evidence, positioning and disciplined execution.</p></div>
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {method.map(([number, title, description]) => <article key={title} className="border-t border-ink/15 pt-5"><p className="font-serif text-3xl text-primary">{number}</p><h3 className="mt-2 font-serif text-3xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/60">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="recognition" className="scroll-mt-16 bg-background py-24 text-ivory lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
            <p className="section-label">(d) Recognition</p>
            <div className="mt-6 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5"><h2 className="font-serif text-[clamp(2.7rem,5vw,4.5rem)] leading-none">Evidence over <span className="italic text-primary">adjectives.</span></h2><div className="mt-10 divide-y divide-ivory/10 border-y border-ivory/10">
                {[['2019', 'Most Influential Digital Marketing Expert — India'], ['2019', 'Top Digital Marketing Consultant in India'], ['2019', 'Fearless Entrepreneur']].map(([year, title]) => <div key={title} className="flex gap-5 py-5"><span className="text-xs text-primary">{year}</span><p className="text-sm text-ivory/70">{title}</p></div>)}
              </div></div>
              <div className="grid grid-cols-2 gap-4 lg:col-span-7">
                <a href="https://www.nikhilsharma.com/home" target="_blank" rel="noreferrer" className="group"><img src={siliconIndia} alt="siliconindia October 2021 cover featuring Nikhil Sharma's work" className="aspect-[4/5] w-full object-cover object-top transition-opacity group-hover:opacity-80" loading="lazy" /><p className="mt-4 font-serif text-xl">Profound Excellence in the Digital Frontier</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-ivory/40">siliconindia · 2021</p></a>
                <a href="https://www.nikhilsharma.com/home" target="_blank" rel="noreferrer" className="group"><img src={consultantsReview} alt="Consultants Review February 2019 cover featuring Nikhil Sharma" className="aspect-[4/5] w-full object-cover object-top transition-opacity group-hover:opacity-80" loading="lazy" /><p className="mt-4 font-serif text-xl">Driving Business Growth with Pragmatic Technology</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-ivory/40">Consultants Review · 2019</p></a>
              </div>
            </div>

            <div id="contact" className="mt-28 grid items-end gap-10 border-t border-ivory/15 pt-16 lg:grid-cols-2">
              <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92]">Let’s build what <span className="italic text-primary">compounds.</span></h2>
              <div className="lg:text-right"><p className="max-w-md leading-relaxed text-ivory/60 lg:ml-auto">For business strategy, mentorship or transformation, connect directly through Nikhil’s official channels.</p><div className="mt-8 flex flex-wrap gap-3 lg:justify-end"><Button asChild className="h-12 rounded-none bg-primary px-6 uppercase tracking-[0.14em] text-primary-foreground hover:bg-ivory"><a href="https://www.nikhilsharma.com/home" target="_blank" rel="noreferrer">Visit official site <ArrowUpRight /></a></Button><Button asChild variant="outline" className="h-12 rounded-none border-ivory/20 bg-transparent px-5 text-ivory hover:bg-ivory hover:text-ink"><a href="https://www.linkedin.com/in/hirenikhilsharma" target="_blank" rel="noreferrer" aria-label="Connect with Nikhil Sharma on LinkedIn"><Linkedin /> LinkedIn</a></Button></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ivory/10 bg-background text-ivory/40"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-7 text-[10px] uppercase tracking-[0.14em] sm:flex-row sm:justify-between lg:px-12"><span>Nikhil Sharma · Business Growth Maestro</span><span>Independent tribute concept · 2026</span></div></footer>
    </div>
  );
}