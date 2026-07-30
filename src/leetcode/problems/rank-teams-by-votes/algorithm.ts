import type { Step } from "@/core/types";

export interface RankData {
  teams: string[];
  /** count[teamIndex][position] */
  count: number[][];
  /** current ordering of team indices (into `teams`) */
  order: number[];
  /** cell just incremented: [teamIndex, position] */
  tallied: [number, number] | null;
  /** pair being compared during sort: [teamIndexA, teamIndexB] */
  compare: [number, number] | null;
  answer: string | null;
}

export type RankStep = Step<RankData>;

/**
 * Each ballot is a full ranking, so a team is described by how many first-place, second-place, …
 * votes it received. Teams sort by that vector lexicographically (more high-place votes wins),
 * breaking ties alphabetically. `line` indexes CODE.
 */
export function rankSteps(votes: string[]): RankStep[] {
  const steps: RankStep[] = [];
  const teams = votes[0].split("").sort();
  const idx = new Map(teams.map((t, i) => [t, i]));
  const count = teams.map(() => new Array(teams.length).fill(0));

  const snap = (o: Partial<RankData>): RankData => ({ teams, count: count.map((r) => [...r]), order: teams.map((_, i) => i), tallied: null, compare: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RankData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Tally, per team, how many votes place it in each of the ${teams.length} positions.`);

  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      const ti = idx.get(vote[i])!;
      count[ti][i]++;
      push(6, `Ballot "${vote}": ${vote[i]} gets a position-${i + 1} vote.`, { tallied: [ti, i] });
    }
  }

  const order = teams.map((_, i) => i);
  order.sort((a, b) => {
    for (let i = 0; i < teams.length; i++) if (count[a][i] !== count[b][i]) return count[b][i] - count[a][i];
    return teams[a] < teams[b] ? -1 : 1;
  });

  const result = order.map((i) => teams[i]).join("");
  push(14, `Ranked order: ${result}.`, { order, answer: result });
  return steps;
}
