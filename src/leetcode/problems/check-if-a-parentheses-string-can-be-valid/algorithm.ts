import type { Step } from "@/core/types";

export interface ValidParenData {
  s: string;
  locked: string;
  phase: "forward" | "backward" | "done";
  i: number | null;
  bal: number;
  answer: boolean | null;
}

export type ValidParenStep = Step<ValidParenData>;

/**
 * Unlocked positions are wildcards. Scanning forward, treat every unlocked or '(' character as an open
 * paren and require the balance never dips below zero (enough opens for the ')'s). A mirror backward pass
 * checks the reverse. Both passing (with even length) means a valid arrangement exists. `line` indexes CODE.
 */
export function validParenSteps(s: string, locked: string): ValidParenStep[] {
  const steps: ValidParenStep[] = [];

  const snap = (o: Partial<ValidParenData>): ValidParenData => ({ s, locked, phase: "forward", i: null, bal: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ValidParenData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (s.length % 2) {
    push(1, "Odd length can never be balanced → false.", { answer: false });
    return steps;
  }

  push(2, "Forward pass: unlocked or '(' can act as an open paren; balance must stay ≥ 0.");
  let bal = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "0" || s[i] === "(") bal++;
    else bal--;
    if (bal < 0) {
      push(6, `Index ${i}: forward balance ${bal} < 0 — too many fixed ')' → false.`, { phase: "forward", i, bal, answer: false });
      return steps;
    }
    push(4, `Index ${i}: forward balance ${bal}.`, { phase: "forward", i, bal });
  }

  push(8, "Backward pass: unlocked or ')' can act as a close paren.");
  bal = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (locked[i] === "0" || s[i] === ")") bal++;
    else bal--;
    if (bal < 0) {
      push(12, `Index ${i}: backward balance ${bal} < 0 — too many fixed '(' → false.`, { phase: "backward", i, bal, answer: false });
      return steps;
    }
    push(10, `Index ${i}: backward balance ${bal}.`, { phase: "backward", i, bal });
  }

  push(14, "Both passes stayed non-negative → a valid arrangement exists.", { phase: "done", answer: true });
  return steps;
}
