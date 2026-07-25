export const CODE = [
  "class WordDictionary {", //                                0
  "  root = {};   // trie node: char -> child, $ = end", //   1
  "  addWord(word) {", //                                     2
  "    let node = this.root;", //                             3
  "    for (const ch of word)", //                            4
  "      node = node[ch] ??= {};", //                         5
  "    node.$ = true;   // mark word end", //                 6
  "  }", //                                                   7
  "  search(word, node = this.root, i = 0) {", //             8
  "    if (i === word.length) return !!node.$;", //           9
  "    const ch = word[i];", //                              10
  "    if (ch === '.')   // wildcard: try every child", //   11
  "      return Object.keys(node).some(k =>", //             12
  "        k !== '$' && this.search(word, node[k], i + 1));", // 13
  "    return node[ch] && this.search(word, node[ch], i+1);", // 14
  "  }", //                                                  15
  "}", //                                                    16
];
