export const CODE = [
  "function removeDuplicateLetters(s) {", //                  0
  "  const last = {};", //                                    1
  "  [...s].forEach((c, i) => last[c] = i);   // last index",//2
  "  const stack = [], inStack = new Set();", //              3
  "  for (let i = 0; i < s.length; i++) {", //                4
  "    const c = s[i];", //                                   5
  "    if (inStack.has(c)) continue;   // already used", //   6
  "    while (stack.length && stack.at(-1) > c &&", //        7
  "           last[stack.at(-1)] > i) {", //                  8
  "      inStack.delete(stack.pop());   // can re-add later",//9
  "    }", //                                                10
  "    stack.push(c); inStack.add(c);", //                   11
  "  }", //                                                  12
  "  return stack.join('');", //                             13
  "}", //                                                    14
];
