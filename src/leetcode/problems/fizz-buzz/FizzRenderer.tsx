import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FizzData, FizzKind } from "./algorithm";

const KIND_CLASS: Record<FizzKind, string> = {
  num: "border-border bg-muted/30 text-foreground",
  fizz: "border-role-current bg-role-current/15 text-foreground",
  buzz: "border-role-active bg-role-active/15 text-foreground",
  fizzbuzz: "border-role-target bg-role-target/15 text-foreground",
};

export function FizzRenderer({ step }: RendererProps<FizzData>) {
  const { i, cells } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 flex-wrap items-start justify-center gap-1.5">
        {cells.map((c) => (
          <span
            key={c.i}
            className={`flex min-w-[3.5rem] items-center justify-center rounded-md border-2 px-2 py-1.5 font-mono text-xs transition-colors ${KIND_CLASS[c.kind]} ${c.i === i ? "ring-2 ring-primary/50" : ""}`}
          >
            {c.text}
          </span>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "Fizz (÷3)" },
          { role: "active", label: "Buzz (÷5)" },
          { role: "target", label: "FizzBuzz (÷15)" },
        ]}
      />
    </div>
  );
}
