import type { Highlight, Step } from "@/core/types";

export interface KthLargestInput {
  nums: number[];
  k: number;
}

export interface KthLargestData {
  nums: number[];
  i: number | null;
  k: number;
  heap: number[];
  answer: number | null;
}

export type KthLargestStep = Step<KthLargestData>;

/**
 * Keep only the k largest values seen, in a size-k min-heap. Its minimum is the
 * kth largest overall: a new value replaces that minimum only if it's bigger.
 * (Shown as a sorted list; heap[0] is the smallest.) `line` indexes CODE.
 */
export function kthLargestSteps(input: KthLargestInput): KthLargestStep[] {
  const { nums, k } = input;
  const steps: KthLargestStep[] = [];
  const heap: number[] = []; // kept sorted ascending; heap[0] = min

  const insert = (x: number) => {
    let idx = heap.length;
    while (idx > 0 && heap[idx - 1] > x) idx--;
    heap.splice(idx, 0, x);
  };

  const snap = (o: Partial<KthLargestData>): KthLargestData => ({
    nums: [...nums],
    i: null,
    k,
    heap: [...heap],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: KthLargestData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Track the ${k} largest values in a min-heap; its minimum is the answer.`, snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (heap.length < k) {
      insert(x);
      push(3, `Heap not full — add ${x}.`, snap({ i }), [{ ref: i, role: "sorted" }]);
    } else if (x > heap[0]) {
      const dropped = heap.shift();
      insert(x);
      push(6, `${x} > heap min ${dropped} — drop ${dropped} and add ${x}.`, snap({ i }), [{ ref: i, role: "sorted" }]);
    } else {
      push(4, `${x} ≤ heap min ${heap[0]} — ignore it.`, snap({ i }), [{ ref: i, role: "visited" }]);
    }
  }

  push(9, `The ${k}th largest element is ${heap[0]}.`, snap({ i: null, answer: heap[0] }), []);
  return steps;
}
