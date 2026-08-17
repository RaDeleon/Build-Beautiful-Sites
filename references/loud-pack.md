# Loud Pack

Use this reference when the user wants a complete, ready-to-adapt concept prompt rather than a phase-specific prompt. Select the closest archetype, replace every fictional or bracketed detail, and apply the main skill's strategy, originality, accessibility, performance, credit-approval, and production-readiness rules.

## Operating rules

- Treat the prompts as starting briefs, not permission to invent client facts.
- Replace names, prices, metrics, schedules, specifications, testimonials, product capabilities, property features, and proof with verified information.
- Translate provider or model instructions to the tools currently available; Higgsfield is optional unless the user explicitly selects it.
- Create and approve a master reference image before related clips when identity consistency matters.
- Prototype motion at lower cost before final-resolution generation and obtain approval before spending paid credits.
- Keep essential copy and CTAs in semantic HTML.
- Replace demo-only interactions with working production behavior before calling a site client-ready.
- Derive principles from named reference sites without copying their identity, assets, text, or distinctive composition.

## Contents

1. The Product Reveal - Luxury Watch
2. The Journey - Deep-Sea Descent
3. The Portfolio - Starring You
4. The Drop - Streetwear Store
5. The Restaurant - Fire and Steak
6. The Listing - Luxury Penthouse
7. The Machine - Electric Hypercar
8. The Product Launch - AI SaaS
9. The Studio - Creative Agency
10. The Gym - Strength Brand

## 1. The Product Reveal - Luxury Watch

**Description:** Creates a restrained luxury launch centered on one consistent hero product, using an orbit, macro detail pass, and exploded assembly sequence.

**Best for:** Premium physical products such as watches, jewelry, audio gear, fragrance, footwear, and other detail-rich objects.

**Narrative structure:** Master product image -> hero orbit -> macro fly-through -> exploded assembly -> specifications and scarcity -> private waitlist.

**Adaptation note:** Swap the watch for any hero product, such as headphones, fragrance, jewelry, or footwear. Preserve the orbit, macro, and assembly logic for products whose material and construction create value.

### Complete prompt

```text
Build me an award-winning cinematic "3D scroll" website for AURUM & NOIR — a fictional Swiss luxury watch brand
launching its tourbillon chronograph, the "Eclipse."


VISUALS — generate with the Seedance 2.0 model on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip).
First generate ONE hero image of the watch — brushed black titanium case, gold tourbillon visible through sapphire
glass — and pass it as an image reference to every clip so the product is identical throughout:
1. HERO ORBIT — a slow, perfectly smooth 360° studio turntable of the watch floating in a black void, dramatic rim
lighting, faint gold dust drifting.
2. MACRO FLY-THROUGH — extreme close-up glide across the dial: engraved indices, the tourbillon cage spinning, light
rippling across brushed metal.
3. EXPLODED ASSEMBLY — the watch assembling itself from floating components — gears, springs, bezel, strap — converging
into the finished piece.


WEBSITE — scroll-scrub the hero orbit as a canvas frame sequence so scrolling rotates the watch. Lenis smooth scroll,
text reveals pinned to scroll position. Sections: cinematic hero with the brand name tracking in → "Crafted in
Darkness" story → macro details scrubbing clip 2 → exploded engineering view with spec callouts (42mm grade-5 titanium,
72h reserve, 217 components) → "Edition of 88 — $48,000" → private waitlist CTA. Off-black background, gold accent,
high-contrast serif display + minimal sans. Copy tone: quiet, expensive, very few words. Launch on localhost and verify
every scroll animation works before telling me it's done.
```

## 2. The Journey - Deep-Sea Descent

**Description:** Builds a continuous five-stage descent by chaining each rendered endpoint into the next clip, then maps the resulting journey to scroll progress.

**Best for:** Experiences, tourism, expeditions, museums, factory journeys, launches, ascents, and other narratives where scrolling represents travel.

**Narrative structure:** Surface -> sunlit zone -> twilight zone -> midnight zone -> destination payoff -> qualified booking CTA.

**Adaptation note:** Reuse the chained-journey structure for a mountain ascent, rocket launch, cave tour, factory walkthrough, or any experience where scroll represents physical progress.

### Complete prompt

