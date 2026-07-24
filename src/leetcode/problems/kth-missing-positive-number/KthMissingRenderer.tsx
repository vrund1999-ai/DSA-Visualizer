import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KthMissingData } from "./algorithm";

export function KthMissingRenderer({ step }: RendererProps<KthMissingData>) {
  const { arr, k, lo, hi, mid, missingBefore, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === mid) return "current";
    if (i === lo || i === hi) return "compared";
    if (i < lo || i >= hi) return "default";
    return "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === lo) parts.push("lo");
    if (i === hi) parts.push("hi");
    if (i === mid) parts.push("mid");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">find the <b className="text-foreground">{k}</b>th missing positive · badge = # missing before</div>

      <ArrayCells
        values={arr}
        roleFor={roleFor}
        topLabel={topLabel}
        badge={(i) => `−${arr[i] - (i + 1)}`}
      />

      {missingBefore !== null && mid !== null && (
        <div className="text-sm text-muted-foreground">before index {mid}: <b className="tabular-nums text-foreground">{missingBefore}</b> missing</div>
      )}

      {answer !== null && <div className="text-base font-semibold text-role-current">answer = {answer}</div>}

      <Legend items={[{ role: "active", label: "Search window" }, { role: "compared", label: "lo / hi" }, { role: "current", label: "mid" }]} />
    </div>
  );
}
