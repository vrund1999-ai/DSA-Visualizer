import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TwoKeysData } from "./algorithm";

export function TwoKeysRenderer({ step }: RendererProps<TwoKeysData>) {
  const { n, remaining, factors, ops, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-lg">target: <b className="font-mono">{n}</b> 'A's</div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">remaining to factor:</span>
        <span className="rounded-md border-2 border-role-current px-3 py-1 font-mono text-lg">{remaining}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">prime factors</span>
        <div className="flex flex-wrap justify-center gap-1">
          {factors.length === 0 ? (
            <span className="text-sm text-muted-foreground">—</span>
          ) : (
            factors.map((f, i) => (
              <span key={i} className="flex h-9 w-9 items-center justify-center rounded border border-role-sorted bg-role-sorted/15 font-mono text-sm font-bold">{f}</span>
            ))
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">operations = {factors.length ? factors.join(" + ") + " = " : ""}<b className="tabular-nums">{answer ?? ops}</b></div>

      <Legend items={[{ role: "current", label: "Remaining" }, { role: "sorted", label: "Prime factor" }]} />
    </div>
  );
}
