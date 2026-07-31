import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TypedStringData } from "./algorithm";

export function TypedStringRenderer({ step }: RendererProps<TypedStringData>) {
  const { word, scan, repeats, count, answer } = step.data;
  const repeatSet = new Set(repeats);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {word.split("").map((c, i) => (
          <span
            key={i}
            className={`flex size-9 items-center justify-center rounded text-sm ${
              i === scan ? "bg-role-current text-white" : repeatSet.has(i) ? "bg-role-sorted/30" : "bg-muted/30"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        possible originals = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "comparing" }, { role: "sorted", label: "repeat (candidate long press)" }]} />
    </div>
  );
}
