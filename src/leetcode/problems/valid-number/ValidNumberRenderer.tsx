import type { RendererProps } from "@/core/types";
import type { ValidNumberData } from "./algorithm";

function Flag({ label, on }: { label: string; on: boolean }) {
  return (
    <span
      className={`rounded px-2 py-0.5 text-xs ${on ? "bg-role-active/30 text-foreground" : "bg-muted/30 text-muted-foreground"}`}
    >
      {label}: {on ? "yes" : "no"}
    </span>
  );
}

export function ValidNumberRenderer({ step }: RendererProps<ValidNumberData>) {
  const { s, scan, digit, dot, exp, rejectedAt, answer } = step.data;
  const chars = s.split("");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1">
        {chars.length === 0 ? (
          <span className="text-sm text-muted-foreground">(empty string)</span>
        ) : (
          chars.map((c, i) => (
            <div
              key={i}
              className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm ${
                i === rejectedAt
                  ? "border-role-swapped bg-role-swapped text-white"
                  : i === scan
                    ? "border-role-current bg-role-current text-white"
                    : "border-border bg-muted/20"
              }`}
            >
              {c === " " ? "␣" : c}
            </div>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <Flag label="digit" on={digit} />
        <Flag label="dot" on={dot} />
        <Flag label="exp" on={exp} />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        valid number? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>
    </div>
  );
}
