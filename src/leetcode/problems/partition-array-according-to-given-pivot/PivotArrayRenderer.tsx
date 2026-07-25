import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PivotArrayData } from "./algorithm";

function Bucket({ label, items, hot, chipClass }: { label: string; items: number[]; hot: boolean; chipClass: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs uppercase text-muted-foreground">{label}</span>
      <div className={`flex min-h-[2.5rem] min-w-[3rem] flex-wrap items-center justify-center gap-1 rounded-lg border-2 p-1.5 ${hot ? "border-role-current" : "border-border"}`}>
        {items.length === 0 ? <span className="text-xs text-muted-foreground">∅</span> : items.map((v, i) => (
          <span key={i} className={`flex size-8 items-center justify-center rounded border text-sm tabular-nums ${chipClass}`}>{v}</span>
        ))}
      </div>
    </div>
  );
}

export function PivotArrayRenderer({ step }: RendererProps<PivotArrayData>) {
  const { nums, pivot, cur, less, equal, greater, bucket, done } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums · pivot = {pivot}</span>
        <ArrayCells values={nums} roleFor={(i) => (i === cur ? "current" : cur !== null && i < cur ? "visited" : "default")} showIndex={false} />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-4">
        <Bucket label={`< ${pivot}`} items={less} hot={bucket === "less"} chipClass="border-role-active bg-role-active/10" />
        <Bucket label={`= ${pivot}`} items={equal} hot={bucket === "equal"} chipClass="border-role-visited bg-role-visited/10" />
        <Bucket label={`> ${pivot}`} items={greater} hot={bucket === "greater"} chipClass="border-role-target bg-role-target/10" />
      </div>

      {done && <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{[...less, ...equal, ...greater].join(", ")}]</div>}

      <Legend items={[{ role: "current", label: "Routing" }, { role: "visited", label: "Placed" }]} />
    </div>
  );
}
