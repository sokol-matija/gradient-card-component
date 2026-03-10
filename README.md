# @msokol/gradient-card-component

A React component library providing 10 beautiful gradient card variations with subtle overlay effects, built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @msokol/gradient-card-component
```

## Usage

```tsx
import { GradientCard } from '@msokol/gradient-card-component'
import '@msokol/gradient-card-component/styles'

export default function App() {
  return (
    <GradientCard
      variant="aurora"
      title="My Card"
      description="A card with a beautiful gradient overlay."
    />
  )
}
```

> **Note:** The styles import is required — without it the gradient overlay won't render.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Card heading (required) |
| `variant` | `GradientVariant` | `"original"` | Gradient theme |
| `description` | `string` | — | Body text |
| `footer` | `ReactNode` | — | Bottom slot content |
| `children` | `ReactNode` | — | Custom body content |
| `className` | `string` | — | Extra classes on the card |

## Variants

| Variant | Description |
|---|---|
| `original` | Classic blue to purple (7% opacity) |
| `sunset` | Warm orange to coral |
| `ocean` | Cool blue tones |
| `neon` | Electric green to hot pink |
| `aurora` | Multi-color northern lights |
| `ghost` | Ultra-subtle white |
| `ember` | Fire-inspired orange to red |
| `mint` | Refreshing mint to cyan |
| `lavender` | Soft purple tones |
| `intense` | Original at 20% opacity |

```tsx
import { GradientCard, GRADIENTS } from '@msokol/gradient-card-component'
import type { GradientVariant } from '@msokol/gradient-card-component'

// Render all variants
const variants = Object.keys(GRADIENTS) as GradientVariant[]

variants.map((variant) => (
  <GradientCard key={variant} variant={variant} title={variant} />
))
```

## Requirements

- React 19+

## License

MIT
