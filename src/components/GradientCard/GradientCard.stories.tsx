import type { Meta, StoryObj } from '@storybook/react-vite';
import { GradientCard } from './GradientCard';
import { GRADIENTS } from './gradients';

const meta: Meta<typeof GradientCard> = {
  title: 'Components/GradientCard',
  component: GradientCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(GRADIENTS),
      description: 'Gradient theme applied via CSS custom property on ::before',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    footer: { control: 'text' },
  },
  args: {
    title: 'Gradient Card',
    description: 'A card with a subtle gradient overlay using a CSS ::before pseudo-element.',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }],
    },
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof GradientCard>;

// ─── Individual variant stories ───────────────────────────────────────────────

export const Original: Story = {
  args: { variant: 'original', title: 'Original TopQs', description: 'The classic blue-purple gradient at 7% opacity.' },
};

export const Sunset: Story = {
  args: { variant: 'sunset', title: 'Sunset Glow', description: 'Warm orange to coral. Perfect for creative content.' },
};

export const Ocean: Story = {
  args: { variant: 'ocean', title: 'Ocean Depth', description: 'Cool blue tones flowing from top to bottom.' },
};

export const Neon: Story = {
  args: { variant: 'neon', title: 'Neon Lights', description: 'Electric green to hot pink — cyberpunk vibe.' },
};

export const Aurora: Story = {
  args: { variant: 'aurora', title: 'Aurora Borealis', description: 'Three-color northern lights effect.' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', title: 'Ghost Light', description: 'Ultra-subtle white gradient for minimal designs.' },
};

export const Ember: Story = {
  args: { variant: 'ember', title: 'Ember Glow', description: 'Fire-inspired orange to red transition.' },
};

export const Mint: Story = {
  args: { variant: 'mint', title: 'Mint Fresh', description: 'Refreshing mint to cyan. Great for wellness themes.' },
};

export const Lavender: Story = {
  args: { variant: 'lavender', title: 'Lavender Dream', description: 'Soft purple tones for a calming atmosphere.' },
};

export const Intense: Story = {
  args: { variant: 'intense', title: 'Intense Original', description: 'Original gradient at 20% opacity — more dramatic.' },
};

// ─── Interactive playground ────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'original',
    title: 'Playground',
    description: 'Use the Controls panel below to tweak every prop.',
    footer: 'Try changing the variant dropdown →',
  },
};

// ─── All variants at once ──────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 p-4">
      {(Object.keys(GRADIENTS) as Array<keyof typeof GRADIENTS>).map((variant) => (
        <GradientCard
          key={variant}
          variant={variant}
          title={variant.charAt(0).toUpperCase() + variant.slice(1)}
          description="Hover to see the gradient intensify."
        />
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
