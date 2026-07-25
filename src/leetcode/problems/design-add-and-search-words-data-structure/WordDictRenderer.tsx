import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { WordDictData } from "./algorithm";

export function WordDictRenderer({ step }: RendererProps<WordDictData>) {
  const { trie, op, path, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-current px-3 py-1 font-mono">{op}</span>
        {result !== null && <span className={`rounded-md px-3 py-1 font-semibold ${result ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>{String(result)}</span>}
      </div>

      <div className="flex flex-col gap-0.5">
        {trie.length === 0 ? (
          <span className="text-sm text-muted-foreground">(empty trie)</span>
        ) : (
          trie.map((row) => {
            const onPath = path.includes(row.id);
            return (
              <div key={row.id} className="flex items-center" style={{ paddingLeft: `${(row.depth - 1) * 1.5}rem` }}>
                {row.depth > 1 && <span className="text-muted-foreground/50">└</span>}
                <span className={`flex size-8 items-center justify-center rounded-md border-2 font-mono text-sm ${onPath ? "border-role-current bg-role-current text-white" : row.end ? "border-role-sorted bg-role-sorted/15" : "border-border bg-muted/30"}`}>{row.char}</span>
                {row.end && <span className="ml-1 text-xs text-role-sorted">●</span>}
              </div>
            );
          })
        )}
      </div>

      <Legend items={[{ role: "current", label: "Op path" }, { role: "sorted", label: "Word end (●)" }]} />
    </div>
  );
}
