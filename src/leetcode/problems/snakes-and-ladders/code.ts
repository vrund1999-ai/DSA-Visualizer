export const CODE = [
  "function snakesAndLadders(board) {", //                    0
  "  const n = board.length;", //                             1
  "  const cell = (s) => { /* boustrophedon → [r,c] */ };", // 2
  "  const dist = new Array(n*n + 1).fill(-1);", //           3
  "  dist[1] = 0;", //                                        4
  "  let queue = [1];", //                                    5
  "  while (queue.length) {", //                              6
  "    const next = [];", //                                  7
  "    for (const s of queue)", //                            8
  "      for (let d = 1; d <= 6; d++) {   // dice roll", //   9
  "        let t = s + d;", //                               10
  "        const [r, c] = cell(t);", //                      11
  "        if (board[r][c] !== -1) t = board[r][c]; // jump", // 12
  "        if (t <= n*n && dist[t] === -1) {", //            13
  "          dist[t] = dist[s] + 1; next.push(t);", //       14
  "        }", //                                            15
  "      }", //                                              16
  "    queue = next;", //                                    17
  "  }", //                                                  18
  "  return dist[n*n];", //                                  19
  "}", //                                                    20
];
