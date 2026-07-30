import type { Step } from "@/core/types";

export interface Game24Data {
  original: number[];
  /** current working multiset of numbers (as display strings) */
  numbers: string[];
  /** the expression just formed, e.g. "(8 - 4)" */
  formed: string | null;
  /** value of the formed expression */
  value: number | null;
  answer: boolean | null;
  /** winning full expression, if found */
  solution: string | null;
}

export type Game24Step = Step<Game24Data>;

const MAX_STEPS = 500;
const fmt = (x: number) => (Number.isInteger(x) ? `${x}` : x.toFixed(2));

/**
 * 24 Game: using +, −, ×, ÷ and any grouping, can the four cards make 24? Backtracking repeatedly replaces
 * a pair of numbers with the result of one operation until a single value remains, checking whether it is
 * (within tolerance) 24. `line` indexes CODE.
 */
export function game24Steps(nums: number[]): Game24Step[] {
  const steps: Game24Step[] = [];
  let solution: string | null = null;

  const snap = (o: Partial<Game24Data>): Game24Data => ({
    original: nums,
    numbers: [],
    formed: null,
    value: null,
    answer: null,
    solution,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<Game24Data> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const combine = (a: number, b: number, ea: string, eb: string): [number, string][] => {
    const out: [number, string][] = [
      [a + b, `(${ea} + ${eb})`],
      [a - b, `(${ea} - ${eb})`],
      [a * b, `(${ea} × ${eb})`],
    ];
    if (Math.abs(b) > 1e-6) out.push([a / b, `(${ea} ÷ ${eb})`]);
    return out;
  };

  const solve = (arr: number[], exprs: string[]): boolean => {
    if (arr.length === 1) {
      const ok = Math.abs(arr[0] - 24) < 1e-6;
      if (ok) {
        solution = exprs[0];
        push(3, `Reached ${fmt(arr[0])} = 24 via ${exprs[0]} ✓`, { numbers: arr.map(fmt), answer: true, solution: exprs[0] });
      }
      return ok;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i === j) continue;
        const rest = arr.filter((_, k) => k !== i && k !== j);
        const restE = exprs.filter((_, k) => k !== i && k !== j);
        for (const [v, e] of combine(arr[i], arr[j], exprs[i], exprs[j])) {
          push(9, `Combine ${exprs[i]} and ${exprs[j]} → ${e} = ${fmt(v)}.`, {
            numbers: [...rest, v].map(fmt),
            formed: e,
            value: v,
          });
          if (solve([...rest, v], [...restE, e])) return true;
        }
      }
    }
    return false;
  };

  push(0, `Try to make 24 from [${nums.join(", ")}].`, { numbers: nums.map(fmt) });
  const ok = solve(nums, nums.map((n) => `${n}`));

  // the terminal answer frame is always recorded, even if the search hit the step cap
  steps.push({
    id: steps.length,
    line: 13,
    explanation: ok ? `Yes — ${solution} = 24.` : `No combination of the four cards makes 24.`,
    data: snap({ answer: ok, numbers: nums.map(fmt) }),
    highlights: [],
  });
  return steps;
}