```text
Build me an award-winning cinematic "3D scroll" website for ABYSSAL — a fictional deep-sea expedition company that
takes 8 civilians per year to the ocean floor aboard its submersible, the EREBUS.


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8–10s per clip). First generate ONE
hero image of the EREBUS — sleek deep-black hull, glowing cyan viewport ring, twin floodlights — and reference it in
every clip. CRITICAL: generate clips in order and use each clip's FINAL frame as the START image of the next (Seedance
start_image / end_image) so all five join into one seamless, unbroken descent:
1. THE SURFACE — aerial dawn over open ocean; the EREBUS slips beneath the waves, ending fully submerged in sunlit
blue.
2. SUNLIT ZONE — descent through god rays and bubble columns, a whale silhouette gliding past; the blue deepens.
3. TWILIGHT ZONE — light dies to near-black, ghostly jellyfish drift, the floodlights flicker on.
4. MIDNIGHT ZONE — total darkness; bioluminescent creatures spark around the hull like a starfield.
5. THE FLOOR — floodlights sweep across hydrothermal vents; the EREBUS holds on a final hero frame.


WEBSITE — concatenate the five clips and scroll-scrub the full descent as a canvas frame sequence: scrolling down IS
diving down. Fixed HUD depth meter counting 0m → 3,800m with zone labels. Sections pinned per zone: hero ("How deep
will you go?") → one striking fact per zone → EREBUS spec callouts → "8 seats. $250,000. Departing March 2027." → "Join
the Manifest" CTA. Background color-grades deep navy → pure black with depth; bioluminescent cyan accent; thin
technical sans with HUD micro-details. Launch on localhost and verify the scrub is seamless across all five clips
before telling me it's done.
```

## 3. The Portfolio - Starring You

**Description:** Uses a consistent identity reference across three cinematic scenes and layers positioning, proof, offers, work, and contact content over the sequence.

**Best for:** Creators, freelancers, consultants, agency owners, speakers, and personal brands with a strong portrait reference.

**Narrative structure:** Identity hero -> builder/capability scene -> closer/outcome scene -> proof and selected work -> personal CTA.

**Adaptation note:** Replace every bracketed field and begin with a strong, well-lit portrait. Spend additional attempts on the hero orbit and select the take that preserves identity throughout the rotation.

### Complete prompt

```text
Build me an award-winning cinematic "3D scroll" PERSONAL PORTFOLIO website for me — [YOUR NAME]. Study the style of the
Awwwards Site of the Year 2025 (Lando Norris): huge bold typography, cinematic scroll-driven sequences, and a central
3D element that rotates as you scroll. My version's central element is ME.


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip). First upload my attached
photo to Higgsfield and pass it as an identity reference on EVERY generation so my face is consistent. Keep my wardrobe
identical throughout: [black t-shirt, dark overshirt]. Three clips:
1. HERO ORBIT — I stand confident, arms crossed, in a black-void studio with [emerald] rim lighting; the camera does
one slow 360° orbit around me.
2. THE BUILDER — I sit at a dark desk surrounded by floating holographic screens showing my work; slow cinematic push-
in.
3. THE CLOSER — I walk toward camera down a dark gallery lined with glowing screens, stopping in a hero pose.


WEBSITE — scroll-scrub the hero orbit as a canvas frame sequence: "[YOUR NAME]" in massive display type tracks in
letter-by-letter, subtitle "[what you do in one line]". Animated stats strip counting up on scroll: [your 3–5 best
numbers — subscribers, clients, projects, revenue]. THREE PILLARS section over clip 2 revealing [your three main
offers] one at a time. WORK section over clip 3 with cards for [your 3 best projects], each with a one-line pitch and
hover motion. FINALE: "[your main CTA]" with two buttons, plus footer links to [your socials]. Ink-black background,
[emerald] accent, cream typography, bold condensed display font, kinetic type, subtle grain, Lenis smooth scroll.
Launch on localhost and verify the orbit scrub is buttery before telling me it's done.
```

## 4. The Drop - Streetwear Store

**Description:** Anchors a campaign in one approved lookbook image, then combines a cinematic hero, individual product turntables, and material-detail footage with shopping interactions.

**Best for:** Fashion labels, merchandise stores, limited releases, capsule collections, and product drops.

**Narrative structure:** Campaign reveal -> product spins -> fabric proof -> product selection -> availability capture or checkout.

