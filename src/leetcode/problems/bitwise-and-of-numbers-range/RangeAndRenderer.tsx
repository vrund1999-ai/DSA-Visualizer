import type { RendererProps } from "@/core/types";
import type { RangeAndData } from "./algorithm";

const WIDTH = 12;
const bits = (x: number) =>
  Array.from({ length: WIDTH }, (_, i) => (x >> (WIDTH - 1 - i)) & 1);

function BitRow({ label, value, shift }: { label: string; value: number; shift: number }) {
  const b = bits(value);
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 text-right font-mono text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-0.5 font-mono">
        {b.map((bit, i) => {
          const stripped = i >= WIDTH - shift;
          return (
            <span
              key={i}
              className={`flex size-6 items-center justify-center rounded text-sm ${
                stripped ? "bg-muted/20 text-muted-foreground/40" : bit ? "bg-role-active/40" : "bg-muted/30"
              }`}
            >
              {bit}
            </span>
          );
        })}
      </div>
      <span className="w-8 text-right font-mono text-xs tabular-nums">{value}</span>
    </div>
  );
}

export function RangeAndRenderer({ step }: RendererProps<RangeAndData>) {
  const { origLeft, origRight, left, right, shift, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1.5">
        <BitRow label={`${origLeft}`} value={left} shift={shift} />
        <BitRow label={`${origRight}`} value={right} shift={shift} />
      </div>

      <div className="text-xs text-muted-foreground tabular-nums">shift = {shift}</div>

      <div className="rounded-md border px-3 py-1 text-sm">
        AND = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
