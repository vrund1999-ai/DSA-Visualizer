import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ClosestPrimeData } from "./algorithm";

export function ClosestPrimeRenderer({ step }: RendererProps<ClosestPrimeData>) {
  const { nums, primeFlags, pair, best, answer } = step.data;
  const pairSet = new Set(pair ?? []);
  const bestSet = new Set((answer ?? best) ?? []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex max-w-2xl flex-wrap justify-center gap-1.5">
        {nums.map((x, i) => {
          const prime = primeFlags[i];
          const inBest = bestSet.has(x);
          const inPair = pairSet.has(x);
          const role = inBest ? "sorted" : inPair ? "current" : prime ? "active" : "default";
          return (
            <div
              key={x}
              className={`flex size-9 items-center justify-center rounded-md border-2 text-sm tabular-nums ${
                role === "sorted"
                  ? "border-role-sorted bg-role-sorted text-white"
                  : role === "current"
                    ? "border-role-current bg-role-current text-white"
                    : role === "active"
                      ? "border-role-active bg-role-active/20"
                      : "border-border bg-muted/20 text-muted-foreground"
              }`}
            >
              {x}
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        closest primes = <b className="tabular-nums">{answer ? `[${answer[0]}, ${answer[1]}]` : "…"}</b>
      </div>

      <Legend
        items={[
          { role: "active", label: "prime" },
          { role: "current", label: "pair compared" },
          { role: "sorted", label: "closest pair" },
        ]}
      />
    </div>
  );
}