**Adaptation note:** For a real store, use photographs of the actual products and garments as references so the motion supports rather than invents the merchandise.

### Complete prompt

```text
Build me an award-winning cinematic e-commerce website for ONYX SUPPLY — a fictional premium streetwear label releasing
its "Midnight Drop": a heavyweight hoodie, cargo pants, and a chrome-accent puffer jacket.


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, no audio). First generate ONE lookbook image of a model
wearing the full fit — matte black garments, chrome zipper accents, shot on a foggy rooftop at night — and reference it
in every clip for garment consistency:
1. HERO — 16:9, the model walks slowly toward camera through rooftop fog, neon city glow behind, wind moving the
fabric.
2. PRODUCT SPINS — three separate 1:1 clips: each garment on an invisible mannequin doing a clean 360° turntable on a
concrete-gray studio background.
3. FABRIC MACRO — 16:9 extreme close-up traveling across stitching, zipper teeth, and embossed logo.


WEBSITE — hero scrolls-scrubs the model walk with "ONYX SUPPLY — MIDNIGHT DROP" in massive type and a live countdown
timer to the drop. Product grid: three cards that autoplay their spin clips on hover, each with name, price ($180 /
$210 / $340), size selector, and "Add to Cart" (non-functional demo checkout drawer is fine). Fabric-macro section with
a "Built heavy. Cut clean." quality manifesto. Sticky cart icon, marquee strip of product names between sections,
"Notify me" email capture for sold-out sizes. Design: concrete gray + matte black, one acid-green accent, brutalist
condensed type. Launch on localhost and verify hover-to-play works on every product card before telling me it's done.
```

## 5. The Restaurant - Fire and Steak

**Description:** Creates a sensory hospitality site using food, room, and craft footage, followed by a concise menu, location information, and reservation path.

**Best for:** Restaurants, cafes, bars, hospitality groups, chefs, tasting concepts, and private-dining venues.

**Narrative structure:** Signature sensory hero -> room atmosphere -> culinary craft -> menu and private dining -> reservation.

**Adaptation note:** Replace the concept name with the real venue, use the current menu and hours, and use photographs of the actual food and space as production references.

### Complete prompt

```text
Build me an award-winning cinematic website for EMBER & OAK — a fictional wood-fire steakhouse in [CITY].


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip):
1. HERO — slow-motion macro of a ribeye searing over open flame, embers rising into darkness, cinematic amber light.
2. THE ROOM — a slow dolly through a moody dining room at golden hour: leather booths, candlelight, a bartender
stirring a cocktail in the background.
3. THE CRAFT — overhead shot of a chef's hands plating a dish, steam curling up, dark slate table.


WEBSITE — full-bleed hero scroll-scrubbing the fire clip with "EMBER & OAK" in an elegant serif tracking in and "Wood
fire. Nothing else." beneath. Sections: story section over clip 2 with restrained copy ("Six dishes. One fire.") → menu
section with two columns (Fire / Field), dish names and prices in refined typography → private dining section over clip
3 → hours + map + "Reserve a Table" CTA with a simple date/party-size form. Design: near-black background, warm cream
text, ember-orange accent, film grain overlay, slow parallax on section images. Copy tone: sparse, confident, sensory.
Mobile pass: collapse the menu into a single elegant column. Launch on localhost and verify the hero scrub and
reservation form render correctly before telling me it's done.
```

## 6. The Listing - Luxury Penthouse

**Description:** Turns an architectural reference into an approach-and-tour narrative with chained interior clips, verified property facts, a gallery, and a showing inquiry.

**Best for:** Realtors, developers, vacation rentals, hotels, resorts, and single-property campaigns.

**Narrative structure:** Exterior approach -> arrival -> interior flow -> defining amenity/view -> private-showing CTA.

**Adaptation note:** Use the property's actual listing photography as reference frames and never generate rooms, finishes, amenities, views, dimensions, or other features that do not exist.

### Complete prompt

