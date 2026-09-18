# Nikhil Sharma, founder of Elevated India

Turn the page into a dedicated Elevated India world, with Nikhil as the founder at its centre. Same premium, editorial feel as the current design, but the subject becomes the luxury travel house: palaces, tiger country, backwaters, and private journeys.

## What changes

**Look and feel**
- Shift the palette from saffron to Elevated India's register: deep forest/charcoal night, warm ivory paper, antique gold accent. Keep Instrument Serif headlines with Work Sans body.
- Full-bleed cinematic imagery behind the opening and between sections, with soft gold hairlines and small uppercase index labels.
- New UI features: a sticky gold progress line at the top, a horizontal drag/scroll rail of signature journeys, hover-reveal journey cards, a quiet marquee of credentials, and gentle fade-and-rise as each section enters view. All motion respects reduced-motion settings.

**Sections (top to bottom)**
1. Opening — "Curators of Extraordinary India", Elevated India wordmark, one-line promise, two actions (Explore journeys / Speak with a curator). Credential strip: 5.0 TripAdvisor with 621+ reviews, IATO member, recognised by the Ministry of Tourism, two decades on India's roads.
2. Founder — Nikhil Sharma, Founder & CEO, with his real portrait: why he built a travel house that runs its own ground rather than outsourcing it. Co-founder Manu Singh credited.
3. What we curate — six interests: Royal Residences & Palace Life, Wilderness & Private Safaris, Spiritual & Transformational, Art Design & Culture, Celebrations & Private Events, Family & Multi-Generational.
4. Signature journeys — horizontal rail of four real itineraries: The Wild Heart of India (Central India, 8–10 days), Palaces & Wilderness (Rajasthan, 16 days), Imperial Cities & Kerala Backwaters (16 days), Golden Triangle with Kathmandu (12 days).
5. How we run it — deep local intelligence, curated not crowded, complete discretion, plus own licensed guides, chauffeured fleet and 24/7 control room.
6. Recognition — the 2026 ET NOW.IN award for Excellence in Curated Luxury Travel Experiences (West Edition, Mumbai, 25 August 2026).
7. Invitation — closing line and a single link out to elevatedindia.com. No phone number or email on the page, as you chose.

**Images I will generate** (original, no copying): a palace courtyard at dusk, a tiger reserve at first light, Kerala backwaters at golden hour, and a Rajasthan desert fort, plus a soft texture for section breaks. Nikhil's real portrait stays as-is; I will never generate his likeness.

## Ground rules
- Only facts published on elevatedindia.com. No invented awards, review counts, prices, or partner names.
- His business-growth ventures section is removed from this page since the page is now dedicated to Elevated India; his personal credentials stay only where they explain the founder.

## Technical notes
- Rewrite `src/components/nikhil-landing.tsx` as an Elevated India landing composed of small section components; retitle the file's usage in `src/routes/index.tsx` with new head meta (title, description, og/twitter).
- Replace the saffron token set in `src/styles.css` with forest/ivory/gold oklch tokens; add utilities for the gold rule, progress line, marquee and reveal keyframes, all gated behind `prefers-reduced-motion`.
- New generated art saved under `src/assets/elevated/` and imported directly; unused venture logos removed from the page.
- Scroll reveal via a small IntersectionObserver hook, no new dependencies.
