import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { JudgeData } from "./algorithm";

export function JudgeRenderer({ step }: RendererProps<JudgeData>) {
  const { n, trust, net, edgeIdx, checking, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-2">
        {trust.map(([a, b], i) => (
          <span key={i} className={`rounded-md border px-2 py-0.5 font-mono text-sm ${i === edgeIdx ? "border-role-current bg-role-current/15" : ""}`}>{a}→{b}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">net trust score per person</span>
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: n }).map((_, k) => {
            const p = k + 1;
            const isJudge = answer === p;
            return (
              <div key={p} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${isJudge ? "border-role-sorted bg-role-sorted text-white" : p === checking ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>
                <span className="text-base font-bold">P{p}</span>
                <span className="text-xs tabular-nums">{net[p] > 0 ? `+${net[p]}` : net[p]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer === -1 ? "bg-role-compared text-white" : "bg-role-sorted text-white"}`}>
          {answer === -1 ? "No town judge" : `Judge = Person ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Active edge / person" }, { role: "sorted", label: "Judge (net n−1)" }]} />
    </div>
  );
}
