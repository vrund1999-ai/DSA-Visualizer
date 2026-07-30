export const CODE = [
  "function findDuplicateSubtrees(root) {", //                0
  "  const seen = new Map(), dups = [];", //                  1
  "  const serialize = node => {", //                         2
  "    if (!node) return '#';", //                            3
  "    const key = node.val + ',' +", //                      4
  "      serialize(node.left) + ',' +", //                    5
  "      serialize(node.right);", //                          6
  "    const count = (seen.get(key) ?? 0) + 1;", //           7
  "    seen.set(key, count);", //                             8
  "    if (count === 2) dups.push(node);   // first repeat", //9
  "    return key;", //                                      10
  "  };", //                                                 11
  "  serialize(root);", //                                   12
  "  return dups;", //                                       13
  "}", //                                                    14
];
