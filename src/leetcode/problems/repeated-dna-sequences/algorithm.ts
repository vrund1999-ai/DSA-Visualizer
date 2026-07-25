import type { Step } from "@/core/types";

export interface DnaData {
  s: string;
  /** window start index */
  i: number | null;
  sub: string | null;
  /** true if the current window was already seen */
  isRepeat: boolean;
  repeated: string[];
  answer: string[] | null;
}

export type DnaStep = Step<DnaData>;

const W = 10;

/**
 * Slide a length-10 window across the DNA string. A window seen a second time is a
 * repeated sequence; a set of already-seen windows makes each check O(1). `line`
 * indexes CODE.
 */
export function dnaSteps(s: string): DnaStep[] {
  const steps: DnaStep[] = [];
  const seen = new Set<string>();
  const repeated = new Set<string>();

  const snap = (o: Partial<DnaData>): DnaData => ({ s, i: null, sub: null, isRepeat: false, repeated: [...repeated], answer: null, ...o });
  const push = (line: number, explanation: string, data: DnaData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Slide a ${W}-letter window; collect windows seen more than once.`, snap({}));

  for (let i = 0; i + W <= s.length; i++) {
    const sub = s.substring(i, i + W);
    const isRepeat = seen.has(sub);
    if (isRepeat) repeated.add(sub);
    else seen.add(sub);
    push(isRepeat ? 4 : 5, `Window "${sub}" — ${isRepeat ? "seen before, mark repeated" : "first time"}.`, snap({ i, sub, isRepeat }));
  }

  push(7, `Repeated sequences: ${repeated.size ? [...repeated].join(", ") : "none"}.`, snap({ answer: [...repeated] }));
  return steps;
}
