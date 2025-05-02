export const resolveColor = (color?: string, themeColors?: Record<string, string>) => {
  if (!color) return undefined;
  return themeColors?.[color] || color;
};
