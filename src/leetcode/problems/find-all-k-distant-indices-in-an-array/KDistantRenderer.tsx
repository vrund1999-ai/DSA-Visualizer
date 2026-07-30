import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KDistantData } from "./algorithm";

export function KDistantRenderer({ step }: RendererProps<KDistantData>) {
  const { nums, key, keyIndex, window, result, answer } = step.data;
  const resultSet = new Set(result);
  const shown = answer ?? result;

  const roleFor = (i: number) => {
    if (i === keyIndex) return "current";
    if (window && i >= window[0] && i <= window[1]) return "compared";
    if (resultSet.has(i)) return "path";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (nums[i] === key ? "key" : "")} />

      <div className="rounded-md border px-3 py-1 text-sm">
        indices = <b className="tabular-nums">[{shown.join(", ")}]</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "key occurrence" },
          { role: "compared", label: "current window ±k" },
          { role: "path", label: "collected indices" },
        ]}
      />
    </div>
  );
}
