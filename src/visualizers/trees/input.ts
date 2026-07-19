import type { TreeInput } from "./types";

/**
 * A fresh insertion sequence: distinct values in a random order, so the
 * resulting BST is varied but not cluttered with duplicates.
 */
export function makeTreeInput(size = 9): TreeInput {
  const pool = Array.from({ length: 90 }, (_, i) => i + 10); // 10..99
  // Fisher–Yates partial shuffle to pick `size` distinct values.
  for (let i = 0; i < size; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, size);
}