```text
Build me an award-winning cinematic single-property website for THE MERIDIAN — a fictional $12.5M penthouse on the 60th
floor in [CITY].


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8–10s per clip). Generate ONE hero
image of the tower at dusk first and keep its architecture consistent across clips. Chain clips 2–4 using each clip's
final frame as the next clip's start frame for one continuous tour:
1. THE APPROACH — aerial drone shot curving around the glass tower at dusk, city lights igniting below.
2. THE ARRIVAL — camera glides from the private elevator into a vast living room: floor-to-ceiling windows, Italian
marble, a fireplace flickering on.
3. THE FLOW — continuous move through the chef's kitchen and primary suite toward glowing terrace doors.
4. THE TERRACE — out onto the wraparound terrace at night: infinity pool reflecting the skyline, timelapse clouds.


WEBSITE — scroll-scrub the chained tour so scrolling walks the buyer through the home. Fixed elegant progress indicator
naming each space as you pass it. Sections: hero ("Sixty floors above everything") → residence facts strip (4 bed · 5.5
bath · 7,200 sq ft · private elevator) → gallery section → amenities list with reveal animations → "$12,500,000" price
section → "Request a Private Showing" form with agent card. Design: ink background, champagne-gold accent, thin elegant
serif, generous whitespace. Launch on localhost and verify the tour scrub feels continuous before telling me it's done.
```

## 7. The Machine - Electric Hypercar

**Description:** Maintains one vehicle identity across a reveal and multi-environment driving sequence, then synchronizes performance storytelling and a HUD with scroll.

**Best for:** Vehicles, bikes, boats, drones, machinery, mobility products, and products that need to be shown in motion.

**Narrative structure:** Reveal -> acceleration -> environment challenge -> night state -> configuration or reservation.

**Adaptation note:** Apply the reveal, run, environment, and night structure to any moving product, including bicycles, boats, drones, and industrial machinery.

### Complete prompt

```text
Build me an award-winning cinematic "3D scroll" website for VANTA — a fictional 1,200-horsepower electric hypercar.
Model the experience on the Scout Motors Site-of-the-Year style: the product moving through real terrain as you scroll,
not sitting in a studio.


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip). Generate ONE hero image
of the car first — low, wide, matte obsidian body, thin light-bar face — and reference it everywhere. Chain the drive
clips start-to-end frame so the journey is continuous:
1. REVEAL — dust settles in a white-sand desert at dawn to reveal the VANTA motionless; light-bar ignites.
2. THE RUN — low tracking shot as it launches across the desert flats, sand ribboning off the wheels.
3. THE CANYON — it threads a red-rock canyon at speed, camera whipping around a corner to follow.
4. NIGHT MODE — full dark; only its light signature and taillight trails carving through dunes under stars.


WEBSITE — scroll-scrub the chained run so scrolling drives the car. Speed-style HUD in the corner that climbs 0 → 250
mph with scroll progress. Sections: hero with "VANTA" in ultrawide type → performance stats that count up (0–60 in 1.9s
· 1,200 hp · 520 mi range) → design section with macro stills → night-mode section → configurator teaser with three
paint options that recolor a hero still → "Reserve — $1,000 deposit" CTA. Design: black on black, electric-cyan accent,
ultrawide condensed type, subtle motion blur transitions. Launch on localhost and verify the HUD syncs to scroll before
telling me it's done.
```

## 8. The Product Launch - AI SaaS

**Description:** Uses generated motion for emotional framing while structuring the page around product proof, features, real interface imagery, pricing, objections, and conversion.

**Best for:** Software, apps, AI tools, analytics products, startups, and technology launches.

**Narrative structure:** Abstract problem signal -> intervention -> calm outcome -> product evidence -> pricing and signup/demo CTA.

**Adaptation note:** Replace the concept with the real product and use actual product screenshots or screen recordings for proof. Generated media should frame the product, not substitute for it.

### Complete prompt

```text
Build me an award-winning cinematic landing page for PULSE — a fictional AI analytics platform that predicts customer
churn before it happens.


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip):
1. HERO — a dark void where thousands of glowing data particles swirl and assemble themselves into a clean, floating
dashboard UI with a rising graph; the graph pulses like a heartbeat.
2. THE SIGNAL — macro camera glide across holographic charts and streaming numbers, one red anomaly lighting up and
being caught.
3. THE CALM — the dashboard on a laptop in a bright minimal office, coffee steam drifting, everything under control.


WEBSITE — scroll-scrub the particle-assembly hero so the dashboard literally builds itself as the visitor scrolls, with
"See churn coming." in massive type and a "Start free" button. Sections: social-proof logo strip → three feature blocks
pinned over clip 2, each revealing one line (Predict · Explain · Prevent) → animated metrics counters (94% prediction
accuracy · 12,000 teams · $40M revenue saved) → product screenshot section with a browser-frame mockup and soft shadow
→ pricing table, three tiers with the middle tier highlighted → FAQ accordion → final CTA over clip 3. Design: near-
black hero fading to white for the body, single violet accent, crisp geometric sans, glassmorphism cards. Launch on
localhost and verify the hero assembly scrub and the pricing toggle work before telling me it's done.
```

