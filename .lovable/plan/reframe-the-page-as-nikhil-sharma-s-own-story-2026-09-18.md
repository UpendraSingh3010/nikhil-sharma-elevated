# Reframe the page as Nikhil Sharma's own story

Right now the page speaks as the company ("Elevated India — curators of extraordinary India"). It should speak as Nikhil Sharma, in first person, telling his own story — with Elevated India as the company he built, not as the subject of the page.

Same visual design: forest/ivory/gold palette, Instrument Serif headlines, cinematic imagery, scroll reveals, journey rail. Only the framing, voice, order and copy change.

## New structure

1. **Opening** — his name as the headline, with "Founder & CEO, Elevated India" beneath, his portrait carried into the opening alongside the palace imagery. One line in his voice about running India rather than selling it. Actions: "My story" and "Elevated India".
2. **Credentials strip** — unchanged, but framed as what his company has earned (kept as verified facts only).
3. **My story** — the longest section, first person: two decades on India's roads, why he refused the package-tour model, the conviction that you must own the ground you promise. His pull-quote stays.
4. **What I built: Elevated India** — the company introduced as his work; co-founder Manu Singh credited, ground operations through India Personal Tours.
5. **How I run it** — the three principles, rewritten in his voice ("I keep the fleet, guides and control room in-house because…").
6. **The journeys I curate** — same four signature itineraries, same horizontal rail, intro in his voice.
7. **Recognition** — the 2026 ET NOW.IN award, framed as recognition his company received.
8. **Invitation** — closing line from him, single link out to elevatedindia.com.

"What we curate" (the six interests grid) folds into the journeys intro as a compact line of interests so the page stays personal rather than catalogue-like.

## Technical notes

- Edit `src/components/nikhil-landing.tsx` only: reorder sections, rewrite copy to first person, move the portrait into the hero, collapse the interests grid into an inline list.
- Nav labels become: My story, Elevated India, How I run it, Journeys, Recognition.
- Update `head()` in `src/routes/index.tsx` — title/description/og reframed to "Nikhil Sharma | Founder of Elevated India".
- No new images, no new dependencies, no token changes.
- Facts stay limited to what is verified from nikhilsharma.com and elevatedindia.com; nothing invented.
