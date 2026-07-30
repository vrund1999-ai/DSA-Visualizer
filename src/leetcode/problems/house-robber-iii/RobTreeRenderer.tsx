import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { RobTreeData } from "./algorithm";

export function RobTreeRenderer({ step }: RendererProps<RobTreeData>) {
  const { heap, dp, cur, robbed, answer } = step.data;
  const robbedSet = new Set(robbed);

  const roleFor = (i: number) => {
    if (answer !== null && robbedSet.has(i)) return "sorted";
    if (i === cur) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={roleFor} />

      {cur !== null && dp[cur] && (
        <div className="text-sm text-muted-foreground">
          node {heap[cur]}: rob = <b className="text-foreground">{dp[cur][0]}</b>, skip = <b className="text-foreground">{dp[cur][1]}</b>
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">max robbed = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "sorted", label: "Robbed house" }]} />
    </div>
  );
}
