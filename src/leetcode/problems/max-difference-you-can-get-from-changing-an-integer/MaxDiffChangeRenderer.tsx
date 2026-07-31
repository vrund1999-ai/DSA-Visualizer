import type { RendererProps } from "@/core/types";
import type { MaxDiffChangeData } from "./algorithm";

function DigitRow({ label, value, replace }: { label: string; value: string; replace: { from: string; to: string } | null }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-10 text-right text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="flex gap-0.5 font-mono">
        {value.split("").map((c, i) => (
          <span
            key={i}
            className={`flex size-8 items-center justify-center rounded text-sm ${
              replace && c === replace.to ? "bg-role-sorted text-white" : "bg-muted/30"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MaxDiffChangeRenderer({ step }: RendererProps<MaxDiffChangeData>) {
  const { num, s, hi, lo, hiReplace, loReplace, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <DigitRow label="num" value={s} replace={null} />
      {hi && <DigitRow label="max" value={hi} replace={hiReplace} />}
      {lo && <DigitRow label="min" value={lo} replace={loReplace} />}

      <div className="mt-2 rounded-md border px-3 py-1 text-sm tabular-nums">
        max − min = <b>{answer ?? "…"}</b>
      </div>
      <span className="sr-only">{num}</span>
    </div>
  );
}
