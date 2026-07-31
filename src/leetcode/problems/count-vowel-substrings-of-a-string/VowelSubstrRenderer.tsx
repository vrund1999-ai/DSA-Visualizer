import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { VowelSubstrData } from "./algorithm";

export function VowelSubstrRenderer({ step }: RendererProps<VowelSubstrData>) {
  const { word, i, j, seen, count, answer } = step.data;
  const seenSet = new Set(seen);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {word.split("").map((c, idx) => {
          const inWin = i !== null && j !== null && idx >= i && idx <= j;
          return (
            <span
              key={idx}
              className={`flex size-8 items-center justify-center rounded text-sm ${
                inWin ? "bg-role-sorted text-white" : "aeiou".includes(c) ? "bg-role-active/30" : "bg-muted/20 text-muted-foreground"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>

      <div className="flex gap-1.5">
        {"aeiou".split("").map((v) => (
          <span
            key={v}
            className={`flex size-7 items-center justify-center rounded border text-sm ${
              seenSet.has(v) ? "border-role-sorted bg-role-sorted/20" : "border-border text-muted-foreground"
            }`}
          >
            {v}
          </span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        vowel substrings = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "valid substring / seen vowels" }, { role: "active", label: "vowel" }]} />
    </div>
  );
}
