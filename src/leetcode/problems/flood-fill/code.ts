export const CODE = [
  "function floodFill(image, sr, sc, color) {", //            0
  "  const start = image[sr][sc];", //                        1
  "  if (start === color) return image;", //                  2
  "  const dfs = (r, c) => {", //                             3
  "    if (image[r]?.[c] !== start) return;", //              4
  "    image[r][c] = color;   // repaint", //                 5
  "    dfs(r+1, c); dfs(r-1, c);", //                         6
  "    dfs(r, c+1); dfs(r, c-1);", //                         7
  "  };", //                                                  8
  "  dfs(sr, sc);", //                                        9
  "  return image;", //                                      10
  "}", //                                                    11
];
