import type { Step } from "@/core/types";

interface Job {
  start: number;
  end: number;
  profit: number;
}

export interface JobSchedulingData {
  jobs: Job[];
  dp: number[];
  /** index of the job just considered */
  cur: number | null;
  /** index of the compatible earlier job found by binary search */
  compat: number | null;
  /** whether taking the job improved dp */
  took: boolean;
  answer: number | null;
}

export type JobSchedulingStep = Step<JobSchedulingData>;

/**
 * Sort jobs by end time. dp[i] is the best profit using the first i jobs. For each
 * job, binary-search the latest job that ends at or before this job's start, then
 * choose the better of skipping or taking it. `line` indexes CODE.
 */
export function jobSchedulingSteps(startTime: number[], endTime: number[], profit: number[]): JobSchedulingStep[] {
  const steps: JobSchedulingStep[] = [];
  const jobs: Job[] = startTime.map((s, i) => ({ start: s, end: endTime[i], profit: profit[i] })).sort((a, b) => a.end - b.end);
  const ends = jobs.map((j) => j.end);
  const dp = [0];

  const snap = (o: Partial<JobSchedulingData>): JobSchedulingData => ({ jobs: jobs.map((j) => ({ ...j })), dp: [...dp], cur: null, compat: null, took: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: JobSchedulingData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  // upperBound: count of ends <= x
  const upperBound = (x: number) => {
    let lo = 0;
    let hi = ends.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (ends[mid] <= x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  push(4, "Sort jobs by end time; dp[i] = best profit using the first i jobs.", snap({}));

  for (let k = 0; k < jobs.length; k++) {
    const job = jobs[k];
    const i = upperBound(job.start);
    const take = dp[i] + job.profit;
    const best = Math.max(dp[dp.length - 1], take);
    const took = take > dp[dp.length - 1];
    dp.push(best);
    push(9, `Job [${job.start},${job.end}] $${job.profit}: skip ${dp[dp.length - 2]} vs take ${take} → dp=${best}.`, snap({ cur: k, compat: i - 1 >= 0 ? i - 1 : null, took }));
  }

  push(11, `Maximum profit: ${dp[dp.length - 1]}.`, snap({ answer: dp[dp.length - 1] }));
  return steps;
}
