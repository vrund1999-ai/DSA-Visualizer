import { Badge } from "@/components/ui/badge";
import type { Complexity } from "@/core/types";

export function ComplexityBadge({ complexity }: { complexity: Complexity }) {
  const items = [
    complexity.timeBest && (["Best", complexity.timeBest] as const),
    ["Avg", complexity.timeAverage] as const,
    ["Worst", complexity.timeWorst] as const,
    ["Space", complexity.space] as const,
  ].filter(Boolean) as ReadonlyArray<readonly [string, string]>;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([k, v]) => (
        <Badge key={k} variant="secondary" className="font-mono">
          <span className="mr-1 text-muted-foreground">{k}</span>
          {v}
        </Badge>
      ))}
      {complexity.stable !== undefined && (
        <Badge variant="outline">
          {complexity.stable ? "Stable" : "Unstable"}
        </Badge>
      )}
      {complexity.inPlace !== undefined && (
        <Badge variant="outline">
          {complexity.inPlace ? "In-place" : "Out-of-place"}
        </Badge>
      )}
    </div>
  );
}
