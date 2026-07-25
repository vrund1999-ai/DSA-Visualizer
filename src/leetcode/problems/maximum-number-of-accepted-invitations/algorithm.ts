import type { Step } from "@/core/types";

export interface InvitationsData {
  grid: number[][];
  /** matchG[girl] = boy currently matched, or -1 */
  matchG: number[];
  /** boy currently seeking a match */
  boy: number | null;
  /** whether that boy succeeded */
  matched: boolean | null;
  count: number;
  answer: number | null;
}

export type InvitationsStep = Step<InvitationsData>;

/**
 * This is maximum bipartite matching between boys and girls. For each boy we run an augmenting-path
 * search: try each girl he can invite; if she's free or her current partner can be rematched
 * elsewhere, take her. Each successful augmentation adds one to the matching. `line` indexes CODE.
 */
export function invitationsSteps(grid: number[][]): InvitationsStep[] {
  const steps: InvitationsStep[] = [];
  const m = grid.length;
  const n = grid[0].length;
  const matchG = new Array(n).fill(-1);
  let count = 0;

  const snap = (o: Partial<InvitationsData>): InvitationsData => ({ grid, matchG: [...matchG], boy: null, matched: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<InvitationsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Maximum bipartite matching via augmenting paths (girl → boy assignments).");

  const augment = (boy: number, seen: boolean[]): boolean => {
    for (let g = 0; g < n; g++) {
      if (grid[boy][g] && !seen[g]) {
        seen[g] = true;
        if (matchG[g] === -1 || augment(matchG[g], seen)) {
          matchG[g] = boy;
          return true;
        }
      }
    }
    return false;
  };

  for (let b = 0; b < m; b++) {
    const ok = augment(b, new Array(n).fill(false));
    if (ok) count++;
    push(17, `Boy ${b}: ${ok ? "found an invitation → match count " + count : "no available girl"}.`, { boy: b, matched: ok });
  }

  push(18, `Maximum accepted invitations: ${count}.`, { answer: count });
  return steps;
}
