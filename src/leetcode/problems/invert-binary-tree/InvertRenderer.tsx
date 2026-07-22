import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { InvertData } from "./algorithm";

export function InvertRenderer({ step }: RendererProps<InvertData>) {
  const { heap, current, swapped, done } = step.data;

  const roleFor = (i: number) => {
    if (swapped.includes(i)) return "swapped";
    if (i === current) return "current";
    if (done.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Current node" },
          { role: "swapped", label: "Children swapped" },
          { role: "sorted", label: "Inverted" },
        ]}
      />
    </div>
  );
}
