import type { Step } from "@/core/types";

export interface LemonadeData {
  bills: number[];
  pos: number | null;
  five: number;
  ten: number;
  /** description of the change given this step */
  changeNote: string | null;
  answer: boolean | null;
}

export type LemonadeStep = Step<LemonadeData>;

/**
 * Each lemonade costs $5. Greedily give change preferring a $10 bill over three $5s
 * when making $15, since $5 bills are more flexible. If change can't be made the
 * answer is false. `line` indexes CODE.
 */
export function lemonadeSteps(bills: number[]): LemonadeStep[] {
  const steps: LemonadeStep[] = [];
  let five = 0;
  let ten = 0;

  const snap = (pos: number, o: Partial<LemonadeData>): LemonadeData => ({ bills: [...bills], pos, five, ten, changeNote: null, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<LemonadeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Give change greedily; keep $5 bills for flexibility.");

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    let note = "";
    if (bill === 5) {
      five++;
      note = "keep $5";
    } else if (bill === 10) {
      five--;
      ten++;
      note = "give $5";
    } else if (ten > 0) {
      ten--;
      five--;
      note = "give $10 + $5";
    } else {
      five -= 3;
      note = "give three $5";
    }
    push(bill === 20 ? 6 : bill === 10 ? 4 : 3, i, `Customer pays $${bill} → ${note}.`, { changeNote: note });
    if (five < 0) {
      push(7, i, `Out of $5 bills — cannot make change → false.`, { answer: false });
      return steps;
    }
  }

  push(9, -1, "Served everyone with correct change → true.", { answer: true });
  return steps;
}
