import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RotatedSearchData } from "./algorithm";

export function RotatedSearchRenderer({ step }: RendererProps<RotatedSearchData>) {
  const { nums, target, lo, hi, mid, found, sortedSide } = step.data;

  const roleFor = (i: number) => {
    if (found && i === mid) return "target";
    if (i === mid) return "current";
    if (i === lo || i === hi) return "compared";
    if (i < lo || i > hi) return "default";
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
      <div className="text-sm text-muted-foreground">
        target = <b className="tabular-nums text-foreground">{target}</b>
        {sortedSide && sortedSide !== "ambiguous" && <> · {sortedSide} half is sorted</>}
        {sortedSide === "ambiguous" && <> · ends equal — trimming</>}
      </div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} />

      {found !== null && (
        <div className={`text-base font-semibold ${found ? "text-role-target" : "text-muted-foreground"}`}>
          {found ? "Found" : "Not present"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Search window" }, { role: "compared", label: "lo / hi" }, { role: "current", label: "mid" }, { role: "target", label: "Found" }]} />
    </div>
  );
}
