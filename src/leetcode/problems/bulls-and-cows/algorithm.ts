import type { Step } from "@/core/types";

export interface BullsData {
  secret: string;
  guess: string;
  /** role per index: "bull" if matched in place, else null */
  bullAt: boolean[];
  /** index currently examined in the bull pass */
  i: number | null;
  /** unmatched-digit tallies */
  s: number[];
  g: number[];
  bulls: number;
  cows: number;
  phase: "bulls" | "cows";
  answer: string | null;
}

export type BullsStep = Step<BullsData>;

/**
 * A bull is a digit that matches in the same position. Everything left over is tallied per digit for
 * both strings; the misplaced-but-present "cows" are the overlap — min(secret count, guess count) for
 * each digit. `line` indexes CODE.
 */
export function bullsSteps(secret: string, guess: string): BullsStep[] {
  const steps: BullsStep[] = [];
  const bullAt = new Array(secret.length).fill(false);
  const s = new Array(10).fill(0);
  const g = new Array(10).fill(0);
  let bulls = 0;
  let cows = 0;

  const snap = (o: Partial<BullsData>): BullsData => ({ secret, guess, bullAt: [...bullAt], i: null, s: [...s], g: [...g], bulls, cows, phase: "bulls", answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BullsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "First pass: find bulls (same digit, same position); tally the rest.");

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      bullAt[i] = true;
      push(5, `Position ${i}: both ${secret[i]} → bull (${bulls}).`, { i, phase: "bulls" });
    } else {
      s[+secret[i]]++;
      g[+guess[i]]++;
      push(8, `Position ${i}: ${secret[i]} vs ${guess[i]} — no bull; tally both.`, { i, phase: "bulls" });
    }
  }

  for (let d = 0; d < 10; d++) {
    const c = Math.min(s[d], g[d]);
    if (c > 0) {
      cows += c;
      push(12, `Digit ${d}: min(${s[d]}, ${g[d]}) = ${c} cow(s) (total ${cows}).`, { phase: "cows" });
    }
  }

  const answer = `${bulls}A${cows}B`;
  push(13, `Result: ${answer}.`, { phase: "cows", answer });
  return steps;
}
