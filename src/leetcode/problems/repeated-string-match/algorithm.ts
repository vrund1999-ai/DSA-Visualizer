import type { Step } from "@/core/types";

export interface RepeatMatchData {
  a: string;
  b: string;
  count: number;
  /** the current repeated string a.repeat(count) */
  repeated: string;
  /** index in `repeated` where b matches, or -1 */
  matchAt: number | null;
  answer: number | null;
}

export type RepeatMatchStep = Step<RepeatMatchData>;

/**
 * Repeated String Match: repeat a just enough to reach b's length (⌈|b|/|a|⌉ copies); if b is a substring
 * we're done, otherwise one extra copy covers any offset. If b still isn't found, it's impossible. `line`
 * indexes CODE.
 */
export function repeatMatchSteps(a: string, b: string): RepeatMatchStep[] {
  const steps: RepeatMatchStep[] = [];

  const snap = (o: Partial<RepeatMatchData>): RepeatMatchData => ({
    a,
    b,
    count: 0,
    repeated: "",
    matchAt: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RepeatMatchData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let count = Math.ceil(b.length / a.length);
  let s = a.repeat(count);
  push(3, `Repeat "${a}" ${count} time(s) → "${s}" (length ≥ |b|).`, { count, repeated: s });

  let at = s.indexOf(b);
  if (at !== -1) {
    push(4, `"${b}" is a substring → ${count} copies.`, { count, repeated: s, matchAt: at, answer: count });
    return steps;
  }

  s += a;
  count++;
  push(6, `Not found; add one more copy → ${count} copies.`, { count, repeated: s });
  at = s.indexOf(b);
  if (at !== -1) {
    push(7, `"${b}" now matches → ${count} copies.`, { count, repeated: s, matchAt: at, answer: count });
    return steps;
  }

  push(8, `"${b}" can never be formed → -1.`, { count, repeated: s, answer: -1 });
  return steps;
}
