const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Generate a realistic sequence of add/remove operations. Removes are only
 * emitted when the structure is non-empty (so no gratuitous underflow), and
 * the sequence leans slightly toward adds so something is usually on screen.
 */
export function makeOpSequence<TAdd, TRemove>(
  count: number,
  makeAdd: () => TAdd,
  makeRemove: () => TRemove,
): (TAdd | TRemove)[] {
  const ops: (TAdd | TRemove)[] = [];
  let size = 0;
  for (let i = 0; i < count; i++) {
    const canRemove = size > 0;
    const add = !canRemove || Math.random() < 0.6;
    if (add) {
      ops.push(makeAdd());
      size++;
    } else {
      ops.push(makeRemove());
      size--;
    }
  }
  return ops;
}

export const randValue = () => randInt(1, 99);
