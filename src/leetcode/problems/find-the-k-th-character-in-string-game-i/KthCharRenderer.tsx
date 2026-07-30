import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KthCharData } from "./algorithm";

export function KthCharRenderer({ step }: RendererProps<KthCharData>) {
  const { word, k, appendedFrom, answer } = step.data;
  const chars = word.split("");

  const roleFor = (i: number) => {
    if (answer !== null && i === k - 1) return "sorted";
    if (appendedFrom !== null && i >= appendedFrom) return "current";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">k = {k}</span>

      <ArrayCells values={chars} roleFor={roleFor} topLabel={(i) => (i === k - 1 ? "k" : "")} cellWidth="w-9" />

      <div className="rounded-md border px-3 py-1 text-sm">
        k-th character = <b>{answer ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "active", label: "existing" },
          { role: "current", label: "just appended" },
          { role: "sorted", label: "k-th char" },
        ]}
      />
    </div>
  );
}
