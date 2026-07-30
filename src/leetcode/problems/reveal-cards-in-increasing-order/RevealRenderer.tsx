import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RevealData } from "./algorithm";

export function RevealRenderer({ step }: RendererProps<RevealData>) {
  const { sorted, res, idx, cardIdx, placed, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted cards</span>
        <ArrayCells values={sorted} roleFor={(i) => (i === cardIdx ? "current" : i < (cardIdx ?? 0) ? "visited" : "default")} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">result deck (by position)</span>
        <ArrayCells values={res.map((v) => (v === null ? "·" : v))} roleFor={(i) => (i === placed ? "sorted" : res[i] !== null ? "visited" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">position queue</span>
        <div className="flex gap-1">
          {idx.length ? (
            idx.map((p, k) => (
              <span key={p} className={`flex h-8 w-8 items-center justify-center rounded border text-sm tabular-nums ${k === 0 ? "bg-role-current text-white border-role-current" : "bg-muted/40 border-border"}`}>{p}</span>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">empty</span>
          )}
        </div>
      </div>

      {answer && <div className="rounded-md border px-3 py-1 text-sm">deck = [<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "current", label: "Next / front of queue" }, { role: "sorted", label: "Just placed" }, { role: "visited", label: "Done" }]} />
    </div>
  );
}
