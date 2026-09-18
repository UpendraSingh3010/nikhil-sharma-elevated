# More motion, hover and auto-sliding across the page

Keep the current design and copy. Add a layer of tasteful movement so the page feels modern and alive, plus a little more substance in the sections that are currently thin.

## Motion and interaction

1. **Opening** — slow parallax drift on the palace image as you scroll, a soft gold glow breathing behind the portrait frame, and a small animated "scroll" cue at the bottom that fades out once you move.
2. **Portrait** — tilts slightly toward the cursor on desktop, with a gold hairline frame that slides into place on hover.
3. **Journeys rail** — auto-advances one card at a time on a gentle loop, pauses the moment you hover, touch or drag it, and resumes after. Adds arrow controls and small progress dots, plus a "drag to explore" hint. Cards lift and reveal their description on hover (already there), now with a slow image zoom and a gold border that draws itself.
4. **Numbered lists** (interests, principles) — each row underlines from left to right on hover, its number brightening to gold; rows stagger in one after another as the section arrives.
5. **Counters** — the credential numbers (two decades, 621+ reviews, 1,000+ journeys style facts) count up once when scrolled into view.
6. **Headings** — key headlines rise line by line instead of all at once.
7. **Buttons and links** — gold fill sweeping in from the left on hover, arrows nudging outward.
8. **Award card** — soft gold sheen sweeping across it once when it enters view.
9. **Section index labels** — the gold rule beside each label draws out as the section appears.

All of it stays subdued: short durations, no bouncing, and everything is disabled for visitors who prefer reduced motion.

## More data on the page

To give the new motion something to work with, add short verified-only content:

- A compact timeline in the story section: two decades on the road, founding Elevated India, bringing ground operations in-house, the 2026 award — dates only where they are known, no invented years.
- A small stats band under the story: 5.0 TripAdvisor rating, 621+ reviews, two decades, and the in-house fleet/guides/control-room facts, as animated counters.
- One or two extra signature journeys are not invented; the rail keeps the four real itineraries and gains the auto-slide behaviour instead.

## Technical notes

- Work in `src/components/nikhil-landing.tsx` plus small additions to `src/styles.css` (keyframes and utilities) and new hooks in `src/hooks/` for the auto-slide, count-up, and cursor tilt.
- No new dependencies; CSS animations, `requestAnimationFrame`, and IntersectionObserver only.
- Existing reveal hook and reduced-motion guards are reused and extended.
- No new imagery needed.
