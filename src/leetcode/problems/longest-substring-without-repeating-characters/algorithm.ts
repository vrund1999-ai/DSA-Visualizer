import type { Highlight, Step } from "@/core/types";

export interface SlidingData {
  chars: string[];
  left: number;
  right: number | null;
  best: number;
  bestRange: { start: number; end: number } | null;
}

export type SlidingStep = Step<SlidingData>;

/**
 * Sliding window: extend `right` one char at a time; whenever the new char is
 * already in the window, shrink from `left` until it isn't. The window always
 * holds distinct chars, so its length is a candidate answer. `line` indexes CODE.
 */
export function slidingSteps(s: string): SlidingStep[] {
  const chars = [...s];
  const steps: SlidingStep[] = [];
  const seen = new Set<string>();
  let left = 0;
  let best = 0;
  let bestStart = 0;
  let bestEnd = -1;

  const window = (right: number, extra: Highlight[] = []): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = left; k <= right; k++) hl.push({ ref: k, role: "active" });
    return [...hl, ...extra];
  };
  const snap = (o: Partial<SlidingData>): SlidingData => ({
    chars: [...chars],
    left,
    right: null,
    best,
    bestRange: bestEnd >= 0 ? { start: bestStart, end: bestEnd } : null,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: SlidingData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(2, "Grow a window of distinct characters; track the longest seen.", snap({ right: null }), []);

  for (let right = 0; right < chars.length; right++) {
    const ch = chars[right];
    push(4, `Extend to '${ch}' at index ${right}. Is it already in the window?`, snap({ right }), [
      ...window(right - 1),
      { ref: right, role: "current" },
    ]);

    while (seen.has(ch)) {
      push(5, `Duplicate '${ch}' — drop '${chars[left]}' at index ${left} from the left.`, snap({ right }), [
        ...window(right - 1).filter((h) => h.ref !== left),
        { ref: left, role: "swapped" },
        { ref: right, role: "current" },
      ]);
      seen.delete(chars[left]);
      left++;
    }

    seen.add(ch);
    const len = right - left + 1;
    if (len > best) {
      best = len;
      bestStart = left;
      bestEnd = right;
    }
    push(9, `Window "${chars.slice(left, right + 1).join("")}" has length ${len} (best ${best}).`, snap({ right }), window(right, [{ ref: right, role: "current" }]));
  }

  push(11, `Longest substring without repeats has length ${best}.`, snap({ right: null }), bestEnd >= 0 ? Array.from({ length: bestEnd - bestStart + 1 }, (_, k) => ({ ref: bestStart + k, role: "target" as const })) : []);
  return steps;
}
