import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ShortCharData } from "./algorithm";

export function ShortCharRenderer({ step }: RendererProps<ShortCharData>) {
  const { s, c, ans, i, prev, answer } = step.data;

  const charRole = (idx: number) => {
    if (idx === i) return "current";
    if (idx === prev) return "target";
    if (s[idx] === c) return "pivot";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">string (target '{c}')</span>
        <ArrayCells values={s.split("")} roleFor={charRole} topLabel={(idx) => (idx === i ? "i" : "")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">distances</span>
        <ArrayCells values={ans.map((v) => (v < 0 ? "∞" : v))} roleFor={(idx) => (idx === i ? "current" : answer ? "sorted" : "default")} />
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "pivot", label: `'${c}' positions` }, { role: "target", label: "Nearest seen" }, { role: "sorted", label: "Final" }]} />
    </div>
  );
}
