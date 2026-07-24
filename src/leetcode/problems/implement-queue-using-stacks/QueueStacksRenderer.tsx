import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { QueueStacksData } from "./algorithm";

function StackColumn({ label, items, hot }: { label: string; items: number[]; hot: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="flex min-h-[8rem] w-16 flex-col-reverse items-center justify-start gap-1 rounded-lg border bg-card/40 p-1.5">
        {items.length === 0 ? (
          <span className="my-auto text-xs text-muted-foreground">empty</span>
        ) : (
          items.map((v, i) => (
            <span key={i} className={`flex w-full items-center justify-center rounded border-2 py-1 text-sm font-medium tabular-nums ${i === items.length - 1 && hot ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{v}</span>
          ))
        )}
      </div>
      <span className="text-[10px] text-muted-foreground">↑ top</span>
    </div>
  );
}

export function QueueStacksRenderer({ step }: RendererProps<QueueStacksData>) {
  const { inS, outS, op, transferring, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{op}</div>

      <div className="flex items-center gap-8">
        <StackColumn label="in-stack" items={inS} hot={transferring} />
        <span className="text-2xl text-muted-foreground">→</span>
        <StackColumn label="out-stack" items={outS} hot={transferring} />
      </div>

      {result !== null && <div className="text-sm">returned <b className="tabular-nums text-role-current">{result}</b></div>}

      <Legend items={[{ role: "current", label: "Being moved / front" }]} />
    </div>
  );
}
