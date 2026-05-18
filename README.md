# sales-activity-icons

Hand-drawn clay-style SVG illustrations for sales / CRM activity tracking.
Twelve activities, each with an `idle` and a `happy` variant that
cross-fades when you flip an `isCelebrating` prop.

Built for activity-tracker apps where the user logs calls, appointments,
referrals, and closes — but the SVGs are generic enough to drop into any
sales gamification UI.

Zero runtime dependencies beyond React. One file, ~510 lines of inline
SVG. Just copy `src/ActivityIllustration.tsx` into your project, or
install from this repo directly.

## Install

This package isn't on npm. Use it one of three ways:

```bash
# 1. Copy the file
curl -O https://raw.githubusercontent.com/leotansingapore/sales-activity-icons/main/src/ActivityIllustration.tsx

# 2. Install from GitHub
npm install github:leotansingapore/sales-activity-icons

# 3. Git submodule
git submodule add https://github.com/leotansingapore/sales-activity-icons.git vendor/sales-activity-icons
```

## Usage

```tsx
import { ActivityIllustration, hasActivityIllustration } from 'sales-activity-icons';

function MyActivityTile({ id, isLogging }: { id: string; isLogging: boolean }) {
  if (!hasActivityIllustration(id)) return null; // fall back to your own icon

  return (
    <ActivityIllustration
      activityId={id}
      isCelebrating={isLogging}
      className="w-16 h-16"
    />
  );
}
```

`isCelebrating` cross-fades the tile from the idle face to the happy
face (eyes squint, mouth opens, sparkles appear). Pair it with a brief
`animation: activity-pop` scale keyframe for the satisfying tap feel:

```css
@keyframes activity-pop {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.10); }
  65%  { transform: scale(0.98); }
  100% { transform: scale(1); }
}
```

The component already sets `animation: activity-pop 0.7s ...` when
`isCelebrating` is true — you just need the keyframe in your global CSS.

## Available illustrations

The `activityId` you pass is normalised (lowercased, spaces/underscores
become dashes) and looked up in the map below.

| `activityId` keys | What it shows |
|---|---|
| `call` | A friendly smartphone (sky-blue) — happy variant adds emanating sound waves and a heart |
| `set` | A pink calendar with a checkmark — happy variant adds a star burst |
| `referral` | Two stick figures with a heart between them — happy variant adds a third |
| `opening` | A coffee cup (peach) — happy variant adds steam and a sparkle |
| `closing` | A gold trophy with a star — happy variant adds confetti |
| `closed` | A stack of money (butter/gold) with `$` — happy variant adds dollar coins and `$$$` |
| `client-servicing` | A headset support agent (lavender) — happy variant adds a thumbs-up bubble |
| `social-media-post` | A phone showing a social card with a heart — happy variant adds a like burst |
| `social-appt` | Two heads with a chat bubble (mint) — happy variant adds smile lines |
| `hangout` | Two cups clinking (rose + sky) — happy variant adds sparkles |
| `roleplay` | A theatre mask pair (lavender) — happy variant adds a spotlight |
| `story` | An open book (peach) — happy variant adds floating sparkles |

### Aliases

The component normalises common DB ID spellings so you don't have to
rewrite your activity table:

| DB ID | Resolves to |
|---|---|
| `prospecting` | `call` |
| `calls` (plural) | `call` |
| `social-prospecting` | `social-appt` |
| `social-media-posting` | `social-media-post` |

Add more in `ALIAS_MAP` at the bottom of `ActivityIllustration.tsx`.

## API

```ts
interface ActivityIllustrationProps {
  activityId: string;
  isCelebrating?: boolean;
  className?: string;
}

function ActivityIllustration(props: ActivityIllustrationProps): JSX.Element | null;

// Cheap probe to decide whether to render this component or fall back
// to your own lucide / heroicon for unknown activity types.
function hasActivityIllustration(activityId: string): boolean;
```

The wrapper renders a circular white container with a soft purple
shadow. Pass `className` to override sizing (`w-16 h-16` etc.) and add
edges/borders.

## Customising

The illustrations use seven shared `radialGradient` definitions:
`cg-rose`, `cg-peach`, `cg-sky`, `cg-mint`, `cg-butter`, `cg-lavender`,
`cg-gold`. Change those `<stop>` colours at the top of the file to
re-tint the whole set without touching individual paths.

## Why this repo exists

These started as inline SVGs in a single activity-tracker app, then got
copied into a second app, then a third. Extracting them so future apps
can `npm install` instead of `cp`.

## License

MIT — Leo Tan
