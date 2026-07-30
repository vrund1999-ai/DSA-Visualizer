import type { RendererProps } from "@/core/types";
import type { ExprData } from "./algorithm";

export function ExprRenderer({ step }: RendererProps<ExprData>) {
  const { num, target, current, currentVal, hit, found, answer } = step.data;
  const shown = answer ?? found;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-2xl tracking-widest">{num}</span>
        <span className="text-sm text-muted-foreground">target = {target}</span>
      </div>

      {current && (
        <div
          className={`rounded-md border px-4 py-2 font-mono text-lg ${
            hit ? "border-role-sorted bg-role-sorted/20" : "border-role-current bg-role-current/10"
          }`}
        >
          {current} = {currentVal}
          {hit && <span className="ml-2 text-role-sorted">✓</span>}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          valid expressions ({shown.length})
        </span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {shown.length === 0 ? (
            <span className="text-sm text-muted-foreground">(none yet)</span>
          ) : (
            shown.map((e) => (
              <span key={e} className="rounded bg-role-sorted/20 px-2 py-0.5 font-mono text-sm">
                {e}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
