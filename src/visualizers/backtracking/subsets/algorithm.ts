import type { Highlight } from "@/core/types";
import type { SubsetsStep } from "./types";

/**
 * Pure step generator that enumerates all subsets of a set by backtracking: at
 * each element choose exclude then include, recording a subset at the leaves.
 * `line` points into SUBSETS_CODE.
 */
export function subsetsSteps(elements: number[]): SubsetsStep[] {
  const n = elements.length;
  const steps: SubsetsStep[] = [];
  const includedIdx: number[] = [];
  const subsets: number[][] = [];

  const push = (line: number, explanation: string, pointer: number, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: {
        elements,
        includedIdx: [...includedIdx],
        pointer,
        subsets: subsets.map((s) => [...s]),
      },
      highlights,
      metrics: { subsets: subsets.length },
    });
  };

  const backtrack = (i: number) => {
    if (i === n) {
      const subset = includedIdx
        .slice()
        .sort((a, b) => a - b)
        .map((idx) => elements[idx]);
      subsets.push(subset);
      push(1, `Leaf reached — record subset {${subset.join(", ")}}.`, -1, [
        ...includedIdx.map((idx) => ({ ref: idx, role: "sorted" as const })),
      ]);
      return;
    }
    push(2, `Element ${elements[i]}: first branch excludes it.`, i, [
      { ref: i, role: "current" },
    ]);
    backtrack(i + 1);

    includedIdx.push(i);
    push(3, `Now include ${elements[i]}.`, i, [{ ref: i, role: "current" }]);
    backtrack(i + 1);
    includedIdx.pop();
    push(5, `Undo: remove ${elements[i]} and return.`, i, [
      { ref: i, role: "current" },
    ]);
  };

  push(0, `Enumerate every subset of ${n} elements by include/exclude choices.`, -1, []);
  backtrack(0);
  push(1, `Done — found all ${subsets.length} subsets (2^${n}).`, -1, []);

  return steps;
}
