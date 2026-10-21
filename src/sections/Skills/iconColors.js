// Brand colors from skillsData that are too light on a white/paper background,
// mapped to a darker shade of the same hue (black brands use the ink token).
const visibleOnLight = {
  "text-white": "text-ink",
  "text-zinc-300": "text-ink",
  "text-yellow-300": "text-yellow-500",
  "text-yellow-400": "text-yellow-500",
  "text-cyan-400": "text-cyan-500",
  "text-sky-400": "text-sky-500",
  "text-blue-400": "text-blue-600",
  "text-green-400": "text-green-600",
  "text-violet-400": "text-violet-500",
};

export const iconColor = (color) => visibleOnLight[color] ?? color;
