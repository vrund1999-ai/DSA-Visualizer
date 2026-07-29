import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GeneData } from "./algorithm";

function Gene({ gene, role }: { gene: string; role: string }) {
  const cls =
    role === "current"
      ? "bg-role-current text-white border-role-current"
      : role === "found"
        ? "bg-role-sorted text-white border-role-sorted"
        : role === "end"
          ? "bg-role-target text-white border-role-target"
          : "bg-muted/40 border-border";
  return <span className={`rounded border px-2 py-1 font-mono text-xs tracking-widest ${cls}`}>{gene}</span>;
}

export function GeneRenderer({ step }: RendererProps<GeneData>) {
  const { start, end, bank, queue, cur, found, steps, answer } = step.data;
  const inQueue = new Set(queue);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 px-4">
      <div className="flex items-center gap-3 text-sm">
        <span className="text-muted-foreground">start</span>
        <Gene gene={start} role="default" />
        <span className="text-muted-foreground">→ end</span>
        <Gene gene={end} role="end" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">frontier (level {steps})</span>
        <div className="flex flex-wrap justify-center gap-2">
          {queue.map((g) => (
            <Gene key={g} gene={g} role={g === cur ? "current" : "queue"} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">gene bank</span>
        <div className="flex flex-wrap justify-center gap-2">
          {bank.map((g) => (
            <Gene key={g} gene={g} role={g === found ? "found" : g === end ? "end" : inQueue.has(g) ? "current" : "default"} />
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">mutations = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Expanding" }, { role: "sorted", label: "Newly found" }, { role: "target", label: "Target" }]} />
    </div>
  );
}
