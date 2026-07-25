import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { InvitationsData } from "./algorithm";

export function InvitationsRenderer({ step }: RendererProps<InvitationsData>) {
  const { grid, matchG, boy, count, answer } = step.data;
  const n = grid[0].length;
  // invert matchG for quick "is (boy,girl) matched?"
  const boyToGirl = new Map<number, number>();
  matchG.forEach((b, g) => { if (b !== -1) boyToGirl.set(b, g); });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `2rem repeat(${n}, 2rem)` }}>
        <div />
        {Array.from({ length: n }).map((_, g) => (
          <div key={`g${g}`} className="flex h-7 items-center justify-center text-[10px] text-muted-foreground">G{g}</div>
        ))}
        {grid.map((row, b) => (
          <div key={b} className="contents">
            <div className={`flex h-8 items-center justify-center text-[10px] ${b === boy ? "font-bold text-role-current" : "text-muted-foreground"}`}>B{b}</div>
            {row.map((v, g) => {
              const isMatch = matchG[g] === b;
              return (
                <div key={g} className={`flex h-8 items-center justify-center rounded border text-xs ${isMatch ? "border-role-sorted bg-role-sorted text-white" : v ? "border-role-active bg-role-active/20" : "border-border/50 bg-muted/10 text-muted-foreground/40"} ${b === boy ? "ring-1 ring-role-current" : ""}`}>
                  {isMatch ? "♥" : v ? "1" : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">matches = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "active", label: "Possible invite" }, { role: "sorted", label: "Matched pair" }, { role: "current", label: "Current boy" }]} />
    </div>
  );
}
