import type { Highlight, Step } from "@/core/types";

export interface FindAnagramsInput {
  s: string;
  p: string;
}

export interface FindAnagramsData {
  chars: string[];
  p: string;
  windowStart: number;
  windowEnd: number | null;
  matches: number[];
  isMatch: boolean;
}

export type FindAnagramsStep = Step<FindAnagramsData>;

const freq = (m: Map<string, number>) => JSON.stringify([...m.entries()].sort());

/**
 * A fixed-width window of length |p| slides across s; keeping a running character
 * count for the window, whenever it equals p's count the window is an anagram of
 * p. `line` indexes CODE.
 */
export function findAnagramsSteps(input: FindAnagramsInput): FindAnagramsStep[] {
  const { s, p } = input;
  const chars = [...s];
  const steps: FindAnagramsStep[] = [];
  const need = new Map<string, number>();
  for (const c of p) need.set(c, (need.get(c) ?? 0) + 1);
  const win = new Map<string, number>();
  const matches: number[] = [];
  const L = p.length;

  const add = (c: string) => win.set(c, (win.get(c) ?? 0) + 1);
  const remove = (c: string) => {
    const n = (win.get(c) ?? 0) - 1;
    if (n <= 0) win.delete(c);
    else win.set(c, n);
  };

  const snap = (start: number, end: number | null, isMatch: boolean): FindAnagramsData => ({
    chars: [...chars],
    p,
    windowStart: start,
    windowEnd: end,
    matches: [...matches],
    isMatch,
  });
  const push = (line: number, explanation: string, data: FindAnagramsData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const windowHl = (start: number, end: number, match: boolean): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = start; j <= end; j++) hl.push({ ref: j, role: match ? "target" : "active" });
    return hl;
  };

  for (let i = 0; i < chars.length; i++) {
    add(chars[i]);
    if (i >= L) remove(chars[i - L]);
    const start = i - L + 1;
    if (i >= L - 1) {
      const match = freq(win) === freq(need);
      if (match) matches.push(start);
      push(7, match ? `Window "${s.slice(start, i + 1)}" matches p's letters — anagram at ${start}.` : `Window "${s.slice(start, i + 1)}" isn't an anagram of "${p}".`, snap(start, i, match), windowHl(start, i, match));
    } else {
      push(4, `Filling the first window… added '${chars[i]}'.`, snap(0, i, false), windowHl(0, i, false));
    }
  }

  push(10, `Anagram start indices: [${matches.join(", ")}].`, snap(chars.length, null, false), []);
  return steps;
}
