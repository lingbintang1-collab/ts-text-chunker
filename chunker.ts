/** Split text into overlapping word windows for local RAG prep. No models, no API. */
export function chunk(text: string, size = 200, overlap = 40): string[] {
  if (size <= 0 || overlap < 0 || overlap >= size) throw new RangeError("need size>0 and 0<=overlap<size");
  const words = text.split(/\s+/).filter(Boolean);
  const step = size - overlap;
  const out: string[] = [];
  for (let i = 0; i < Math.max(1, words.length); i += step) {
    const piece = words.slice(i, i + size);
    if (piece.length) out.push(piece.join(" "));
    if (i + size >= words.length) break;
  }
  return out;
}
