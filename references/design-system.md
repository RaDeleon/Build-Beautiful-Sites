# Design System

Use this reference whenever the work involves layout, typography, color, or
interface motion — which is every mode, including Static Premium.

The rest of this skill is good at saying what to avoid. This file says what to
do instead. Prohibitions produce restraint; only values produce design. When a
choice here conflicts with the client's existing design system, the client's
system wins — take the reasoning, not the numbers.

Starter values live in `assets/starter/tokens.css`. Adapt them to the visual
world; keep the relationships.

## Contents

1. Typography
2. Layout and grid
3. Color
4. Depth and surface
5. Rhythm and density
6. The signature element
7. Motion values
8. Premium tells

## Typography

- Two families maximum. A third is a defect unless it is a mono carrying data.
- Display type at desktop must be at least **4× body size**. The starter scale
  runs 8rem against 1.0625rem, roughly 7.5×. A hero at 2.5rem is the most
  common single tell of a generated page.
- Body base **17px**, not 16px. Lede 20px. Nothing essential below 15px.
- Tracking by role — leaving display at `0` reads as an untouched default:

| Role | Size | Tracking | Leading |
| --- | --- | --- | --- |
| Display | ≥ 3rem | −0.03em | 0.98 |
| Subhead | 1.75–3rem | −0.015em | 1.15 |
| Body | 1.0625rem | 0 | 1.6 |
| Label / eyebrow | 0.8125rem uppercase | +0.09em | 1.2 |

- Measure: body ≤ **68ch**, lede ≤ 52ch, headlines ≤ **18ch** so they wrap on
  purpose. Full-bleed body text is a layout failure regardless of font choice.
- Build hierarchy from **four** channels — size, weight, color, and space.
  Varying only size is why sections read as one flat sheet.
- `text-wrap: balance` on headings, `pretty` on body. Check for orphans at
  every breakpoint, not just the design width.
- Center copy in **at most one** section per page. Centered everything is on
  the rejection list.

## Layout and grid

- 12 columns, but do not fill 12. Place primary content on columns 1–7 or 3–10.
  A page where every section spans the full container is a stack of cards.
- Containers: 72rem default, 44rem for reading, 90rem for wide media.
- Gutter `clamp(1.25rem, 5vw, 4rem)`. Never a fixed 16px on desktop.
- At least one section should deliberately break the container — full-bleed
  media, an offset image, a rule that runs past the text column.
- Vary section spacing across **three** tiers rather than applying one value.
  Equal spacing everywhere destroys pacing.
- **Adjacent sections must differ on at least two of:** column count,
  alignment, media presence, background tone, density. If two neighbors differ
  only in copy, one of them is filler.

## Color

- Canvas is tinted toward the visual world. Never `#000` or `#FFF` — both read
  as defaults, and pure black crushes cinematic gradients into banding.
- **One accent hue, at most three uses per viewport.** A fourth use means the
  accent has become a background color and has stopped signaling anything.
- Contrast minimums, verified rather than assumed:

| Role | Minimum | Use |
| --- | --- | --- |
| Primary text | 7:1 | body, headings |
| Muted text | 4.5:1 | captions, secondary |
| Subtle text | 4.5:1 | meta only, never body |
| Structural line | none | borders, dividers |
| Accent as text | 4.5:1 | links, active state |

- Accent hues need different lightness per theme. A gold that reads on a dark
  canvas will fail contrast on a light one — darken it rather than reusing it.
- Over media, contrast is measured against the **worst frame** in that band's
  range, not the poster.

## Depth and surface

Reach for these in order. Stop as soon as the separation reads:

1. **Line** — a 1px rule at low contrast
2. **Tone** — a one-step surface shift
3. **Shadow** — tight, neutral, low opacity
4. **Glow** — effectively never; it is the signature of generated design

- Maximum **two** elevation levels on a marketing page.
- Shadows are neutral black at ≤ 0.4 alpha. A colored or 40px-blurred shadow is
  a rejection.
- Radius stays restrained: 2/4/8px. `--radius-full` belongs on badges and
  avatars, not buttons and cards.
- Borders and shadows are alternatives, not partners. Using both on the same
  element is usually indecision.

## Rhythm and density

- One idea per screen. If a visitor must choose between two competing focal
  points, neither lands.
- Whitespace is proportional to importance. The hero and the CTA get the most;
  supporting content is allowed to be dense.
- Vertical rhythm should accelerate and decelerate — tight through supporting
  detail, loose around the moments that matter.
- Cap any repeated card grid at **6 visible items** before it needs a reason to
  continue.

## The signature element

Define exactly one, and make it load-bearing: removing it should visibly weaken
the design. Pick from a real mechanism, not a decoration.

| Category | Examples |
| --- | --- |
| Typographic | An oversized numeral system, a recurring rule-and-label pair, a display face used at one extreme size only |
| Structural | A persistent asymmetric offset, a column that never aligns, an edge-anchored index |
| Material | One recurring texture, grain, or paper/metal tone tied to the product |
| Temporal | A single motion behavior that recurs — one direction of reveal, one easing, used nowhere else |
| Photographic | A consistent crop logic or aspect ratio used across every image |

A gradient, a glass card, or a glow is not a signature element. Those are
defaults available to every page.

## Motion values

| Token | Value | Use |
| --- | --- | --- |
| `--duration-fast` | 120ms | hover, press — must feel instant |
| `--duration-base` | 220ms | state change, toggle |
| `--duration-slow` | 420ms | entrance, reveal |

- Interaction feedback under **150ms**. Anything slower reads as lag, not polish.
- Entrance travel ≤ **24px**. Long slide-ins are a generated-page tell.
- Stagger ≤ **60ms** per item, capped at 6 items total.
- Animate `transform` and `opacity` only. Animating layout properties is a
  performance defect, not a style choice.
- Entrances play **once**. Replaying on scroll-up re-entry is the most common
  motion bug in scroll-driven pages.
- Reduced motion collapses duration tokens at the source (see the media query
  in `tokens.css`) so every transition built on them stops at once. Do not
  merely slow the same animation.

## Premium tells

The micro-decisions that separate directed work from generated work. Each is
cheap; collectively they are most of the perceived difference.

- **Optical over mathematical alignment.** Quotes, bullets, and round letterforms
  need to hang slightly outside the box to look aligned.
- **Tabular numerals for data**, proportional for prose. Specs, prices, and
  counters that jitter while changing are unfinished.
- **Real crops.** Vary aspect ratios deliberately; a page where every image is
  the same rectangle reads as a template.
- **Asymmetric hero.** Headline and media on different columns beats a centered
  stack in nearly every premium reference.
- **One weight jump, not three.** Regular to bold, skipping the middle, reads
  more confident than a gradual ramp.
- **Punctuation.** Real quotes, en/em dashes, non-breaking spaces before units.
- **Dark-mode images.** Photography chosen for a light canvas usually needs a
  different crop or grade on a dark one — not just a filter.
- **The fold does not exist**, but the first screen does. It must carry the
  offer, not only atmosphere.
