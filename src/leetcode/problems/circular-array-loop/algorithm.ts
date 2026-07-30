import type { Step } from "@/core/types";

export interface CircularLoopData {
  nums: number[];
  start: number | null;
  slow: number | null;
  fast: number | null;
  dead: boolean[];
  answer: boolean | null;
}

export type CircularLoopStep = Step<CircularLoopData>;

/**
 * A valid loop moves consistently one direction and has length > 1. Floyd's tortoise-and-hare walks the
 * jump function next(i) = (i + nums[i]) mod n; if slow and fast meet inside a same-direction run that
 * isn't a single self-loop, a cycle exists. Exhausted chains are zeroed so they aren't retried. `line` indexes CODE.
 */
export function circularLoopSteps(input: number[]): CircularLoopStep[] {
  const steps: CircularLoopStep[] = [];
  const nums = [...input];
  const n = nums.length;
  const dead = new Array(n).fill(false);
  const next = (i: number) => (((i + nums[i]) % n) + n) % n;
  const sameDir = (a: number, b: number) => nums[a] * nums[b] > 0;

  const snap = (o: Partial<CircularLoopData>): CircularLoopData => ({ nums: [...nums], start: null, slow: null, fast: null, dead: [...dead], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CircularLoopData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Walk next(i) = (i + nums[i]) mod n with tortoise & hare, all one direction.");

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;
    let slow = i;
    let fast = i;
    push(5, `Start at index ${i} (jump ${nums[i]}).`, { start: i, slow, fast });
    while (sameDir(slow, next(slow)) && sameDir(fast, next(fast)) && sameDir(fast, next(next(fast)))) {
      slow = next(slow);
      fast = next(next(fast));
      push(10, `slow → ${slow}, fast → ${fast}.`, { start: i, slow, fast });
      if (slow === fast) {
        if (slow === next(slow)) {
          push(12, `Loop of length 1 at ${slow} — invalid, abandon.`, { start: i, slow, fast });
          break;
        }
        push(13, `slow and fast meet at ${slow} → valid cycle found.`, { start: i, slow, fast, answer: true });
        return steps;
      }
    }
    // zero out this chain
    let j = i;
    const dir = nums[i];
    while (nums[j] * dir > 0) {
      const nxt = next(j);
      nums[j] = 0;
      dead[j] = true;
      j = nxt;
    }
    push(16, `No cycle from ${i}; zero out this chain.`, { start: i });
  }

  push(18, "No valid circular loop exists.", { answer: false });
  return steps;
}
