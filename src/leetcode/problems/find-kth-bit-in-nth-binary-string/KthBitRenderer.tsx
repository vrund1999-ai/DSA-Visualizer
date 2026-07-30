import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KthBitData } from "./algorithm";

export function KthBitRenderer({ step }: RendererProps<KthBitData>) {
  const { n, k, s, level, appendedFrom, answer } = step.data;
  const bits = s.split("");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        S{level} · n = {n} · k = {k}
      </span>

      <div className="flex max-w-2xl flex-wrap justify-center gap-1">
        {bits.map((b, i) => {
          const isK = answer !== null && i === k - 1;
          const isNew = appendedFrom !== null && i >= appendedFrom;
          return (
            <div
              key={i}
              className={`flex size-7 items-center justify-center rounded font-mono text-sm ${
                isK ? "bg-role-sorted text-white" : isNew ? "bg-role-current text-white" : "bg-muted/40 text-foreground"
              }`}
            >
              {b}
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        k-th bit = <b>{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "appended part" }, { role: "sorted", label: "k-th bit" }]} />
    </div>
  );
}
