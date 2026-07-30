import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SwapsData } from "./algorithm";

const COMP_FILL = ["bg-role-active/30 border-role-active", "bg-role-pivot/30 border-role-pivot", "bg-role-target/30 border-role-target", "bg-role-compared/30 border-role-compared", "bg-amber-400/30 border-amber-400"];

export function SwapsRenderer({ step }: RendererProps<SwapsData>) {
  const { s, root, res, pair, group, answer } = step.data;
  // assign a stable color index per distinct root
  const distinct = [...new Set(root)];
  const colorOf = (i: number) => COMP_FILL[distinct.indexOf(root[i]) % COMP_FILL.length];
  const groupSet = new Set(group);
  const pairSet = new Set(pair ?? []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">original (colored by swap component)</span>
        <div className="flex gap-1">
          {s.split("").map((ch, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span className={`flex h-10 w-9 items-center justify-center rounded border-2 font-mono text-lg ${groupSet.has(i) ? "ring-2 ring-role-sorted" : ""} ${pairSet.has(i) ? "bg-role-current text-white border-role-current" : colorOf(i)}`}>{ch}</span>
              <span className="text-[9px] text-muted-foreground">{i}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">result</span>
        <div className="flex gap-1">
          {(answer ?? res.join("")).split("").map((ch, i) => (
            <span key={i} className={`flex h-10 w-9 items-center justify-center rounded border font-mono text-lg ${answer ? "bg-role-sorted/15 border-role-sorted" : "bg-muted/40 border-border"}`}>{ch}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Unioning pair" }, { role: "sorted", label: "Sorting component" }]} />
    </div>
  );
}
