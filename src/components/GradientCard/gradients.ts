export const GRADIENTS = {
  original:  'linear-gradient(225deg, transparent 55%, rgba(70, 111, 213, 0.07) 70%, rgba(234, 78, 200, 0.07) 100%)',
  sunset:    'linear-gradient(135deg, transparent 40%, rgba(255, 94, 87, 0.1) 60%, rgba(255, 157, 77, 0.1) 100%)',
  ocean:     'linear-gradient(180deg, transparent 50%, rgba(0, 119, 190, 0.08) 75%, rgba(0, 180, 216, 0.08) 100%)',
  neon:      'linear-gradient(45deg, transparent 30%, rgba(57, 255, 20, 0.05) 50%, rgba(255, 20, 147, 0.05) 100%)',
  aurora:    'linear-gradient(270deg, transparent 45%, rgba(120, 119, 198, 0.12) 65%, rgba(255, 119, 198, 0.12) 85%, rgba(119, 221, 119, 0.12) 100%)',
  ghost:     'linear-gradient(225deg, transparent 70%, rgba(255, 255, 255, 0.02) 85%, rgba(255, 255, 255, 0.04) 100%)',
  ember:     'linear-gradient(315deg, transparent 35%, rgba(255, 154, 0, 0.08) 55%, rgba(255, 69, 0, 0.08) 100%)',
  mint:      'linear-gradient(120deg, transparent 60%, rgba(85, 239, 196, 0.06) 80%, rgba(129, 236, 236, 0.06) 100%)',
  lavender:  'linear-gradient(200deg, transparent 50%, rgba(162, 155, 254, 0.09) 70%, rgba(223, 186, 244, 0.09) 100%)',
  intense:   'linear-gradient(225deg, transparent 40%, rgba(70, 111, 213, 0.2) 60%, rgba(234, 78, 200, 0.2) 100%)',
} as const;

export type GradientVariant = keyof typeof GRADIENTS;
