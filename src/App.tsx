import { GradientCard, GRADIENTS, type GradientVariant } from './components/GradientCard';

const CARDS: { variant: GradientVariant; title: string; description: string }[] = [
  { variant: 'original',  title: '1. Original TopQs',    description: 'The classic gradient. Subtle blue to purple transition with 7% opacity creates a sophisticated accent.' },
  { variant: 'sunset',    title: '2. Sunset Glow',       description: 'Warm orange to coral gradient reminiscent of a sunset. Perfect for creative or energetic content.' },
  { variant: 'ocean',     title: '3. Ocean Depth',       description: 'Cool blue tones flowing from top to bottom. Ideal for professional or tech-focused designs.' },
  { variant: 'neon',      title: '4. Neon Lights',       description: 'Electric green to hot pink creates a cyberpunk vibe. Lower opacity keeps it subtle yet striking.' },
  { variant: 'aurora',    title: '5. Aurora Borealis',   description: 'Multi-color gradient mimicking northern lights. Three color stops create a magical effect.' },
  { variant: 'ghost',     title: '6. Ghost Light',       description: 'Ultra-subtle white gradient for minimal designs. Almost invisible but adds depth to dark backgrounds.' },
  { variant: 'ember',     title: '7. Ember Glow',        description: 'Fire-inspired gradient with orange to red transition. Evokes warmth and passion.' },
  { variant: 'mint',      title: '8. Mint Fresh',        description: 'Refreshing mint to cyan gradient. Perfect for health, wellness, or eco-friendly themes.' },
  { variant: 'lavender',  title: '9. Lavender Dream',    description: 'Soft purple tones create a calming, dreamy atmosphere. Great for creative or spiritual content.' },
  { variant: 'intense',   title: '10. Intense Original', description: 'Same as the original but with 20% opacity for a more dramatic effect.' },
];

function App() {
  return (
    <div className="min-h-screen py-16 px-5">
      <div className="max-w-[1400px] mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-light mb-5 bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            Gradient Card Component
          </h1>
          <p className="text-white/60 text-lg">10 Beautiful Variations of Subtle Gradient Overlays</p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
          {CARDS.map(({ variant, title, description }) => (
            <GradientCard
              key={variant}
              variant={variant}
              title={title}
              description={description}
              footer={GRADIENTS[variant].replace('linear-gradient(', '').replace(/\)$/, '')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
