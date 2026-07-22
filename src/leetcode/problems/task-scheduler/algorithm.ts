import type { Step } from "@/core/types";

export interface TaskSchedulerInput {
  tasks: string[];
  n: number;
}

export interface CountEntry {
  task: string;
  n: number;
}

export interface TaskData {
  counts: CountEntry[];
  n: number;
  maxCount: number;
  maxTasks: number;
  framed: number | null;
  answer: number | null;
}

export type TaskStep = Step<TaskData>;

/**
 * The busiest task forces the schedule's skeleton: (maxCount − 1) full frames of
 * width (n + 1), plus one slot per task that also hits maxCount. Idle time can be
 * absorbed if there are many tasks, so the answer is max(that, total tasks).
 * `line` indexes CODE.
 */
export function taskSteps(input: TaskSchedulerInput): TaskStep[] {
  const { tasks, n } = input;
  const steps: TaskStep[] = [];
  const map = new Map<string, number>();
  for (const t of tasks) map.set(t, (map.get(t) ?? 0) + 1);
  const counts: CountEntry[] = [...map.entries()].map(([task, c]) => ({ task, n: c })).sort((a, b) => b.n - a.n);
  const values = counts.map((c) => c.n);

  const snap = (o: Partial<TaskData>): TaskData => ({
    counts,
    n,
    maxCount: 0,
    maxTasks: 0,
    framed: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: TaskData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Count each task's frequency (cooldown n = ${n}).`, snap({}));
  const maxCount = Math.max(...values);
  push(2, `Busiest task runs ${maxCount} times — it sets the skeleton.`, snap({ maxCount }));
  const maxTasks = values.filter((c) => c === maxCount).length;
  push(3, `${maxTasks} task(s) share that max frequency.`, snap({ maxCount, maxTasks }));
  const framed = (maxCount - 1) * (n + 1) + maxTasks;
  push(4, `Frame length = (${maxCount} − 1) × (${n} + 1) + ${maxTasks} = ${framed}.`, snap({ maxCount, maxTasks, framed }));
  const answer = Math.max(tasks.length, framed);
  push(5, `Answer = max(total tasks ${tasks.length}, framed ${framed}) = ${answer}.`, snap({ maxCount, maxTasks, framed, answer }));
  return steps;
}
