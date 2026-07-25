import type { Step } from "@/core/types";

export interface KillProcessData {
  pid: number[];
  ppid: number[];
  kill: number;
  children: Record<number, number[]>;
  /** process currently dequeued */
  current: number | null;
  queue: number[];
  killed: number[];
  answer: number[] | null;
}

export type KillProcessStep = Step<KillProcessData>;

/**
 * Build the parent→children map, then BFS from the killed process: every dequeued
 * process dies and enqueues its children, so the whole subtree is removed. `line`
 * indexes CODE.
 */
export function killProcessSteps(pid: number[], ppid: number[], kill: number): KillProcessStep[] {
  const steps: KillProcessStep[] = [];
  const children: Record<number, number[]> = {};
  for (let i = 0; i < pid.length; i++) {
    (children[ppid[i]] ??= []).push(pid[i]);
  }

  const killed: number[] = [];
  const queue: number[] = [kill];

  const snap = (o: Partial<KillProcessData>): KillProcessData => ({ pid: [...pid], ppid: [...ppid], kill, children, current: null, queue: [...queue], killed: [...killed], answer: null, ...o });
  const push = (line: number, explanation: string, data: KillProcessData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(7, `Kill process ${kill} and all its descendants (BFS).`, snap({}));

  while (queue.length) {
    const cur = queue.shift()!;
    killed.push(cur);
    const kids = children[cur] ?? [];
    for (const c of kids) queue.push(c);
    push(12, `Kill ${cur}; enqueue children [${kids.join(", ")}].`, snap({ current: cur }));
  }

  push(14, `Killed processes: [${killed.join(", ")}].`, snap({ answer: [...killed] }));
  return steps;
}
