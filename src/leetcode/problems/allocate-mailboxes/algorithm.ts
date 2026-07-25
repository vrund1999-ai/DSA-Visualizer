import type { Step } from "@/core/types";

export interface MailboxesData {
  houses: number[];
  k: number;
  /** dp[houses served][mailboxes used] */
  dp: number[][];
  /** cell [j][b] just updated */
  cell: [number, number] | null;
  /** the house group [i..j-1] assigned to the last mailbox this step */
  group: number[];
  answer: number | null;
}

export type MailboxesStep = Step<MailboxesData>;

const INF = Infinity;

/**
 * The optimal single mailbox for a group of houses sits at their median, so cost[i][j] is the summed
 * distance to that median. A DP then partitions the sorted houses into k contiguous groups: dp[j][b]
 * is the best cost covering the first j houses with b mailboxes. `line` indexes CODE.
 */
export function mailboxesSteps(input: number[], k: number): MailboxesStep[] {
  const steps: MailboxesStep[] = [];
  const houses = [...input].sort((a, b) => a - b);
  const n = houses.length;

  // cost of one mailbox for houses[i..j]
  const cost: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const mid = houses[Math.floor((i + j) / 2)];
      let c = 0;
      for (let t = i; t <= j; t++) c += Math.abs(houses[t] - mid);
      cost[i][j] = c;
    }
  }

  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(INF));
  dp[0][0] = 0;

  const snap = (o: Partial<MailboxesData>): MailboxesData => ({ houses, k, dp: dp.map((r) => [...r]), cell: null, group: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MailboxesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort houses [${houses.join(", ")}]; partition into ${k} groups, each served at its median.`);

  for (let j = 1; j <= n; j++) {
    for (let b = 1; b <= k; b++) {
      for (let i = 0; i < j; i++) {
        const cand = dp[i][b - 1] + cost[i][j - 1];
        if (cand < dp[j][b]) {
          dp[j][b] = cand;
          const group = Array.from({ length: j - i }, (_, t) => i + t);
          push(11, `dp[${j}][${b}]: last mailbox serves houses ${group.map((g) => houses[g]).join(",")} (cost ${cost[i][j - 1]}) → ${cand}.`, { cell: [j, b], group });
        }
      }
    }
  }

  push(12, `Minimum total distance with ${k} mailboxes: ${dp[n][k]}.`, { answer: dp[n][k] });
  return steps;
}
