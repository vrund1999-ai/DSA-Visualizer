import type { SearchInput } from "./types";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Build a fresh search case. `sorted` ascending for binary search; the target
 * is an existing element ~70% of the time and otherwise a likely-absent value,
 * so both the "found" and "not present" paths get exercised across randomizes.
 */
export function makeSearchInput({
  sorted,
  size = 12,
  min = 1,
  max = 99,
}: {
  sorted: boolean;
  size?: number;
  min?: number;
  max?: number;
}): SearchInput {
  const values = Array.from({ length: size }, () => randInt(min, max));
  if (sorted) values.sort((a, b) => a - b);

  const target =
    Math.random() < 0.7
      ? values[randInt(0, values.length - 1)]
      : randInt(min, max);

  return { values, target };
}
