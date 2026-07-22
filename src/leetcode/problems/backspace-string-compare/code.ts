export const CODE = [
  "function backspaceCompare(s, t) {", //                    0
  "  const build = str => {", //                            1
  "    const out = [];", //                                 2
  "    for (const c of str)", //                            3
  "      c === '#' ? out.pop() : out.push(c);", //          4
  "    return out.join('');", //                            5
  "  };", //                                                6
  "  return build(s) === build(t);", //                     7
  "}", //                                                   8
];