## 9. The Studio - Creative Agency

**Description:** Builds a bold studio narrative from an abstract hero, a work/showreel environment, and a human team scene, supported by case studies and qualification-focused contact.

**Best for:** Agencies, design studios, production companies, consultancies, and creative collectives.

**Narrative structure:** Point of view -> kinetic manifesto -> selected work -> services and team -> fit-based inquiry.

**Adaptation note:** Replace fictional work with verified case studies, owned media, real outcomes, and the studio's actual services and team.

### Complete prompt

```text
Build me an award-winning cinematic website for NOIR&CO — a fictional creative studio that designs brands "for
companies that refuse to be ignored."


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip):
1. HERO — black ink blooming and morphing through water in extreme slow motion, occasionally flashing into gold.
2. THE WORK — a stylized showreel shot: oversized posters and screens with bold typography sliding past on gallery
walls, camera dollying sideways.
3. THE PEOPLE — silhouettes of a small team working late in a moody studio, city bokeh through the window.


WEBSITE — hero scroll-scrubs the ink bloom behind "NOIR&CO" set in enormous type that fills 80% of the viewport, with
the manifesto line typing itself beneath. Sections: kinetic manifesto section where each scroll step slams one word on
screen (LOUD. PRECISE. UNFORGETTABLE.) → selected-work grid of 4 fictional case studies with hover video reveals using
clip 2 crops → services list in an editorial two-column layout → team section over clip 3 → oversized footer: "Got a
brand worth fighting for?" with email and socials. Design: pure black and bone white, gold accent used exactly three
times on the whole site, mix of a brutalist display face and a refined serif for body. Cursor becomes a small gold dot
with a trailing ring. Launch on localhost and verify the kinetic text section and hover reveals work before telling me
it's done.
```

## 10. The Gym - Strength Brand

**Description:** Combines an emotional commitment moment with equipment and training footage, then supports it with programs, coaches, verified results, pricing, schedule, and signup.

**Best for:** Gyms, coaches, martial-arts studios, sports programs, fitness memberships, and performance brands.

**Narrative structure:** Commitment hero -> training environment -> programs and people -> proof -> membership or trial CTA.

**Adaptation note:** Replace the concept with the real gym, current programs, coaches, prices, schedule, location, and consented photography of the actual space and members.

### Complete prompt

```text
Build me an award-winning cinematic website for FORGE — a fictional strength gym in [CITY] with the motto "Earn it."


VISUALS — Seedance 2.0 on the Higgsfield MCP (std mode, 1080p, 16:9, no audio, ~8s per clip):
1. HERO — slow motion: an athlete claps chalked hands in a dark gym, the chalk cloud blooming through a single overhead
shaft of light.
2. THE IRON — macro tracking shot along a loaded barbell as hands grip it, knurling and chalk in sharp detail, plates
settling.
3. THE GRIND — a runner sprinting on an outdoor track at dawn, breath visible, camera tracking low and fast alongside.


WEBSITE — scroll-scrub the chalk-cloud hero with "FORGE" in massive industrial type punching in and "Earn it." beneath.
Sections: philosophy section with one line per scroll step ("No mirrors. No machines that do the work for you.") →
training programs grid (Strength / Conditioning / Team) with hover states → coaches section with card hover lift →
results strip with counters (members, PRs this month, years open) → membership pricing, three tiers, middle
highlighted, "First week free" CTA → schedule table + map + signup form. Design: charcoal background, bone-white type,
one blood-red accent, heavy condensed display font, grain and vignette on all imagery. Mobile pass: programs grid
becomes swipeable cards. Launch on localhost and verify the hero scrub and pricing section render correctly before
telling me it's done.
```
