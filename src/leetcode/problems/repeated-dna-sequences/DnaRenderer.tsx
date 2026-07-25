import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DnaData } from "./algorithm";

export function DnaRenderer({ step }: RendererProps<DnaData>) {
  const { s, i, sub, isRepeat, repeated, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-0.5 font-mono text-sm">
        {s.split("").map((c, k) => {
          const inWindow = i !== null && k >= i && k < i + 10;
          const cls = inWindow ? (isRepeat ? "bg-role-target/25 text-role-target" : "bg-role-current/25 text-role-current") : "text-muted-foreground";
          return <span key={k} className={`rounded px-0.5 py-1 ${cls}`}>{c}</span>;
        })}
      </div>

      {sub && <div className="text-sm">window = <b className="font-mono text-foreground">{sub}</b> {isRepeat ? "(repeat!)" : ""}</div>}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">repeated sequences</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {(answer ?? repeated).length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : (answer ?? repeated).map((r) => (
            <span key={r} className="rounded-md border-2 border-role-target bg-role-target/10 px-2 py-1 font-mono text-xs">{r}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "New window" }, { role: "target", label: "Repeated window" }]} />
    </div>
  );
}
