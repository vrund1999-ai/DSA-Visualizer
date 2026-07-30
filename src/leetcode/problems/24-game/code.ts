export const CODE = [
  "function judgePoint24(nums) {", //                         0
  "  const solve = arr => {", //                              1
  "    if (arr.length === 1)", //                             2
  "      return Math.abs(arr[0] - 24) < 1e-6;", //            3
  "    for (let i = 0; i < arr.length; i++)", //              4
  "      for (let j = 0; j < arr.length; j++) {", //          5
  "        if (i === j) continue;", //                        6
  "        const rest = arr.filter((_, k) => k!==i && k!==j);",//7
  "        for (const v of combine(arr[i], arr[j]))", //      8
  "          if (solve([...rest, v])) return true;", //       9
  "      }", //                                              10
  "    return false;", //                                    11
  "  };", //                                                 12
  "  return solve(nums);   // combine: + - * /", //          13
  "}", //                                                    14
];
