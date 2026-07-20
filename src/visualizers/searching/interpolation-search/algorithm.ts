import type { Highlight } from "@/core/types";
import type { SearchInput, SearchStep } from "../types";

/**
 * Pure step generator for interpolation search over a sorted array. Instead of
 * always probing the middle, it estimates the target's position by linear
 * interpolation between the endpoints. `line` points into
 * INTERPOLATION_SEARCH_CODE.
 */
export function interpolationSearchSteps(input: SearchInput): SearchStep[] {
  const values = [...input.values].sort((a, b) => a - b);
  const target = input.target;
  const n = values.length;
  const steps: SearchStep[] = [];
  let comparisons = 0;
  let foundIndex: number | null = null;

  const frame = (lo: number, hi: number, pos?: number): Highlight[] =>
    Array.from({ length: n }, (_, i) => {
      const role: Highlight["role"] =
        i < lo || i > hi ? "visited" : i === pos ? "current" : "active";
      const badge =
        i === pos ? "pos" : i === lo ? "lo" : i === hi ? "hi" : undefined;
      return { ref: i, role, badge };
    });

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...values], target, foundIndex },
      highlights,
      metrics: { comparisons },
    });
  };

  let lo = 0;
  let hi = n - 1;
  push(0, `Search for ${target}; window is [${lo}, ${hi}].`, [...frame(lo, hi)]);

  while (lo <= hi && values[lo] <= target && target <= values[hi]) {
    const denom = values[hi] - values[lo] || 1;
    const pos = Math.min(
      hi,
      Math.max(lo, lo + Math.floor(((target - values[lo]) * (hi - lo)) / denom)),
    );
    push(2, `Interpolate a probe position: pos = ${pos}.`, [...frame(lo, hi, pos)]);
    comparisons++;

    if (values[pos] === target) {
      foundIndex = pos;
      push(4, `Match! ${target} is at index ${pos}.`, [
        ...frame(lo, hi).map((h) =>
          h.ref === pos ? { ...h, role: "target" as const } : h,
        ),
      ]);
      return steps;
    }
    if (values[pos] < target) {
      push(5, `a[${pos}] = ${values[pos]} < ${target} — search the right part.`, [
        ...frame(lo, hi, pos),
      ]);
      lo = pos + 1;
    } else {
      push(6, `a[${pos}] = ${values[pos]} > ${target} — search the left part.`, [
        ...frame(lo, hi, pos),
      ]);
      hi = pos - 1;
    }
  }

  foundIndex = -1;
  push(8, `${target} is not present.`, [...frame(0, -1)]);
  return steps;
}
