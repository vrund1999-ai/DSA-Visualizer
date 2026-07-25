import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CharKind, ValidWordData } from "./algorithm";

const KIND_CLASS: Record<CharKind, string> = {
  vowel: "border-role-sorted bg-role-sorted/15",
  consonant: "border-role-active bg-role-active/20",
  digit: "border-border bg-muted/40 text-muted-foreground",
  illegal: "border-role-compared bg-role-compared/20",
};

export function ValidWordRenderer({ step }: RendererProps<ValidWordData>) {
  const { word, idx, kinds, hasVowel, hasConsonant, lengthOk, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-1">
        {word.split("").map((c, i) => (
          <div key={i} className={`flex size-10 items-center justify-center rounded-md border-2 text-lg font-bold transition-colors ${kinds[i] ? KIND_CLASS[kinds[i]!] : "border-border bg-muted/20"} ${i === idx ? "ring-2 ring-role-current" : ""}`}>{c}</div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className={`rounded-md border px-3 py-1 ${lengthOk ? "border-role-sorted" : "border-role-compared"}`}>length ≥ 3 {lengthOk ? "✓" : "✗"}</span>
        <span className={`rounded-md border px-3 py-1 ${hasVowel ? "border-role-sorted" : ""}`}>vowel {hasVowel ? "✓" : "—"}</span>
        <span className={`rounded-md border px-3 py-1 ${hasConsonant ? "border-role-sorted" : ""}`}>consonant {hasConsonant ? "✓" : "—"}</span>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Valid word ✓" : "Invalid word ✗"}
        </div>
      )}

      <Legend items={[{ role: "sorted", label: "Vowel" }, { role: "active", label: "Consonant" }, { role: "compared", label: "Illegal" }]} />
    </div>
  );
}
