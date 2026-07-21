import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MoveZeroesData } from "./algorithm";

export function MoveZeroesRenderer({ step }: RendererProps<MoveZeroesData>) {
  const { nums, i, slow } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => {
          const parts = [];
          if (idx === slow) parts.push("w");
          if (idx === i) parts.push("i");
          return parts.join("/");
        }}
      />
      <p className="text-center text-sm text-muted-foreground">
        <span className="font-mono">w</span> = write pointer,{" "}
        <span className="font-mono">i</span> = scanner
      </p>
      <Legend
        items={[
          { role: "current", label: "Scanner" },
          { role: "active", label: "Write pointer" },
          { role: "swapped", label: "Swapped" },
          { role: "sorted", label: "Placed" },
        ]}
      />
    </div>
  );
}
