export function truncate(text: string, maxLen = 220) {
  if (!text || text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  return cut.slice(0, cut.lastIndexOf(" ")) + " [...]";
}
