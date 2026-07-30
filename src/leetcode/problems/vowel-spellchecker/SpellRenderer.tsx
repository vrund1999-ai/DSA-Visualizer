import type { RendererProps } from "@/core/types";
import type { SpellData } from "./algorithm";

const RULE_CLASS: Record<string, string> = {
  exact: "bg-role-sorted/20 border-role-sorted",
  caps: "bg-role-active/20 border-role-active",
  vowel: "bg-role-pivot/20 border-role-pivot",
  none: "bg-muted/30 border-border",
};

export function SpellRenderer({ step }: RendererProps<SpellData>) {
  const { wordlist, queries, qIndex, rule, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">wordlist</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {wordlist.map((w) => (
            <span
              key={w}
              className={`rounded border px-2 py-0.5 font-mono text-sm ${
                result && w === result ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {queries.map((q, i) => (
          <span
            key={i}
            className={`rounded-md border px-2 py-1 font-mono text-sm ${
              i === qIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {q}
          </span>
        ))}
      </div>

      {rule && (
        <div className={`rounded-md border px-3 py-1 text-sm ${RULE_CLASS[rule]}`}>
          {rule} match → <b className="font-mono">{result === "" ? '""' : result}</b>
        </div>
      )}
    </div>
  );
}
