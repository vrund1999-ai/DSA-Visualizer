import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ReverseVowelsData } from "./algorithm";

const VOWELS = new Set("aeiouAEIOU");

export function ReverseVowelsRenderer({ step }: RendererProps<ReverseVowelsData>) {
  const { chars, i, j, swapped } = step.data;

  const roleFor = (k: number) => {
    if (swapped && (k === swapped[0] || k === swapped[1])) return "swapped";
    if (k === i || k === j) return "current";
    if (VOWELS.has(chars[k])) return "active";
    return "default";
  };

  const topLabel = (k: number) => {
    const parts: string[] = [];
    if (k === i) parts.push("i");
    if (k === j) parts.push("j");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} topLabel={topLabel} showIndex={false} />
      <Legend items={[{ role: "current", label: "i / j" }, { role: "active", label: "Vowel" }, { role: "swapped", label: "Swapped" }]} />
    </div>
  );
}
