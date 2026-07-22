import type { Highlight, Step } from "@/core/types";

export interface CharReplaceInput {
  s: string;
  k: number;
}

export interface CharReplaceData {
  chars: string[];
  k: number;
  left: number;
  right: number | null;
  maxFreq: number;
  best: number;
}

export type CharReplaceStep = Step<CharReplaceData>;

/**
 * Sliding window: a window is valid when (windowSize − mostCommonCount) ≤ k, i.e.
 * at most k characters need replacing. Grow the window; when it becomes invalid,
 * shrink from the left. The largest valid window is the answer. `line` indexes
 * CODE.
 */
export function charReplaceSteps(input: CharReplaceInput): CharReplaceStep[] {
  const { s, k } = input;
  const chars = [...s];
  const steps: CharReplaceStep[] = [];
  const count = new Map<string, number>();
  let left = 0;
  let maxFreq = 0;
  let best = 0;

  const windowHl = (l: number, r: number, role: string): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = l; j <= r; j++) hl.push({ ref: j, role: role as Highlight["role"] });
    return hl;
  };
  const snap = (o: Partial<CharReplaceData>): CharReplaceData => ({
    chars: [...chars],
    k,
    left,
    right: null,
    maxFreq,
    best,
    ...o,
  });
  const push = (line: number, explanation: string, data: CharReplaceData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  for (let right = 0; right < chars.length; right++) {
    count.set(chars[right], (count.get(chars[right]) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, count.get(chars[right])!);
    push(4, `Add '${chars[right]}'. Window [${left}..${right}], most common count ${maxFreq}.`, snap({ right }), [
      ...windowHl(left, right - 1, "active"),
      { ref: right, role: "current" },
    ]);

    while (right - left + 1 - maxFreq > k) {
      count.set(chars[left], count.get(chars[left])! - 1);
      push(6, `${right - left + 1 - maxFreq} replacements needed > k=${k} — drop '${chars[left]}' and shrink.`, snap({ right }), [
        { ref: left, role: "swapped" },
        ...windowHl(left + 1, right, "active"),
      ]);
      left++;
    }

    if (right - left + 1 > best) best = right - left + 1;
    push(8, `Valid window "${s.slice(left, right + 1)}" of length ${right - left + 1} (best ${best}).`, snap({ right }), windowHl(left, right, "target"));
  }

  push(10, `Longest achievable run has length ${best}.`, snap({ right: null }), []);
  return steps;
}
