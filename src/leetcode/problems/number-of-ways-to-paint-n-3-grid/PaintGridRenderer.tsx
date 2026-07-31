import type { RendererProps } from "@/core/types";
import type { PaintGridData } from "./algorithm";

export function PaintGridRenderer({ step }: RendererProps<PaintGridData>) {
  const { n, row, aba, abc, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {n} × 3 grid · computing row {row}
      </span>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            <span className="size-6 rounded bg-role-active/60" />
            <span className="size-6 rounded bg-role-pivot/60" />
            <span className="size-6 rounded bg-role-active/60" />
          </div>
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">aba (2 colors)</span>
          <span className="text-lg font-semibold tabular-nums">{aba}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            <span className="size-6 rounded bg-role-active/60" />
            <span className="size-6 rounded bg-role-pivot/60" />
            <span className="size-6 rounded bg-role-target/60" />
          </div>
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">abc (3 colors)</span>
          <span className="text-lg font-semibold tabular-nums">{abc}</span>
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        ways to paint = <b className="tabular-nums">{answer ?? (aba + abc) % 1_000_000_007}</b>
      </div>
    </div>
  );
}
