# Richer, more cinematic page — ideas taken from the reference, built our own way

I studied the reference material you shared. What makes it feel expensive is not its colours — it is
*density of craft*: a layered background that never looks flat, section index labels, numbered
chapters, filter chips, a photo mosaic, region stats, and quiet motion on almost every element.

We keep our own identity (forest-night + ivory + antique gold, Instrument Serif headlines) and add
those structural ideas in our own form. Nothing is copied — no Rajasthan-origin story, no borrowed
sentences, no invented testimonials or guest numbers.

## New backgrounds and surface craft

- A layered night surface: soft gold radial glow behind headlines, a fine film grain over dark
  sections, and a vignette at section edges so photos melt into the page instead of sitting in boxes.
- Ivory sections get a paper texture with a faint gold hairline grid.
- Every section gets a small index label (01 — MY STORY) and a gold rule that draws itself in on scroll.
- Headline words rise line by line instead of the whole block fading.

## New sections and interactions

1. **Opening** — the portrait becomes a tall pinned frame beside the name, with the palace image
   behind it drifting on scroll. A soft-focus edge and breathing gold glow stay.
2. **Chapters of my work** — the story becomes four numbered chapters (large 01–04 numerals, image
   on one side, text on the other, alternating), each sliding in from its own side.
3. **What I curate** — the six interests become filter chips; picking one highlights the matching
   journeys below. Cards lift, the image zooms slightly, and a gold sweep crosses on hover.
4. **Journeys rail** — keeps auto-sliding, gains a full-bleed preview panel above it that changes
   with the active card, plus a thin progress bar instead of plain dots.
5. **Gallery of field notes** — a two-row mosaic of our generated imagery that drifts sideways on its
   own, pauses on hover, with captions fading up on each frame.
6. **Where my guests come from** — a quiet world-reach band built only from what is verifiable
   (regions we serve, the 5.0 rating and 621+ reviews, IATO membership, Ministry of Tourism
   recognition) — no made-up country counts.
7. **Recognition** — the 2026 award card gets a pressed-foil look with the sheen retained.
8. **Invitation** — closing panel over a full-bleed image, single link out to elevatedindia.com.

## Images

I will generate six new originals for the mosaic and chapter panels (desert dunes at dusk, fort
walls at golden hour, artisan hands at work, palace courtyard at night, backwater dawn, market
texture). Your real portrait stays the only photo of you; I never generate your likeness.

## Facts and honesty

Only facts already verified from nikhilsharma.com and elevatedindia.com. No invented testimonials,
guest counts, prices, partner names, phone or email on the page.

## Technical notes

- No new dependencies. Extend `src/hooks/use-motion.ts` with a marquee/drift hook and a
  words-rise helper; add utilities (`grain`, `vignette`, `glow-radial`, `foil`, `chip`, `zoom-frame`,
  `drift-row`) to `src/styles.css` as Tailwind v4 `@utility` blocks with `@theme` tokens.
- Rebuild `src/components/nikhil-landing.tsx` around the new section order; chapter/journey/gallery
  content stays in typed constants at the top of the file.
- All new motion sits behind `prefers-reduced-motion`; images below the fold stay lazy, the opening
  image stays eager.
- Verify with Playwright at desktop and mobile after the build.
