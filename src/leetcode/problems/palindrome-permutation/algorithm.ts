import type { Step } from "@/core/types";

export interface PalinPermData {
  s: string;
  pos: number | null;
  /** characters currently having odd count */
  odd: string[];
  answer: boolean | null;
}

export type PalinPermStep = Step<PalinPermData>;

/**
 * A string can be rearranged into a palindrome iff at most one character has an odd
 * count. Toggle each character's membership in an "odd" set as we scan; the final set
 * size decides. `line` indexes CODE.
 */
export function palinPermSteps(s: string): PalinPermStep[] {
  const steps: PalinPermStep[] = [];
  const odd = new Set<string>();

  const snap = (pos: number, o: Partial<PalinPermData>): PalinPermData => ({ s, pos, odd: [...odd], answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<PalinPermData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Track which characters currently have an odd count.");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (odd.has(c)) {
      odd.delete(c);
      push(3, i, `'${c}' seen again — now even, remove from odd set.`);
    } else {
      odd.add(c);
      push(4, i, `'${c}' now odd — add to odd set.`);
    }
  }

  const answer = odd.size <= 1;
  push(6, -1, `${odd.size} char(s) with odd count → ${answer ? "can" : "cannot"} form a palindrome.`, { answer });
  return steps;
}
