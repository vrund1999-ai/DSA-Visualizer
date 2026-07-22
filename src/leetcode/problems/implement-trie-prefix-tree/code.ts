export const CODE = [
  "class Trie {", //                                            0
  "  constructor() { this.root = {}; }", //                     1
  "  insert(word) {", //                                        2
  "    let node = this.root;", //                               3
  "    for (const ch of word)", //                              4
  "      node = node[ch] ??= {};", //                           5
  "    node.end = true;", //                                    6
  "  }", //                                                     7
  "  search(word) { return this._find(word)?.end === true; }",// 8
  "  startsWith(pre) { return !!this._find(pre); }", //         9
  "  _find(s) {", //                                            10
  "    let node = this.root;", //                               11
  "    for (const ch of s) {", //                               12
  "      if (!node[ch]) return null;", //                       13
  "      node = node[ch];", //                                  14
  "    }", //                                                   15
  "    return node;", //                                        16
  "  }", //                                                     17
  "}", //                                                       18
];
