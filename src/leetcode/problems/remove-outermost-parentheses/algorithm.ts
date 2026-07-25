import type { Step } from "@/core/types";

export interface RemoveOuterData {
  s: string;
  pos: number | null;
  depth: number;
  /** true if the current char was kept */
  kept: boolean | null;
  res: string;
  answer: string | null;
}

export type RemoveOuterStep = Step<RemoveOuterData>;

/**
 * Track parenthesis depth. A '(' that raises depth from 0 to 1 (or a ')' that lowers
 * it back to 0) is an outermost bracket of a primitive and is dropped; everything at
 * depth ≥ 1 is kept. `line` indexes CODE.
 */
export function removeOuterSteps(s: string): RemoveOuterStep[] {
  const steps: RemoveOuterStep[] = [];
  let depth = 0;
  let res = "";

  const snap = (pos: number, o: Partial<RemoveOuterData>): RemoveOuterData => ({ s, pos, depth, kept: null, res, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<RemoveOuterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Keep only brackets at depth ≥ 1 (drop each primitive's outer pair).");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") {
      const kept = depth > 0;
      if (kept) res += c;
      depth++;
      push(5, i, `'(' at depth ${depth - 1} → ${kept ? "keep" : "drop (outer)"}; depth ${depth}.`, { kept });
    } else {
      depth--;
      const kept = depth > 0;
      if (kept) res += c;
      push(8, i, `')' → depth ${depth}; ${kept ? "keep" : "drop (outer)"}.`, { kept });
    }
  }

  push(11, -1, `Result: "${res}".`, { answer: res });
  return steps;
}
