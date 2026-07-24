import type { Step } from "@/core/types";

export interface OddEvenNode {
  value: number;
  parity: "odd" | "even";
}

export interface OddEvenData {
  nodes: OddEvenNode[];
  active: number | null;
  phase: "split" | "done";
}

export type OddEvenStep = Step<OddEvenData>;

/**
 * Group nodes at odd positions (1st, 3rd, …) before those at even positions,
 * preserving order within each group. We build the odd list then append the even
 * list. `line` indexes CODE.
 */
export function oddEvenSteps(input: number[]): OddEvenStep[] {
  const steps: OddEvenStep[] = [];
  const original: OddEvenNode[] = input.map((value, i) => ({ value, parity: i % 2 === 0 ? "odd" : "even" }));

  const push = (line: number, explanation: string, nodes: OddEvenNode[], active: number | null, phase: OddEvenData["phase"]) => {
    steps.push({ id: steps.length, line, explanation, data: { nodes: nodes.map((n) => ({ ...n })), active, phase }, highlights: [] });
  };

  push(2, "Split nodes at odd positions from those at even positions.", original, null, "split");

  const odds = original.filter((n) => n.parity === "odd");
  const evens = original.filter((n) => n.parity === "even");

  // Show the odd list forming, then the evens appended.
  const building: OddEvenNode[] = [];
  for (let i = 0; i < odds.length; i++) {
    building.push(odds[i]);
    push(5, `Keep ${odds[i].value} (odd position) in the front group.`, building, building.length - 1, "split");
  }
  for (let i = 0; i < evens.length; i++) {
    building.push(evens[i]);
    push(6, `Append ${evens[i].value} (even position) after the odds.`, building, building.length - 1, "split");
  }

  push(8, `Result: odds [${odds.map((n) => n.value).join(", ")}] then evens [${evens.map((n) => n.value).join(", ")}].`, building, null, "done");
  return steps;
}
