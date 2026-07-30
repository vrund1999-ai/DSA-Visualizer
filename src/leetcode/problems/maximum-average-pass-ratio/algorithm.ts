import type { Step } from "@/core/types";

export interface PassRatioData {
  classes: [number, number][];
  /** index of the class that received a student this step */
  boosted: number | null;
  extraLeft: number;
  answer: number | null;
}

export type PassRatioStep = Step<PassRatioData>;

const gain = (p: number, t: number) => (p + 1) / (t + 1) - p / t;

/**
 * Maximum Average Pass Ratio: each extra student joins the class whose pass ratio would improve the most
 * (a max-heap keyed by the marginal gain (p+1)/(t+1) − p/t). After distributing all students, average the
 * ratios. `line` indexes CODE.
 */
export function passRatioSteps(classesIn: [number, number][], extraStudents: number): PassRatioStep[] {
  const steps: PassRatioStep[] = [];
  const classes = classesIn.map(([p, t]) => [p, t] as [number, number]);

  const snap = (o: Partial<PassRatioData>): PassRatioData => ({
    classes: classes.map((c) => [...c] as [number, number]),
    boosted: null,
    extraLeft: 0,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<PassRatioData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Assign ${extraStudents} extra student(s) one at a time to the class with the biggest ratio gain.`, { extraLeft: extraStudents });

  for (let s = extraStudents; s > 0; s--) {
    // pick the class with the maximum marginal gain
    let best = 0;
    let bestGain = -Infinity;
    for (let i = 0; i < classes.length; i++) {
      const g = gain(classes[i][0], classes[i][1]);
      if (g > bestGain) {
        bestGain = g;
        best = i;
      }
    }
    classes[best][0]++;
    classes[best][1]++;
    push(7, `Add a guaranteed-pass student to class ${best} (gain ${bestGain.toFixed(3)}).`, { boosted: best, extraLeft: s - 1 });
  }

  const avg = classes.reduce((acc, [p, t]) => acc + p / t, 0) / classes.length;
  push(11, `Average pass ratio = ${avg.toFixed(5)}.`, { answer: avg });
  return steps;
}
