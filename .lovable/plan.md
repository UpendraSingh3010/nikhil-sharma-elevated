# Premium Nikhil Sharma Story Upgrade

## Goal
Make the page feel like a living luxury-travel editorial rather than a long static presentation, while keeping Nikhil Sharma as the narrator and Elevated India as the company he built.

The selected image approach is a **mix of official Elevated India material and newly generated originals**. Every photograph will appear in one content location only.

## What will change

### 1. Give every story its own photograph
- Build an image-usage map and remove the current reuse across the opening, chapters, interests, journeys, seasons, gallery, and closing invitation.
- Keep Nikhil’s real portrait exclusively in the opening.
- Use suitable official Elevated India photographs only where their source and intended subject are clear.
- Generate a coordinated set of original editorial photographs for all remaining scenes: festivals, wildlife, palace hospitality, sacred India, crafts, family travel, backwaters, food, and landscapes.
- Replace the duplicated moving gallery rows with a gallery interaction that does not repeat the same image on screen or in its looping sequence.

### 2. Recompose the page for more movement and depth
- Turn key sections into cinematic scenes with image masks, layered depth, controlled parallax, slow image drift, and crossfades.
- Add a desktop chapter indicator that responds to the section currently in view, with a compact mobile equivalent.
- Use scroll-linked transitions between dark forest and ivory editorial sections so the page feels continuous rather than stacked.
- Add responsive cursor effects to selected photographs and links, restrained hover captions, image reveals, and tactile pressed states.
- Keep motion calm and luxurious, pause automatic movement during interaction, and disable it for reduced-motion visitors.

### 3. Add a premium travel gallery
- Create an asymmetric “India, observed” gallery using unique photographs and varied proportions.
- Add category controls such as People, Places, Rituals, Wildlife, and Details.
- Open photographs in an accessible full-screen viewer with title, location/context, previous/next controls, and keyboard support.
- Use editorial captions rather than generic stock-photo labels.

### 4. Add verified guest reviews
- Source exact public reviews from an authoritative Elevated India profile or public review listing.
- Show a small curated review sequence with exact wording, reviewer attribution, platform, and source link.
- Add an auto-advancing quote transition, progress indicator, and manual previous/next controls; pause while hovered, focused, or touched.
- If exact review text or attribution cannot be verified, keep the existing aggregate rating and review count instead of inventing testimonials.

### 5. Add signature experiences
- Introduce an interactive “Signature experiences” section focused on how Nikhil’s travel philosophy becomes a real day on the ground.
- Use verified experience categories such as palace access, private wildlife safaris, artisan encounters, sacred rituals, culinary encounters, and family journeys.
- Give every experience a unique image, concise factual description, region/context, and link to the relevant official Elevated India page.
- Present it as a changing cinematic stage with a selectable index, not another grid of repetitive cards.

### 6. Expand festivals and seasonal India
- Replace the current three repeated-image seasonal cards with a richer festival calendar using unique photography.
- Include only dates and descriptions confirmed by reliable current sources; distinguish fixed 2026 dates from evergreen seasonal guidance.
- Present festivals as moments worth planning around, not as guaranteed availability.
- Add a horizontal date line, animated active marker, and expandable festival details linking outward for itinerary enquiries.

### 7. Refine existing journeys and content density
- Keep the verified journeys, founder timeline, company story, wider ventures, and recognition archive.
- Remove visual duplication between journey cards and the large active journey display by using the photograph only in the cinematic display; the selector will use typographic route data and small graphic markers.
- Tighten repeated text and vary layouts so each section has a distinct storytelling purpose.
- Preserve the forest, ivory, and antique-gold identity, Instrument Serif and Work Sans typography, and first-person voice.

## Content and source safeguards
- Personal claims remain sourced from Nikhil Sharma’s official website.
- Journey, experience, operational, rating, and company claims remain sourced from Elevated India’s official website and official profiles.
- Reviews will be quoted exactly and linked to their public source.
- No invented customer names, review text, festival dates, access promises, awards, destinations, or outcomes.
- Official photography will be stored locally through the project asset flow; no external image hotlinking.
- Generated images will never depict Nikhil or imply that generated travellers are identifiable real customers.

## Technical details
- Keep the existing React/TanStack structure and semantic design tokens.
- Extend the motion hooks for active-section tracking, crossfade stages, gallery viewing, and auto-advancing reviews.
- Use CSS transforms and opacity for smooth performance; avoid heavy animation dependencies.
- Ensure all controls work by keyboard and touch, include meaningful alternative text, and preserve `prefers-reduced-motion` behavior.
- Keep the opening image eager-loaded; lazy-load imagery below it and provide stable aspect ratios to prevent layout movement.

## Verification
- Confirm no photographic asset is assigned to more than one visible content item.
- Check the opening, gallery viewer, review slider, signature experiences, festival interactions, journey controls, and mobile menu on desktop and mobile.
- Confirm automatic motion pauses correctly and reduced-motion mode is static and complete.
- Confirm every image loads, outbound source link works, text remains readable, and there are no browser errors or failed requests.
