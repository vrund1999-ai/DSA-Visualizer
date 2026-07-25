import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LunchData } from "./algorithm";

export function LunchRenderer({ step }: RendererProps<LunchData>) {
  const { sandwiches, want, top, stuck, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">want ⚪ = <b className="tabular-nums">{want[0]}</b></span>
        <span className="rounded-md border px-3 py-1">want ⬛ = <b className="tabular-nums">{want[1]}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sandwich stack (top → bottom)</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {sandwiches.map((v, i) => {
            const consumed = top !== null && i < top;
            const isTop = i === top;
            const cls = isTop && stuck ? "border-role-target bg-role-target/20" : isTop ? "border-role-current bg-role-current/20" : consumed ? "border-role-visited bg-role-visited/10 opacity-50" : "border-border bg-card";
            return <span key={i} className={`flex size-10 items-center justify-center rounded-md border-2 text-lg ${cls}`}>{v === 0 ? "⚪" : "⬛"}</span>;
          })}
        </div>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === 0 ? "text-role-visited" : "text-role-target"}`}>
          {answer === 0 ? "everyone ate ✓" : `${answer} student(s) unable to eat`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Top (being served)" }, { role: "visited", label: "Eaten" }, { role: "target", label: "Stuck" }]} />
    </div>
  );
}
