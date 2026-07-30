export const CODE = [
  "function totalCost(costs, k, candidates) {", //            0
  "  let lo = 0, hi = costs.length - 1;", //                  1
  "  const L = new MinHeap(), R = new MinHeap();", //         2
  "  let total = 0;", //                                      3
  "  for (let h = 0; h < k; h++) {", //                       4
  "    while (L.size() < candidates && lo <= hi)", //         5
  "      L.push([costs[lo], lo++]);", //                      6
  "    while (R.size() < candidates && lo <= hi)", //         7
  "      R.push([costs[hi], hi--]);", //                      8
  "    const l = L.peek(), r = R.peek();", //                 9
  "    if (l <= r) total += L.pop();   // cheaper front", // 10
  "    else total += R.pop();   // cheaper back", //         11
  "  }", //                                                  12
  "  return total;", //                                      13
  "}", //                                                    14
];
