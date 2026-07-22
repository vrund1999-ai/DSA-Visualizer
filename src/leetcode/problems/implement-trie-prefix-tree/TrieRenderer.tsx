import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TrieData, TrieNodeView } from "./algorithm";

interface TreeNode extends TrieNodeView {
  children: TreeNode[];
}

function buildTree(nodes: TrieNodeView[]): TreeNode | null {
  const map = new Map<number, TreeNode>();
  for (const n of nodes) map.set(n.id, { ...n, children: [] });
  let root: TreeNode | null = null;
  for (const n of nodes) {
    const tn = map.get(n.id)!;
    if (n.parent === null) root = tn;
    else map.get(n.parent)?.children.push(tn);
  }
  return root;
}

export function TrieRenderer({ step }: RendererProps<TrieData>) {
  const { nodes, op, path, result } = step.data;
  const root = buildTree(nodes);
  const onPath = new Set(path);

  const renderNode = (node: TreeNode, depth: number) => {
    const active = onPath.has(node.id);
    return (
      <div key={node.id} className="flex flex-col items-start" style={{ marginLeft: depth === 0 ? 0 : 16 }}>
        <div className="flex items-center gap-1.5">
          <span
            className={`flex size-8 items-center justify-center rounded-md border-2 font-mono text-sm transition-colors ${
              active ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"
            } ${node.end ? "ring-2 ring-role-sorted/60" : ""}`}
          >
            {node.parent === null ? "•" : node.ch}
          </span>
          {node.end && <span className="text-[10px] text-role-sorted">end</span>}
        </div>
        {node.children.map((c) => renderNode(c, depth + 1))}
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">{op}</span>
        {result !== null && <span className={`font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>→ {String(result)}</span>}
      </div>

      <div className="flex flex-1 items-start justify-center overflow-auto">
        <div className="flex flex-col items-start gap-1 rounded-lg border bg-card/40 p-4">
          {root ? renderNode(root, 0) : <span className="text-xs text-muted-foreground">empty trie</span>}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Path walked" },
          { role: "sorted", label: "Word end (ring)" },
        ]}
      />
    </div>
  );
}
