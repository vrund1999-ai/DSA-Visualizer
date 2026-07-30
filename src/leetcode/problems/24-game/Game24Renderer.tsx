import type { RendererProps } from "@/core/types";
import type { Game24Data } from "./algorithm";

export function Game24Renderer({ step }: RendererProps<Game24Data>) {
  const { original, numbers, formed, value, answer, solution } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">cards</span>
        <div className="flex gap-2">
          {original.map((c, i) => (
            <div key={i} className="flex size-11 items-center justify-center rounded-md border-2 border-role-active bg-role-active/20 text-lg font-semibold">
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">working set</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {numbers.map((v, i) => (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 text-sm tabular-nums ${
                v === "24" ? "border-role-sorted bg-role-sorted text-white" : "border-border"
              }`}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      {formed && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-sm">
          {formed} = {value !== null && (Number.isInteger(value) ? value : value.toFixed(2))}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        make 24? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
        {answer && solution && <span className="ml-2 font-mono text-role-sorted">{solution} = 24</span>}
      </div>
    </div>
  );
}
