import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MailboxesData } from "./algorithm";

export function MailboxesRenderer({ step }: RendererProps<MailboxesData>) {
  const { houses, k, dp, cell, group, answer } = step.data;
  const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">houses (sorted) · k = {k} mailboxes</span>
        <div className="flex gap-1">
          {houses.map((h, i) => (
            <div key={i} className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${group.includes(i) ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{h}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp[houses][mailboxes]</span>
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `2rem repeat(${k + 1}, 2.4rem)` }}>
          <div />
          {Array.from({ length: k + 1 }).map((_, b) => <div key={b} className="text-center text-[10px] text-muted-foreground">{b}mb</div>)}
          {dp.map((row, j) => (
            <div key={j} className="contents">
              <div className="flex items-center justify-center text-[10px] text-muted-foreground">{j}h</div>
              {row.map((v, b) => (
                <div key={b} className={`flex h-7 items-center justify-center rounded border text-[10px] tabular-nums ${cell && cell[0] === j && cell[1] === b ? "border-role-current bg-role-current text-white" : "border-border bg-muted/20"}`}>{fmt(v)}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min total distance = {answer}</div>}

      <Legend items={[{ role: "current", label: "Updated dp cell / house group" }]} />
    </div>
  );
}
