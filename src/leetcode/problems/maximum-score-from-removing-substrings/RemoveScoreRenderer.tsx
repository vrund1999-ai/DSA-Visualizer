import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RemoveScoreData } from "./algorithm";

export function RemoveScoreRenderer({ step }: RendererProps<RemoveScoreData>) {
  const { x, y, pair, pts, stack, removed, score, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">remove "ab" (+{x}) or "ba" (+{y}){pair ? ` · removing "${pair}" (+${pts})` : ""}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">stack</span>
        <div className="flex min-h-[2.5rem] items-end gap-1">
          {stack.length === 0 ? (
            <span className="text-sm text-muted-foreground">empty</span>
          ) : (
            stack.map((ch, i) => {
              const top = i === stack.length - 1;
              return <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border font-mono text-lg ${top && removed ? "bg-role-swapped text-white border-role-swapped" : top ? "bg-role-current text-white border-role-current" : "bg-role-active/20 border-role-active"}`}>{ch}</span>;
            })
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">score = <b className="tabular-nums">{answer ?? score}</b></div>

      <Legend items={[{ role: "current", label: "Top of stack" }, { role: "swapped", label: "Removed pair" }, { role: "active", label: "Stack" }]} />
    </div>
  );
}
