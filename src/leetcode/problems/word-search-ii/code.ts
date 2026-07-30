export const CODE = [
  "function findWords(board, words) {", //                    0
  "  const trie = buildTrie(words);", //                      1
  "  const found = new Set();", //                            2
  "  function dfs(r, c, node) {", //                          3
  "    const ch = board[r][c];", //                           4
  "    const next = node.children[ch];", //                   5
  "    if (!next) return;   // no word uses this prefix", //  6
  "    if (next.word) found.add(next.word);", //              7
  "    board[r][c] = '#';   // mark visited", //              8
  "    for (const [nr, nc] of nbrs(r, c))", //                9
  "      if (board[nr][nc] !== '#') dfs(nr, nc, next);", //  10
  "    board[r][c] = ch;   // backtrack", //                 11
  "  }", //                                                  12
  "  for (each cell) dfs(r, c, trie.root);", //              13
  "  return [...found];", //                                 14
  "}", //                                                    15
];
